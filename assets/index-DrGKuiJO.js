var q_=Object.defineProperty;var j_=(t,e,n)=>e in t?q_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var On=(t,e,n)=>j_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function K_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bm={exports:{}},Bl={},zm={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),Z_=Symbol.for("react.portal"),Q_=Symbol.for("react.fragment"),J_=Symbol.for("react.strict_mode"),ev=Symbol.for("react.profiler"),tv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),iv=Symbol.for("react.forward_ref"),rv=Symbol.for("react.suspense"),sv=Symbol.for("react.memo"),av=Symbol.for("react.lazy"),Eh=Symbol.iterator;function ov(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hm=Object.assign,Gm={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Vm}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wm(){}Wm.prototype=zs.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=Gm,this.updater=n||Vm}var rd=id.prototype=new Wm;rd.constructor=id;Hm(rd,zs.prototype);rd.isPureReactComponent=!0;var Th=Array.isArray,Xm=Object.prototype.hasOwnProperty,sd={current:null},$m={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Xm.call(e,i)&&!$m.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:sd.current}}function lv(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function cv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wh=/\/+/g;function lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cv(""+t.key):e.toString(36)}function zo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case Z_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+lc(a,0):i,Th(r)?(n="",t!=null&&(n=t.replace(wh,"$&/")+"/"),zo(r,e,n,"",function(c){return c})):r!=null&&(ad(r)&&(r=lv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(wh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Th(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+lc(s,o);a+=zo(s,e,n,l,r)}else if(l=ov(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+lc(s,o++),a+=zo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Qa(t,e,n){if(t==null)return t;var i=[],r=0;return zo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function uv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Vo={transition:null},fv={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:sd};function qm(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=zs;ze.Fragment=Q_;ze.Profiler=ev;ze.PureComponent=id;ze.StrictMode=J_;ze.Suspense=rv;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;ze.act=qm;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Xm.call(e,l)&&!$m.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};ze.createContext=function(t){return t={$$typeof:nv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tv,_context:t},t.Consumer=t};ze.createElement=Ym;ze.createFactory=function(t){var e=Ym.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:iv,render:t}};ze.isValidElement=ad;ze.lazy=function(t){return{$$typeof:av,_payload:{_status:-1,_result:t},_init:uv}};ze.memo=function(t,e){return{$$typeof:sv,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Vo.transition;Vo.transition={};try{t()}finally{Vo.transition=e}};ze.unstable_act=qm;ze.useCallback=function(t,e){return sn.current.useCallback(t,e)};ze.useContext=function(t){return sn.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};ze.useEffect=function(t,e){return sn.current.useEffect(t,e)};ze.useId=function(){return sn.current.useId()};ze.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return sn.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};ze.useRef=function(t){return sn.current.useRef(t)};ze.useState=function(t){return sn.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return sn.current.useTransition()};ze.version="18.3.1";zm.exports=ze;var it=zm.exports;const dv=K_(it);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv=it,pv=Symbol.for("react.element"),mv=Symbol.for("react.fragment"),gv=Object.prototype.hasOwnProperty,_v=hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vv={key:!0,ref:!0,__self:!0,__source:!0};function jm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)gv.call(e,i)&&!vv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:pv,type:t,key:s,ref:a,props:r,_owner:_v.current}}Bl.Fragment=mv;Bl.jsx=jm;Bl.jsxs=jm;Bm.exports=Bl;var P=Bm.exports,_u={},Km={exports:{}},En={},Zm={exports:{}},Qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,$){var J=F.length;F.push($);e:for(;0<J;){var ne=J-1>>>1,ae=F[ne];if(0<r(ae,$))F[ne]=$,F[J]=ae,J=ne;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var $=F[0],J=F.pop();if(J!==$){F[0]=J;e:for(var ne=0,ae=F.length,Oe=ae>>>1;ne<Oe;){var We=2*(ne+1)-1,He=F[We],K=We+1,oe=F[K];if(0>r(He,J))K<ae&&0>r(oe,He)?(F[ne]=oe,F[K]=J,ne=K):(F[ne]=He,F[We]=J,ne=We);else if(K<ae&&0>r(oe,J))F[ne]=oe,F[K]=J,ne=K;else break e}}return $}function r(F,$){var J=F.sortIndex-$.sortIndex;return J!==0?J:F.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,p=!1,g=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(F){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=F)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function y(F){if(M=!1,S(F),!g)if(n(l)!==null)g=!0,j(w);else{var $=n(c);$!==null&&H(y,$.startTime-F)}}function w(F,$){g=!1,M&&(M=!1,u(x),x=-1),p=!0;var J=f;try{for(S($),h=n(l);h!==null&&(!(h.expirationTime>$)||F&&!L());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var ae=ne(h.expirationTime<=$);$=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(l)&&i(l),S($)}else i(l);h=n(l)}if(h!==null)var Oe=!0;else{var We=n(c);We!==null&&H(y,We.startTime-$),Oe=!1}return Oe}finally{h=null,f=J,p=!1}}var T=!1,C=null,x=-1,A=5,b=-1;function L(){return!(t.unstable_now()-b<A)}function D(){if(C!==null){var F=t.unstable_now();b=F;var $=!0;try{$=C(!0,F)}finally{$?X():(T=!1,C=null)}}else T=!1}var X;if(typeof v=="function")X=function(){v(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,B=Z.port2;Z.port1.onmessage=D,X=function(){B.postMessage(null)}}else X=function(){m(D,0)};function j(F){C=F,T||(T=!0,X())}function H(F,$){x=m(function(){F(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,j(w))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var J=f;f=$;try{return F()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=f;f=F;try{return $()}finally{f=J}},t.unstable_scheduleCallback=function(F,$,J){var ne=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ne+J:ne):J=ne,F){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=J+ae,F={id:d++,callback:$,priorityLevel:F,startTime:J,expirationTime:ae,sortIndex:-1},J>ne?(F.sortIndex=J,e(c,F),n(l)===null&&F===n(c)&&(M?(u(x),x=-1):M=!0,H(y,J-ne))):(F.sortIndex=ae,e(l,F),g||p||(g=!0,j(w))),F},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(F){var $=f;return function(){var J=f;f=$;try{return F.apply(this,arguments)}finally{f=J}}}})(Qm);Zm.exports=Qm;var xv=Zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=it,Mn=xv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jm=new Set,Ma={};function Vr(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(Ma[t]=e,t=0;t<e.length;t++)Jm.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,Sv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ah={},Ch={};function Mv(t){return vu.call(Ch,t)?!0:vu.call(Ah,t)?!1:Sv.test(t)?Ch[t]=!0:(Ah[t]=!0,!1)}function Ev(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Tv(t,e,n,i){if(e===null||typeof e>"u"||Ev(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ld);Wt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ld);Wt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ld);Wt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Tv(e,n,r,i)&&(n=null),i||r===null?Mv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),ls=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),yu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),Rh=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=Rh&&t[Rh]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,cc;function oa(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var uc=!1;function fc(t,e){if(!t||uc)return"";uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function wv(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function Mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case ls:return"Portal";case xu:return"Profiler";case ud:return"StrictMode";case yu:return"Suspense";case Su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tg:return(t.displayName||"Context")+".Consumer";case eg:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:Mu(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Mu(t(e))}catch{}}return null}function Av(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cv(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eo(t){t._valueTracker||(t._valueTracker=Cv(t))}function rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sg(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function Tu(t,e){sg(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&wu(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wu(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var la=Array.isArray;function ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Au(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(la(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function ag(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var to,lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=to.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rv=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){Rv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var bv=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(bv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pu=null;function hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lu=null,Ss=null,Ms=null;function Dh(t){if(t=Wa(t)){if(typeof Lu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Wl(e),Lu(t.stateNode,t.type,e))}}function fg(t){Ss?Ms?Ms.push(t):Ms=[t]:Ss=t}function dg(){if(Ss){var t=Ss,e=Ms;if(Ms=Ss=null,Dh(t),e)for(t=0;t<e.length;t++)Dh(e[t])}}function hg(t,e){return t(e)}function pg(){}var dc=!1;function mg(t,e,n){if(dc)return t(e,n);dc=!0;try{return hg(t,e,n)}finally{dc=!1,(Ss!==null||Ms!==null)&&(pg(),dg())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Nu=!1;if(bi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Nu=!1}function Pv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var pa=!1,sl=null,al=!1,Du=null,Lv={onError:function(t){pa=!0,sl=t}};function Nv(t,e,n,i,r,s,a,o,l){pa=!1,sl=null,Pv.apply(Lv,arguments)}function Dv(t,e,n,i,r,s,a,o,l){if(Nv.apply(this,arguments),pa){if(pa){var c=sl;pa=!1,sl=null}else throw Error(ie(198));al||(al=!0,Du=c)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(Hr(t)!==t)throw Error(ie(188))}function Iv(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ih(r),t;if(s===i)return Ih(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function _g(t){return t=Iv(t),t!==null?vg(t):null}function vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vg(t);if(e!==null)return e;t=t.sibling}return null}var xg=Mn.unstable_scheduleCallback,Uh=Mn.unstable_cancelCallback,Uv=Mn.unstable_shouldYield,Fv=Mn.unstable_requestPaint,wt=Mn.unstable_now,Ov=Mn.unstable_getCurrentPriorityLevel,pd=Mn.unstable_ImmediatePriority,yg=Mn.unstable_UserBlockingPriority,ol=Mn.unstable_NormalPriority,kv=Mn.unstable_LowPriority,Sg=Mn.unstable_IdlePriority,zl=null,li=null;function Bv(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:Hv,zv=Math.log,Vv=Math.LN2;function Hv(t){return t>>>=0,t===0?32:31-(zv(t)/Vv|0)|0}var no=64,io=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ca(o):(s&=a,s!==0&&(i=ca(s)))}else a=n&~r,a!==0?i=ca(a):s!==0&&(i=ca(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function Gv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-qn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Gv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Iu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mg(){var t=no;return no<<=1,!(no&4194240)&&(no=64),t}function hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function Xv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tg,gd,wg,Ag,Cg,Uu=!1,ro=[],er=null,tr=null,nr=null,wa=new Map,Aa=new Map,qi=[],$v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Yv(t,e,n,i,r){switch(e){case"focusin":return er=Ys(er,t,e,n,i,r),!0;case"dragenter":return tr=Ys(tr,t,e,n,i,r),!0;case"mouseover":return nr=Ys(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,Ys(wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Ys(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function Rg(t){var e=wr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=gg(n),e!==null){t.blockedOn=e,Cg(t.priority,function(){wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pu=i,n.target.dispatchEvent(i),Pu=null}else return e=Wa(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function Oh(t,e,n){Ho(t)&&n.delete(e)}function qv(){Uu=!1,er!==null&&Ho(er)&&(er=null),tr!==null&&Ho(tr)&&(tr=null),nr!==null&&Ho(nr)&&(nr=null),wa.forEach(Oh),Aa.forEach(Oh)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uu||(Uu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,qv)))}function Ca(t){function e(r){return qs(r,t)}if(0<ro.length){qs(ro[0],t);for(var n=1;n<ro.length;n++){var i=ro[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&qs(er,t),tr!==null&&qs(tr,t),nr!==null&&qs(nr,t),wa.forEach(e),Aa.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&qi.shift()}var Es=Ui.ReactCurrentBatchConfig,cl=!0;function jv(t,e,n,i){var r=tt,s=Es.transition;Es.transition=null;try{tt=1,_d(t,e,n,i)}finally{tt=r,Es.transition=s}}function Kv(t,e,n,i){var r=tt,s=Es.transition;Es.transition=null;try{tt=4,_d(t,e,n,i)}finally{tt=r,Es.transition=s}}function _d(t,e,n,i){if(cl){var r=Fu(t,e,n,i);if(r===null)Ec(t,e,i,ul,n),Fh(t,i);else if(Yv(r,t,e,n,i))i.stopPropagation();else if(Fh(t,i),e&4&&-1<$v.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&Tg(s),s=Fu(t,e,n,i),s===null&&Ec(t,e,i,ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ec(t,e,i,null,n)}}var ul=null;function Fu(t,e,n,i){if(ul=null,t=hd(i),t=wr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ov()){case pd:return 1;case yg:return 4;case ol:case kv:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var Zi=null,vd=null,Go=null;function Pg(){if(Go)return Go;var t,e=vd,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Go=r.slice(t,1<i?1-i:void 0)}function Wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function kh(){return!1}function Tn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?so:kh,this.isPropagationStopped=kh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=Tn(Vs),Ga=mt({},Vs,{view:0,detail:0}),Zv=Tn(Ga),pc,mc,js,Vl=mt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(pc=t.screenX-js.screenX,mc=t.screenY-js.screenY):mc=pc=0,js=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),Bh=Tn(Vl),Qv=mt({},Vl,{dataTransfer:0}),Jv=Tn(Qv),ex=mt({},Ga,{relatedTarget:0}),gc=Tn(ex),tx=mt({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=Tn(tx),ix=mt({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rx=Tn(ix),sx=mt({},Vs,{data:0}),zh=Tn(sx),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lx[t])?!!e[t]:!1}function yd(){return cx}var ux=mt({},Ga,{key:function(t){if(t.key){var e=ax[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ox[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fx=Tn(ux),dx=mt({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=Tn(dx),hx=mt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),px=Tn(hx),mx=mt({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=Tn(mx),_x=mt({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vx=Tn(_x),xx=[9,13,27,32],Sd=bi&&"CompositionEvent"in window,ma=null;bi&&"documentMode"in document&&(ma=document.documentMode);var yx=bi&&"TextEvent"in window&&!ma,Lg=bi&&(!Sd||ma&&8<ma&&11>=ma),Hh=" ",Gh=!1;function Ng(t,e){switch(t){case"keyup":return xx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function Sx(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(Gh=!0,Hh);case"textInput":return t=e.data,t===Hh&&Gh?null:t;default:return null}}function Mx(t,e){if(us)return t==="compositionend"||!Sd&&Ng(t,e)?(t=Pg(),Go=vd=Zi=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lg&&e.locale!=="ko"?null:e.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ex[t.type]:e==="textarea"}function Ig(t,e,n,i){fg(i),e=fl(e,"onChange"),0<e.length&&(n=new xd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ga=null,Ra=null;function Tx(t){Xg(t,0)}function Hl(t){var e=hs(t);if(rg(e))return t}function wx(t,e){if(t==="change")return e}var Ug=!1;if(bi){var _c;if(bi){var vc="oninput"in document;if(!vc){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),vc=typeof Xh.oninput=="function"}_c=vc}else _c=!1;Ug=_c&&(!document.documentMode||9<document.documentMode)}function $h(){ga&&(ga.detachEvent("onpropertychange",Fg),Ra=ga=null)}function Fg(t){if(t.propertyName==="value"&&Hl(Ra)){var e=[];Ig(e,Ra,t,hd(t)),mg(Tx,e)}}function Ax(t,e,n){t==="focusin"?($h(),ga=e,Ra=n,ga.attachEvent("onpropertychange",Fg)):t==="focusout"&&$h()}function Cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Ra)}function Rx(t,e){if(t==="click")return Hl(e)}function bx(t,e){if(t==="input"||t==="change")return Hl(e)}function Px(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Px;function ba(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vu.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=Yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function Og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kg(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Lx(t){var e=kg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Og(n.ownerDocument.documentElement,n)){if(i!==null&&Md(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qh(n,s);var a=qh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Nx=bi&&"documentMode"in document&&11>=document.documentMode,fs=null,Ou=null,_a=null,ku=!1;function jh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||fs==null||fs!==rl(i)||(i=fs,"selectionStart"in i&&Md(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&ba(_a,i)||(_a=i,i=fl(Ou,"onSelect"),0<i.length&&(e=new xd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},xc={},Bg={};bi&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Gl(t){if(xc[t])return xc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bg)return xc[t]=e[n];return t}var zg=Gl("animationend"),Vg=Gl("animationiteration"),Hg=Gl("animationstart"),Gg=Gl("transitionend"),Wg=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){Wg.set(t,e),Vr(e,[t])}for(var yc=0;yc<Kh.length;yc++){var Sc=Kh[yc],Dx=Sc.toLowerCase(),Ix=Sc[0].toUpperCase()+Sc.slice(1);fr(Dx,"on"+Ix)}fr(zg,"onAnimationEnd");fr(Vg,"onAnimationIteration");fr(Hg,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Gg,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function Zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Dv(i,e,void 0,t),t.currentTarget=null}function Xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,o,c),s=l}}}if(al)throw t=Du,al=!1,Du=null,t}function ut(t,e){var n=e[Gu];n===void 0&&(n=e[Gu]=new Set);var i=t+"__bubble";n.has(i)||($g(e,t,2,!1),n.add(i))}function Mc(t,e,n){var i=0;e&&(i|=4),$g(n,t,i,e)}var oo="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[oo]){t[oo]=!0,Jm.forEach(function(n){n!=="selectionchange"&&(Ux.has(n)||Mc(n,!1,t),Mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oo]||(e[oo]=!0,Mc("selectionchange",!1,e))}}function $g(t,e,n,i){switch(bg(e)){case 1:var r=jv;break;case 4:r=Kv;break;default:r=_d}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=wr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}mg(function(){var c=s,d=hd(n),h=[];e:{var f=Wg.get(t);if(f!==void 0){var p=xd,g=t;switch(t){case"keypress":if(Wo(n)===0)break e;case"keydown":case"keyup":p=fx;break;case"focusin":g="focus",p=gc;break;case"focusout":g="blur",p=gc;break;case"beforeblur":case"afterblur":p=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=px;break;case zg:case Vg:case Hg:p=nx;break;case Gg:p=gx;break;case"scroll":p=Zv;break;case"wheel":p=vx;break;case"copy":case"cut":case"paste":p=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vh}var M=(e&4)!==0,m=!M&&t==="scroll",u=M?f!==null?f+"Capture":null:f;M=[];for(var v=c,S;v!==null;){S=v;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,u!==null&&(y=Ta(v,u),y!=null&&M.push(La(v,y,S)))),m)break;v=v.return}0<M.length&&(f=new p(f,g,null,n,d),h.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Pu&&(g=n.relatedTarget||n.fromElement)&&(wr(g)||g[Pi]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?wr(g):null,g!==null&&(m=Hr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(M=Bh,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=Vh,y="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?f:hs(p),S=g==null?f:hs(g),f=new M(y,v+"leave",p,n,d),f.target=m,f.relatedTarget=S,y=null,wr(d)===c&&(M=new M(u,v+"enter",g,n,d),M.target=S,M.relatedTarget=m,y=M),m=y,p&&g)t:{for(M=p,u=g,v=0,S=M;S;S=$r(S))v++;for(S=0,y=u;y;y=$r(y))S++;for(;0<v-S;)M=$r(M),v--;for(;0<S-v;)u=$r(u),S--;for(;v--;){if(M===u||u!==null&&M===u.alternate)break t;M=$r(M),u=$r(u)}M=null}else M=null;p!==null&&Qh(h,f,p,M,!1),g!==null&&m!==null&&Qh(h,m,g,M,!0)}}e:{if(f=c?hs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=wx;else if(Wh(f))if(Ug)w=bx;else{w=Cx;var T=Ax}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Rx);if(w&&(w=w(t,c))){Ig(h,w,n,d);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&wu(f,"number",f.value)}switch(T=c?hs(c):window,t){case"focusin":(Wh(T)||T.contentEditable==="true")&&(fs=T,Ou=c,_a=null);break;case"focusout":_a=Ou=fs=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,jh(h,n,d);break;case"selectionchange":if(Nx)break;case"keydown":case"keyup":jh(h,n,d)}var C;if(Sd)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else us?Ng(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Lg&&n.locale!=="ko"&&(us||x!=="onCompositionStart"?x==="onCompositionEnd"&&us&&(C=Pg()):(Zi=d,vd="value"in Zi?Zi.value:Zi.textContent,us=!0)),T=fl(c,x),0<T.length&&(x=new zh(x,t,null,n,d),h.push({event:x,listeners:T}),C?x.data=C:(C=Dg(n),C!==null&&(x.data=C)))),(C=yx?Sx(t,n):Mx(t,n))&&(c=fl(c,"onBeforeInput"),0<c.length&&(d=new zh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=C))}Xg(h,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(La(t,s,r)),s=Ta(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ta(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=Ta(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Fx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function Jh(t){return(typeof t=="string"?t:""+t).replace(Fx,`
`).replace(Ox,"")}function lo(t,e,n){if(e=Jh(e),Jh(t)!==e&&n)throw Error(ie(425))}function dl(){}var Bu=null,zu=null;function Vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(zx)}:Hu;function zx(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ca(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),si="__reactFiber$"+Hs,Na="__reactProps$"+Hs,Pi="__reactContainer$"+Hs,Gu="__reactEvents$"+Hs,Vx="__reactListeners$"+Hs,Hx="__reactHandles$"+Hs;function wr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[si])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[si]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Wl(t){return t[Na]||null}var Wu=[],ps=-1;function dr(t){return{current:t}}function ft(t){0>ps||(t.current=Wu[ps],Wu[ps]=null,ps--)}function ct(t,e){ps++,Wu[ps]=t.current,t.current=e}var cr={},Jt=dr(cr),fn=dr(!1),Dr=cr;function Ps(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function hl(){ft(fn),ft(Jt)}function np(t,e,n){if(Jt.current!==cr)throw Error(ie(168));ct(Jt,e),ct(fn,n)}function Yg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Av(t)||"Unknown",r));return mt({},n,i)}function pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Dr=Jt.current,ct(Jt,t),ct(fn,fn.current),!0}function ip(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Yg(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,ft(fn),ft(Jt),ct(Jt,t)):ft(fn),ct(fn,n)}var Mi=null,Xl=!1,wc=!1;function qg(t){Mi===null?Mi=[t]:Mi.push(t)}function Gx(t){Xl=!0,qg(t)}function hr(){if(!wc&&Mi!==null){wc=!0;var t=0,e=tt;try{var n=Mi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,Xl=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),xg(pd,hr),r}finally{tt=e,wc=!1}}return null}var ms=[],gs=0,ml=null,gl=0,bn=[],Pn=0,Ir=null,Ei=1,Ti="";function xr(t,e){ms[gs++]=gl,ms[gs++]=ml,ml=t,gl=e}function jg(t,e,n){bn[Pn++]=Ei,bn[Pn++]=Ti,bn[Pn++]=Ir,Ir=t;var i=Ei;t=Ti;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ei=1<<32-qn(e)+r|n<<r|i,Ti=s+t}else Ei=1<<s|n<<r|i,Ti=t}function Ed(t){t.return!==null&&(xr(t,1),jg(t,1,0))}function Td(t){for(;t===ml;)ml=ms[--gs],ms[gs]=null,gl=ms[--gs],ms[gs]=null;for(;t===Ir;)Ir=bn[--Pn],bn[Pn]=null,Ti=bn[--Pn],bn[Pn]=null,Ei=bn[--Pn],bn[Pn]=null}var Sn=null,yn=null,dt=!1,Wn=null;function Kg(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function Xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $u(t){if(dt){var e=yn;if(e){var n=e;if(!rp(t,e)){if(Xu(t))throw Error(ie(418));e=ir(n.nextSibling);var i=Sn;e&&rp(t,e)?Kg(i,n):(t.flags=t.flags&-4097|2,dt=!1,Sn=t)}}else{if(Xu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,dt=!1,Sn=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function co(t){if(t!==Sn)return!1;if(!dt)return sp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vu(t.type,t.memoizedProps)),e&&(e=yn)){if(Xu(t))throw Zg(),Error(ie(418));for(;e;)Kg(t,e),e=ir(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?ir(t.stateNode.nextSibling):null;return!0}function Zg(){for(var t=yn;t;)t=ir(t.nextSibling)}function Ls(){yn=Sn=null,dt=!1}function wd(t){Wn===null?Wn=[t]:Wn.push(t)}var Wx=Ui.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function uo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ap(t){var e=t._init;return e(t._payload)}function Qg(t){function e(u,v){if(t){var S=u.deletions;S===null?(u.deletions=[v],u.flags|=16):S.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=or(u,v),u.index=0,u.sibling=null,u}function s(u,v,S){return u.index=S,t?(S=u.alternate,S!==null?(S=S.index,S<v?(u.flags|=2,v):S):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,S,y){return v===null||v.tag!==6?(v=Nc(S,u.mode,y),v.return=u,v):(v=r(v,S),v.return=u,v)}function l(u,v,S,y){var w=S.type;return w===cs?d(u,v,S.props.children,y,S.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===$i&&ap(w)===v.type)?(y=r(v,S.props),y.ref=Ks(u,v,S),y.return=u,y):(y=Zo(S.type,S.key,S.props,null,u.mode,y),y.ref=Ks(u,v,S),y.return=u,y)}function c(u,v,S,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Dc(S,u.mode,y),v.return=u,v):(v=r(v,S.children||[]),v.return=u,v)}function d(u,v,S,y,w){return v===null||v.tag!==7?(v=Nr(S,u.mode,y,w),v.return=u,v):(v=r(v,S),v.return=u,v)}function h(u,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nc(""+v,u.mode,S),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ja:return S=Zo(v.type,v.key,v.props,null,u.mode,S),S.ref=Ks(u,null,v),S.return=u,S;case ls:return v=Dc(v,u.mode,S),v.return=u,v;case $i:var y=v._init;return h(u,y(v._payload),S)}if(la(v)||Xs(v))return v=Nr(v,u.mode,S,null),v.return=u,v;uo(u,v)}return null}function f(u,v,S,y){var w=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return w!==null?null:o(u,v,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ja:return S.key===w?l(u,v,S,y):null;case ls:return S.key===w?c(u,v,S,y):null;case $i:return w=S._init,f(u,v,w(S._payload),y)}if(la(S)||Xs(S))return w!==null?null:d(u,v,S,y,null);uo(u,S)}return null}function p(u,v,S,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(S)||null,o(v,u,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:return u=u.get(y.key===null?S:y.key)||null,l(v,u,y,w);case ls:return u=u.get(y.key===null?S:y.key)||null,c(v,u,y,w);case $i:var T=y._init;return p(u,v,S,T(y._payload),w)}if(la(y)||Xs(y))return u=u.get(S)||null,d(v,u,y,w,null);uo(v,y)}return null}function g(u,v,S,y){for(var w=null,T=null,C=v,x=v=0,A=null;C!==null&&x<S.length;x++){C.index>x?(A=C,C=null):A=C.sibling;var b=f(u,C,S[x],y);if(b===null){C===null&&(C=A);break}t&&C&&b.alternate===null&&e(u,C),v=s(b,v,x),T===null?w=b:T.sibling=b,T=b,C=A}if(x===S.length)return n(u,C),dt&&xr(u,x),w;if(C===null){for(;x<S.length;x++)C=h(u,S[x],y),C!==null&&(v=s(C,v,x),T===null?w=C:T.sibling=C,T=C);return dt&&xr(u,x),w}for(C=i(u,C);x<S.length;x++)A=p(C,u,x,S[x],y),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?x:A.key),v=s(A,v,x),T===null?w=A:T.sibling=A,T=A);return t&&C.forEach(function(L){return e(u,L)}),dt&&xr(u,x),w}function M(u,v,S,y){var w=Xs(S);if(typeof w!="function")throw Error(ie(150));if(S=w.call(S),S==null)throw Error(ie(151));for(var T=w=null,C=v,x=v=0,A=null,b=S.next();C!==null&&!b.done;x++,b=S.next()){C.index>x?(A=C,C=null):A=C.sibling;var L=f(u,C,b.value,y);if(L===null){C===null&&(C=A);break}t&&C&&L.alternate===null&&e(u,C),v=s(L,v,x),T===null?w=L:T.sibling=L,T=L,C=A}if(b.done)return n(u,C),dt&&xr(u,x),w;if(C===null){for(;!b.done;x++,b=S.next())b=h(u,b.value,y),b!==null&&(v=s(b,v,x),T===null?w=b:T.sibling=b,T=b);return dt&&xr(u,x),w}for(C=i(u,C);!b.done;x++,b=S.next())b=p(C,u,x,b.value,y),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?x:b.key),v=s(b,v,x),T===null?w=b:T.sibling=b,T=b);return t&&C.forEach(function(D){return e(u,D)}),dt&&xr(u,x),w}function m(u,v,S,y){if(typeof S=="object"&&S!==null&&S.type===cs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ja:e:{for(var w=S.key,T=v;T!==null;){if(T.key===w){if(w=S.type,w===cs){if(T.tag===7){n(u,T.sibling),v=r(T,S.props.children),v.return=u,u=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===$i&&ap(w)===T.type){n(u,T.sibling),v=r(T,S.props),v.ref=Ks(u,T,S),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}S.type===cs?(v=Nr(S.props.children,u.mode,y,S.key),v.return=u,u=v):(y=Zo(S.type,S.key,S.props,null,u.mode,y),y.ref=Ks(u,v,S),y.return=u,u=y)}return a(u);case ls:e:{for(T=S.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(u,v.sibling),v=r(v,S.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Dc(S,u.mode,y),v.return=u,u=v}return a(u);case $i:return T=S._init,m(u,v,T(S._payload),y)}if(la(S))return g(u,v,S,y);if(Xs(S))return M(u,v,S,y);uo(u,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,S),v.return=u,u=v):(n(u,v),v=Nc(S,u.mode,y),v.return=u,u=v),a(u)):n(u,v)}return m}var Ns=Qg(!0),Jg=Qg(!1),_l=dr(null),vl=null,_s=null,Ad=null;function Cd(){Ad=_s=vl=null}function Rd(t){var e=_l.current;ft(_l),t._currentValue=e}function Yu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){vl=t,Ad=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},_s===null){if(vl===null)throw Error(ie(308));_s=t,vl.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return e}var Ar=null;function bd(t){Ar===null?Ar=[t]:Ar.push(t)}function e0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,bd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function Xo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,M=o;switch(f=e,p=n,M.tag){case 1:if(g=M.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=mt({},h,f);break e;case 2:Yi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=a,t.lanes=a,t.memoizedState=h}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Xa={},ci=dr(Xa),Da=dr(Xa),Ia=dr(Xa);function Cr(t){if(t===Xa)throw Error(ie(174));return t}function Ld(t,e){switch(ct(Ia,e),ct(Da,t),ct(ci,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}ft(ci),ct(ci,e)}function Ds(){ft(ci),ft(Da),ft(Ia)}function n0(t){Cr(Ia.current);var e=Cr(ci.current),n=Cu(e,t.type);e!==n&&(ct(Da,t),ct(ci,n))}function Nd(t){Da.current===t&&(ft(ci),ft(Da))}var ht=dr(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Dd(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var $o=Ui.ReactCurrentDispatcher,Cc=Ui.ReactCurrentBatchConfig,Ur=0,pt=null,Lt=null,Ot=null,Sl=!1,va=!1,Ua=0,Xx=0;function $t(){throw Error(ie(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Ud(t,e,n,i,r,s){if(Ur=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$o.current=t===null||t.memoizedState===null?jx:Kx,t=n(i,r),va){s=0;do{if(va=!1,Ua=0,25<=s)throw Error(ie(301));s+=1,Ot=Lt=null,e.updateQueue=null,$o.current=Zx,t=n(i,r)}while(va)}if($o.current=Ml,e=Lt!==null&&Lt.next!==null,Ur=0,Ot=Lt=pt=null,Sl=!1,e)throw Error(ie(300));return t}function Fd(){var t=Ua!==0;return Ua=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?pt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Fn(){if(Lt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ot===null?pt.memoizedState:Ot.next;if(e!==null)Ot=e,Lt=t;else{if(t===null)throw Error(ie(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ot===null?pt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Fa(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Ur&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,pt.lanes|=d,Fr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function i0(){}function r0(t,e){var n=pt,i=Fn(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Od(o0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Oa(9,a0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ie(349));Ur&30||s0(n,e,r)}return r}function s0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a0(t,e,n,i){e.value=n,e.getSnapshot=i,l0(e)&&c0(t)}function o0(t,e,n){return n(function(){l0(e)&&c0(t)})}function l0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function c0(t){var e=Li(t,1);e!==null&&jn(e,t,1,-1)}function cp(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=qx.bind(null,pt,t),[e.memoizedState,t]}function Oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function u0(){return Fn().memoizedState}function Yo(t,e,n,i){var r=ii();pt.flags|=t,r.memoizedState=Oa(1|e,n,void 0,i===void 0?null:i)}function $l(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var a=Lt.memoizedState;if(s=a.destroy,i!==null&&Id(i,a.deps)){r.memoizedState=Oa(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Oa(1|e,n,s,i)}function up(t,e){return Yo(8390656,8,t,e)}function Od(t,e){return $l(2048,8,t,e)}function f0(t,e){return $l(4,2,t,e)}function d0(t,e){return $l(4,4,t,e)}function h0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p0(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,h0.bind(null,e,t),n)}function kd(){}function m0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function g0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _0(t,e,n){return Ur&21?(Kn(n,e)||(n=Mg(),pt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function $x(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Cc.transition;Cc.transition={};try{t(!1),e()}finally{tt=n,Cc.transition=i}}function v0(){return Fn().memoizedState}function Yx(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},x0(t))y0(e,n);else if(n=e0(t,e,n,i),n!==null){var r=nn();jn(n,t,i,r),S0(n,e,i)}}function qx(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(x0(t))y0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Kn(o,a)){var l=e.interleaved;l===null?(r.next=r,bd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=e0(t,e,r,i),n!==null&&(r=nn(),jn(n,t,i,r),S0(n,e,i))}}function x0(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function y0(t,e){va=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}var Ml={readContext:Un,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},jx={readContext:Un,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4194308,4,h0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yo(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Yx.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:kd,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=$x.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=ii();if(dt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),kt===null)throw Error(ie(349));Ur&30||s0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,up(o0.bind(null,i,s,t),[t]),i.flags|=2048,Oa(9,a0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=kt.identifierPrefix;if(dt){var n=Ti,i=Ei;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Kx={readContext:Un,useCallback:m0,useContext:Un,useEffect:Od,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:Rc,useRef:u0,useState:function(){return Rc(Fa)},useDebugValue:kd,useDeferredValue:function(t){var e=Fn();return _0(e,Lt.memoizedState,t)},useTransition:function(){var t=Rc(Fa)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:v0,unstable_isNewReconciler:!1},Zx={readContext:Un,useCallback:m0,useContext:Un,useEffect:Od,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:bc,useRef:u0,useState:function(){return bc(Fa)},useDebugValue:kd,useDeferredValue:function(t){var e=Fn();return Lt===null?e.memoizedState=t:_0(e,Lt.memoizedState,t)},useTransition:function(){var t=bc(Fa)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:v0,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ar(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(jn(e,t,r,i),Xo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ar(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(jn(e,t,r,i),Xo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=ar(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(jn(e,t,i,n),Xo(e,t,i))}};function fp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ba(n,i)||!ba(r,s):!0}function M0(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=dn(e)?Dr:Jt.current,i=e.contextTypes,s=(i=i!=null)?Ps(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function ju(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=dn(e)?Dr:Jt.current,r.context=Ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",i=e;do n+=wv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Qx=typeof WeakMap=="function"?WeakMap:Map;function E0(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Tl||(Tl=!0,of=i),Ku(t,e)},n}function T0(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ku(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function hp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Qx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dy.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var Jx=Ui.ReactCurrentOwner,un=!1;function tn(t,e,n,i){e.child=t===null?Jg(e,null,n,i):Ns(e,t.child,n,i)}function gp(t,e,n,i,r){n=n.render;var s=e.ref;return Ts(e,r),i=Ud(t,e,n,i,s,r),n=Fd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(dt&&n&&Ed(e),e.flags|=1,tn(t,e,i,r),e.child)}function _p(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!$d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,w0(t,e,s,i,r)):(t=Zo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function w0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ba(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Zu(t,e,n,i,r)}function A0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(xs,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(xs,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(xs,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(xs,xn),xn|=i;return tn(t,e,r,n),e.child}function C0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zu(t,e,n,i,r){var s=dn(n)?Dr:Jt.current;return s=Ps(e,s),Ts(e,r),n=Ud(t,e,n,i,s,r),i=Fd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(dt&&i&&Ed(e),e.flags|=1,tn(t,e,n,r),e.child)}function vp(t,e,n,i,r){if(dn(n)){var s=!0;pl(e)}else s=!1;if(Ts(e,r),e.stateNode===null)qo(t,e),M0(e,n,i),ju(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=dn(n)?Dr:Jt.current,c=Ps(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&dp(e,a,i,c),Yi=!1;var f=e.memoizedState;a.state=f,xl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||fn.current||Yi?(typeof d=="function"&&(qu(e,n,d,i),l=e.memoizedState),(o=Yi||fp(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,t0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Hn(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=dn(n)?Dr:Jt.current,l=Ps(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&dp(e,a,i,l),Yi=!1,f=e.memoizedState,a.state=f,xl(e,i,a,r);var g=e.memoizedState;o!==h||f!==g||fn.current||Yi?(typeof p=="function"&&(qu(e,n,p,i),g=e.memoizedState),(c=Yi||fp(e,n,c,i,f,g,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Qu(t,e,n,i,s,r)}function Qu(t,e,n,i,r,s){C0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ip(e,n,!1),Ni(t,e,s);i=e.stateNode,Jx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ns(e,t.child,null,s),e.child=Ns(e,null,o,s)):tn(t,e,o,s),e.memoizedState=i.state,r&&ip(e,n,!0),e.child}function R0(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),Ld(t,e.containerInfo)}function xp(t,e,n,i,r){return Ls(),wd(r),e.flags|=256,tn(t,e,n,i),e.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function b0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(ht,r&1),t===null)return $u(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Kl(a,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ef(n),e.memoizedState=Ju,t):Bd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ey(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=or(o,s):(s=Nr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ef(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ju,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bd(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fo(t,e,n,i){return i!==null&&wd(i),Ns(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ey(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Pc(Error(ie(422))),fo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kl({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ns(e,t.child,null,a),e.child.memoizedState=ef(a),e.memoizedState=Ju,s);if(!(e.mode&1))return fo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Pc(s,i,void 0),fo(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),jn(i,t,r,-1))}return Xd(),i=Pc(Error(ie(421))),fo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=hy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=ir(r.nextSibling),Sn=e,dt=!0,Wn=null,t!==null&&(bn[Pn++]=Ei,bn[Pn++]=Ti,bn[Pn++]=Ir,Ei=t.id,Ti=t.overflow,Ir=e),e=Bd(e,i.children),e.flags|=4096,e)}function yp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yu(t.return,e,n)}function Lc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function P0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,n,e);else if(t.tag===19)yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lc(e,!0,n,null,s);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ty(t,e,n){switch(e.tag){case 3:R0(e),Ls();break;case 5:n0(e);break;case 1:dn(e.type)&&pl(e);break;case 4:Ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(_l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?b0(t,e,n):(ct(ht,ht.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);ct(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return P0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,A0(t,e,n)}return Ni(t,e,n)}var L0,tf,N0,D0;L0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};N0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(ci.current);var s=null;switch(n){case"input":r=Eu(t,r),i=Eu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Au(t,r),i=Au(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}Ru(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};D0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ny(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return dn(e.type)&&hl(),Yt(e),null;case 3:return i=e.stateNode,Ds(),ft(fn),ft(Jt),Dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(uf(Wn),Wn=null))),tf(t,e),Yt(e),null;case 5:Nd(e);var r=Cr(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)N0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Yt(e),null}if(t=Cr(ci.current),co(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Na]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ua.length;r++)ut(ua[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":bh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Lh(i,s),ut("invalid",i)}Ru(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&lo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&lo(i.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":eo(i),Ph(i,s,!0);break;case"textarea":eo(i),Nh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[Na]=i,L0(t,e,!1,!1),e.stateNode=t;e:{switch(a=bu(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ua.length;r++)ut(ua[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":bh(t,i),r=Eu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Lh(t,i),r=Au(t,i),ut("invalid",t);break;default:r=i}Ru(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&cd(t,s,l,a))}switch(n){case"input":eo(t),Ph(t,i,!1);break;case"textarea":eo(t),Nh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)D0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Cr(Ia.current),Cr(ci.current),co(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:lo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return Yt(e),null;case 13:if(ft(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&yn!==null&&e.mode&1&&!(e.flags&128))Zg(),Ls(),e.flags|=98560,s=!1;else if(s=co(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[si]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Wn!==null&&(uf(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Nt===0&&(Nt=3):Xd())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Ds(),tf(t,e),t===null&&Pa(e.stateNode.containerInfo),Yt(e),null;case 10:return Rd(e.type._context),Yt(e),null;case 17:return dn(e.type)&&hl(),Yt(e),null;case 19:if(ft(ht),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Zs(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=yl(t),a!==null){for(e.flags|=128,Zs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Us&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=yl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Yt(e),null}else 2*wt()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=ht.current,ct(ht,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Wd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function iy(t,e){switch(Td(e),e.tag){case 1:return dn(e.type)&&hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ds(),ft(fn),ft(Jt),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nd(e),null;case 13:if(ft(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(ht),null;case 4:return Ds(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var ho=!1,Kt=!1,ry=typeof WeakSet=="function"?WeakSet:Set,ye=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function nf(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Sp=!1;function sy(t,e){if(Bu=cl,t=kg(),Md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:t,selectionRange:n},cl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var M=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:Hn(e.type,M),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){xt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return g=Sp,Sp=!1,g}function xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nf(e,n,s)}r=r.next}while(r!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function I0(t){var e=t.alternate;e!==null&&(t.alternate=null,I0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Na],delete e[Gu],delete e[Vx],delete e[Hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U0(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var zt=null,Gn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)F0(t,e,n),n=n.sibling}function F0(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:Kt||vs(n,e);case 6:var i=zt,r=Gn;zt=null,Bi(t,e,n),zt=i,Gn=r,zt!==null&&(Gn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Gn?(t=zt,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),Ca(t)):Tc(zt,n.stateNode));break;case 4:i=zt,r=Gn,zt=n.stateNode.containerInfo,Gn=!0,Bi(t,e,n),zt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&nf(n,e,a),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Kt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Bi(t,e,n),Kt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ry),e.forEach(function(i){var r=py.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:zt=o.stateNode,Gn=!1;break e;case 3:zt=o.stateNode.containerInfo,Gn=!0;break e;case 4:zt=o.stateNode.containerInfo,Gn=!0;break e}o=o.return}if(zt===null)throw Error(ie(160));F0(s,a,r),zt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O0(e,t),e=e.sibling}function O0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),ei(t),i&4){try{xa(3,t,t.return),ql(3,t)}catch(M){xt(t,t.return,M)}try{xa(5,t,t.return)}catch(M){xt(t,t.return,M)}}break;case 1:kn(e,t),ei(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(kn(e,t),ei(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Ea(r,"")}catch(M){xt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&sg(r,s),bu(o,a);var c=bu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?ug(r,h):d==="dangerouslySetInnerHTML"?lg(r,h):d==="children"?Ea(r,h):cd(r,d,h,c)}switch(o){case"input":Tu(r,s);break;case"textarea":ag(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ys(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ys(r,!!s.multiple,s.defaultValue,!0):ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(M){xt(t,t.return,M)}}break;case 6:if(kn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){xt(t,t.return,M)}}break;case 3:if(kn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(M){xt(t,t.return,M)}break;case 4:kn(e,t),ei(t);break;case 13:kn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hd=wt())),i&4&&Ep(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||d,kn(e,t),Kt=c):kn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ye=t,d=t.child;d!==null;){for(h=ye=d;ye!==null;){switch(f=ye,p=f.child,f.tag){case 0:case 11:case 14:case 15:xa(4,f,f.return);break;case 1:vs(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(M){xt(i,n,M)}}break;case 5:vs(f,f.return);break;case 22:if(f.memoizedState!==null){wp(h);continue}}p!==null?(p.return=f,ye=p):wp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=cg("display",a))}catch(M){xt(t,t.return,M)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){xt(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),ei(t),i&4&&Ep(t);break;case 21:break;default:kn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=Mp(t);af(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Mp(t);sf(t,o,a);break;default:throw Error(ie(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ay(t,e,n){ye=t,k0(t)}function k0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ho;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Kt;o=ho;var c=Kt;if(ho=a,(Kt=l)&&!c)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?Ap(r):l!==null?(l.return=a,ye=l):Ap(r);for(;s!==null;)ye=s,k0(s),s=s.sibling;ye=r,ho=o,Kt=c}Tp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):Tp(t)}}function Tp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ca(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Kt||e.flags&512&&rf(e)}catch(f){xt(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function wp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Ap(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{rf(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{rf(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var oy=Math.ceil,El=Ui.ReactCurrentDispatcher,zd=Ui.ReactCurrentOwner,In=Ui.ReactCurrentBatchConfig,qe=0,kt=null,bt=null,Gt=0,xn=0,xs=dr(0),Nt=0,ka=null,Fr=0,jl=0,Vd=0,ya=null,cn=null,Hd=0,Us=1/0,yi=null,Tl=!1,of=null,sr=null,po=!1,Qi=null,wl=0,Sa=0,lf=null,jo=-1,Ko=0;function nn(){return qe&6?wt():jo!==-1?jo:jo=wt()}function ar(t){return t.mode&1?qe&2&&Gt!==0?Gt&-Gt:Wx.transition!==null?(Ko===0&&(Ko=Mg()),Ko):(t=tt,t!==0||(t=window.event,t=t===void 0?16:bg(t.type)),t):1}function jn(t,e,n,i){if(50<Sa)throw Sa=0,lf=null,Error(ie(185));Ha(t,n,i),(!(qe&2)||t!==kt)&&(t===kt&&(!(qe&2)&&(jl|=n),Nt===4&&ji(t,Gt)),hn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Us=wt()+500,Xl&&hr()))}function hn(t,e){var n=t.callbackNode;Wv(t,e);var i=ll(t,t===kt?Gt:0);if(i===0)n!==null&&Uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Uh(n),e===1)t.tag===0?Gx(Cp.bind(null,t)):qg(Cp.bind(null,t)),Bx(function(){!(qe&6)&&hr()}),n=null;else{switch(Eg(i)){case 1:n=pd;break;case 4:n=yg;break;case 16:n=ol;break;case 536870912:n=Sg;break;default:n=ol}n=$0(n,B0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B0(t,e){if(jo=-1,Ko=0,qe&6)throw Error(ie(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var i=ll(t,t===kt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Al(t,i);else{e=i;var r=qe;qe|=2;var s=V0();(kt!==t||Gt!==e)&&(yi=null,Us=wt()+500,Lr(t,e));do try{uy();break}catch(o){z0(t,o)}while(!0);Cd(),El.current=s,qe=r,bt!==null?e=0:(kt=null,Gt=0,e=Nt)}if(e!==0){if(e===2&&(r=Iu(t),r!==0&&(i=r,e=cf(t,r))),e===1)throw n=ka,Lr(t,0),ji(t,i),hn(t,wt()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!ly(r)&&(e=Al(t,i),e===2&&(s=Iu(t),s!==0&&(i=s,e=cf(t,s))),e===1))throw n=ka,Lr(t,0),ji(t,i),hn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:yr(t,cn,yi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=Hd+500-wt(),10<e)){if(ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Hu(yr.bind(null,t,cn,yi),e);break}yr(t,cn,yi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*oy(i/1960))-i,10<i){t.timeoutHandle=Hu(yr.bind(null,t,cn,yi),i);break}yr(t,cn,yi);break;case 5:yr(t,cn,yi);break;default:throw Error(ie(329))}}}return hn(t,wt()),t.callbackNode===n?B0.bind(null,t):null}function cf(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=cn,cn=n,e!==null&&uf(e)),t}function uf(t){cn===null?cn=t:cn.push.apply(cn,t)}function ly(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~Vd,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function Cp(t){if(qe&6)throw Error(ie(327));ws();var e=ll(t,0);if(!(e&1))return hn(t,wt()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var i=Iu(t);i!==0&&(e=i,n=cf(t,i))}if(n===1)throw n=ka,Lr(t,0),ji(t,e),hn(t,wt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,cn,yi),hn(t,wt()),null}function Gd(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Us=wt()+500,Xl&&hr())}}function Or(t){Qi!==null&&Qi.tag===0&&!(qe&6)&&ws();var e=qe;qe|=1;var n=In.transition,i=tt;try{if(In.transition=null,tt=1,t)return t()}finally{tt=i,In.transition=n,qe=e,!(qe&6)&&hr()}}function Wd(){xn=xs.current,ft(xs)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kx(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hl();break;case 3:Ds(),ft(fn),ft(Jt),Dd();break;case 5:Nd(i);break;case 4:Ds();break;case 13:ft(ht);break;case 19:ft(ht);break;case 10:Rd(i.type._context);break;case 22:case 23:Wd()}n=n.return}if(kt=t,bt=t=or(t.current,null),Gt=xn=e,Nt=0,ka=null,Vd=jl=Fr=0,cn=ya=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ar=null}return t}function z0(t,e){do{var n=bt;try{if(Cd(),$o.current=Ml,Sl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Sl=!1}if(Ur=0,Ot=Lt=pt=null,va=!1,Ua=0,zd.current=null,n===null||n.return===null){Nt=1,ka=e,bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Gt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=pp(a);if(p!==null){p.flags&=-257,mp(p,a,o,s,e),p.mode&1&&hp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var M=new Set;M.add(l),e.updateQueue=M}else g.add(l);break e}else{if(!(e&1)){hp(s,c,e),Xd();break e}l=Error(ie(426))}}else if(dt&&o.mode&1){var m=pp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mp(m,a,o,s,e),wd(Is(l,o));break e}}s=l=Is(l,o),Nt!==4&&(Nt=2),ya===null?ya=[s]:ya.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=E0(s,l,e);op(s,u);break e;case 1:o=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(sr===null||!sr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=T0(s,o,e);op(s,y);break e}}s=s.return}while(s!==null)}G0(n)}catch(w){e=w,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function V0(){var t=El.current;return El.current=Ml,t===null?Ml:t}function Xd(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),kt===null||!(Fr&268435455)&&!(jl&268435455)||ji(kt,Gt)}function Al(t,e){var n=qe;qe|=2;var i=V0();(kt!==t||Gt!==e)&&(yi=null,Lr(t,e));do try{cy();break}catch(r){z0(t,r)}while(!0);if(Cd(),qe=n,El.current=i,bt!==null)throw Error(ie(261));return kt=null,Gt=0,Nt}function cy(){for(;bt!==null;)H0(bt)}function uy(){for(;bt!==null&&!Uv();)H0(bt)}function H0(t){var e=X0(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?G0(t):bt=e,zd.current=null}function G0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iy(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,bt=null;return}}else if(n=ny(n,e,xn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Nt===0&&(Nt=5)}function yr(t,e,n){var i=tt,r=In.transition;try{In.transition=null,tt=1,fy(t,e,n,i)}finally{In.transition=r,tt=i}return null}function fy(t,e,n,i){do ws();while(Qi!==null);if(qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xv(t,s),t===kt&&(bt=kt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,$0(ol,function(){return ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var a=tt;tt=1;var o=qe;qe|=4,zd.current=null,sy(t,n),O0(n,t),Lx(zu),cl=!!Bu,zu=Bu=null,t.current=n,ay(n),Fv(),qe=o,tt=a,In.transition=s}else t.current=n;if(po&&(po=!1,Qi=t,wl=r),s=t.pendingLanes,s===0&&(sr=null),Bv(n.stateNode),hn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Tl)throw Tl=!1,t=of,of=null,t;return wl&1&&t.tag!==0&&ws(),s=t.pendingLanes,s&1?t===lf?Sa++:(Sa=0,lf=t):Sa=0,hr(),null}function ws(){if(Qi!==null){var t=Eg(wl),e=In.transition,n=tt;try{if(In.transition=null,tt=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,wl=0,qe&6)throw Error(ie(331));var r=qe;for(qe|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ye=c;ye!==null;){var d=ye;switch(d.tag){case 0:case 11:case 15:xa(8,d,s)}var h=d.child;if(h!==null)h.return=d,ye=h;else for(;ye!==null;){d=ye;var f=d.sibling,p=d.return;if(I0(d),d===c){ye=null;break}if(f!==null){f.return=p,ye=f;break}ye=p}}}var g=s.alternate;if(g!==null){var M=g.child;if(M!==null){g.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ye=u;break e}ye=s.return}}var v=t.current;for(ye=v;ye!==null;){a=ye;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,ye=S;else e:for(a=v;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ql(9,o)}}catch(w){xt(o,o.return,w)}if(o===a){ye=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ye=y;break e}ye=o.return}}if(qe=r,hr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(zl,t)}catch{}i=!0}return i}finally{tt=n,In.transition=e}}return!1}function Rp(t,e,n){e=Is(n,e),e=E0(t,e,1),t=rr(t,e,1),e=nn(),t!==null&&(Ha(t,1,e),hn(t,e))}function xt(t,e,n){if(t.tag===3)Rp(t,t,n);else for(;e!==null;){if(e.tag===3){Rp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=Is(n,t),t=T0(e,t,1),e=rr(e,t,1),t=nn(),e!==null&&(Ha(e,1,t),hn(e,t));break}}e=e.return}}function dy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Gt&n)===n&&(Nt===4||Nt===3&&(Gt&130023424)===Gt&&500>wt()-Hd?Lr(t,0):Vd|=n),hn(t,e)}function W0(t,e){e===0&&(t.mode&1?(e=io,io<<=1,!(io&130023424)&&(io=4194304)):e=1);var n=nn();t=Li(t,e),t!==null&&(Ha(t,e,n),hn(t,n))}function hy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W0(t,n)}function py(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),W0(t,n)}var X0;X0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,ty(t,e,n);un=!!(t.flags&131072)}else un=!1,dt&&e.flags&1048576&&jg(e,gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;qo(t,e),t=e.pendingProps;var r=Ps(e,Jt.current);Ts(e,n),r=Ud(null,e,i,t,r,n);var s=Fd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pd(e),r.updater=Yl,e.stateNode=r,r._reactInternals=e,ju(e,i,t,n),e=Qu(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Ed(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(qo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gy(i),t=Hn(i,t),r){case 0:e=Zu(null,e,i,t,n);break e;case 1:e=vp(null,e,i,t,n);break e;case 11:e=gp(null,e,i,t,n);break e;case 14:e=_p(null,e,i,Hn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Zu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),vp(t,e,i,r,n);case 3:e:{if(R0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,t0(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(ie(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=Is(Error(ie(424)),e),e=xp(t,e,i,n,r);break e}else for(yn=ir(e.stateNode.containerInfo.firstChild),Sn=e,dt=!0,Wn=null,n=Jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=Ni(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return n0(e),t===null&&$u(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Vu(i,r)?a=null:s!==null&&Vu(i,s)&&(e.flags|=32),C0(t,e),tn(t,e,a,n),e.child;case 6:return t===null&&$u(e),null;case 13:return b0(t,e,n);case 4:return Ld(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ns(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),gp(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(_l,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!fn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ts(e,n),r=Un(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),_p(t,e,i,r,n);case 15:return w0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),qo(t,e),e.tag=1,dn(i)?(t=!0,pl(e)):t=!1,Ts(e,n),M0(e,i,r),ju(e,i,r,n),Qu(null,e,i,!0,t,n);case 19:return P0(t,e,n);case 22:return A0(t,e,n)}throw Error(ie(156,e.tag))};function $0(t,e){return xg(t,e)}function my(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new my(t,e,n,i)}function $d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gy(t){if(typeof t=="function")return $d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===dd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")$d(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case cs:return Nr(n.children,r,s,e);case ud:a=8,r|=8;break;case xu:return t=Dn(12,n,e,r|2),t.elementType=xu,t.lanes=s,t;case yu:return t=Dn(13,n,e,r),t.elementType=yu,t.lanes=s,t;case Su:return t=Dn(19,n,e,r),t.elementType=Su,t.lanes=s,t;case ng:return Kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eg:a=10;break e;case tg:a=9;break e;case fd:a=11;break e;case dd:a=14;break e;case $i:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Dn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function Kl(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=ng,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _y(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,i,r,s,a,o,l){return t=new _y(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function vy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Y0(t){if(!t)return cr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(dn(n))return Yg(t,n,e)}return e}function q0(t,e,n,i,r,s,a,o,l){return t=Yd(n,i,!0,t,r,s,a,o,l),t.context=Y0(null),n=t.current,i=nn(),r=ar(n),s=Ai(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,Ha(t,r,i),hn(t,i),t}function Zl(t,e,n,i){var r=e.current,s=nn(),a=ar(r);return n=Y0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,a),t!==null&&(jn(t,r,a,s),Xo(t,r,a)),a}function Cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){bp(t,e),(t=t.alternate)&&bp(t,e)}function xy(){return null}var j0=typeof reportError=="function"?reportError:function(t){console.error(t)};function jd(t){this._internalRoot=t}Ql.prototype.render=jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Zl(t,e,null,null)};Ql.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Zl(null,t,null,null)}),e[Pi]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&Rg(t)}};function Kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function yy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Cl(a);s.call(c)}}var a=q0(e,i,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=a,t[Pi]=a.current,Pa(t.nodeType===8?t.parentNode:t),Or(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Cl(l);o.call(c)}}var l=Yd(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[Pi]=l.current,Pa(t.nodeType===8?t.parentNode:t),Or(function(){Zl(e,l,n,i)}),l}function ec(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Cl(a);o.call(l)}}Zl(e,a,t,r)}else a=yy(n,e,t,r,i);return Cl(a)}Tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(md(e,n|1),hn(e,wt()),!(qe&6)&&(Us=wt()+500,hr()))}break;case 13:Or(function(){var i=Li(t,1);if(i!==null){var r=nn();jn(i,t,1,r)}}),qd(t,1)}};gd=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=nn();jn(e,t,134217728,n)}qd(t,134217728)}};wg=function(t){if(t.tag===13){var e=ar(t),n=Li(t,e);if(n!==null){var i=nn();jn(n,t,e,i)}qd(t,e)}};Ag=function(){return tt};Cg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Lu=function(t,e,n){switch(e){case"input":if(Tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wl(i);if(!r)throw Error(ie(90));rg(i),Tu(i,r)}}}break;case"textarea":ag(t,n);break;case"select":e=n.value,e!=null&&ys(t,!!n.multiple,e,!1)}};hg=Gd;pg=Or;var Sy={usingClientEntryPoint:!1,Events:[Wa,hs,Wl,fg,dg,Gd]},Qs={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},My={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_g(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{zl=mo.inject(My),li=mo}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(e))throw Error(ie(200));return vy(t,e,null,n)};En.createRoot=function(t,e){if(!Kd(t))throw Error(ie(299));var n=!1,i="",r=j0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,Pa(t.nodeType===8?t.parentNode:t),new jd(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=_g(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Or(t)};En.hydrate=function(t,e,n){if(!Jl(e))throw Error(ie(200));return ec(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Kd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=j0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=q0(e,null,t,1,n??null,r,!1,s,a),t[Pi]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ql(e)};En.render=function(t,e,n){if(!Jl(e))throw Error(ie(200));return ec(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(ie(40));return t._reactRootContainer?(Or(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};En.unstable_batchedUpdates=Gd;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Jl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return ec(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function K0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K0)}catch(t){console.error(t)}}K0(),Km.exports=En;var Ey=Km.exports,Lp=Ey;_u.createRoot=Lp.createRoot,_u.hydrateRoot=Lp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="185",Ty=0,Np=1,wy=2,Qo=1,Ay=2,fa=3,ur=0,pn=1,Xn=2,Ci=0,As=1,Dp=2,Ip=3,Up=4,Cy=5,Mr=100,Ry=101,by=102,Py=103,Ly=104,Ny=200,Dy=201,Iy=202,Uy=203,ff=204,df=205,Fy=206,Oy=207,ky=208,By=209,zy=210,Vy=211,Hy=212,Gy=213,Wy=214,hf=0,pf=1,mf=2,Fs=3,gf=4,_f=5,vf=6,xf=7,Z0=0,Xy=1,$y=2,ui=0,Q0=1,J0=2,e_=3,t_=4,n_=5,i_=6,r_=7,s_=300,kr=301,Os=302,Ic=303,Uc=304,tc=306,yf=1e3,wi=1001,Sf=1002,Ht=1003,Yy=1004,go=1005,Zt=1006,Fc=1007,Rr=1008,Nn=1009,a_=1010,o_=1011,Ba=1012,Qd=1013,hi=1014,ai=1015,Di=1016,Jd=1017,eh=1018,za=1020,l_=35902,c_=35899,u_=1021,f_=1022,Yn=1023,Ii=1026,br=1027,d_=1028,th=1029,Br=1030,nh=1031,ih=1033,Jo=33776,el=33777,tl=33778,nl=33779,Mf=35840,Ef=35841,Tf=35842,wf=35843,Af=36196,Cf=37492,Rf=37496,bf=37488,Pf=37489,Rl=37490,Lf=37491,Nf=37808,Df=37809,If=37810,Uf=37811,Ff=37812,Of=37813,kf=37814,Bf=37815,zf=37816,Vf=37817,Hf=37818,Gf=37819,Wf=37820,Xf=37821,$f=36492,Yf=36494,qf=36495,jf=36283,Kf=36284,bl=36285,Zf=36286,qy=3200,Fp=0,jy=1,Ki="",Rn="srgb",Pl="srgb-linear",Ll="linear",et="srgb",Yr=7680,Op=519,Ky=512,Zy=513,Qy=514,rh=515,Jy=516,eS=517,sh=518,tS=519,kp=35044,Bp="300 es",oi=2e3,Nl=2001;function nS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iS(){const t=Dl("canvas");return t.style.display="block",t}const zp={};function Vp(...t){const e="THREE."+t.shift();console.log(e,...t)}function h_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Pe(...t){t=h_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ye(...t){t=h_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Cs(...t){const e=t.join(" ");e in zp||(zp[e]=!0,Pe(...t))}function rS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const sS={[hf]:pf,[mf]:vf,[gf]:xf,[Fs]:_f,[pf]:hf,[vf]:mf,[xf]:gf,[_f]:Fs};class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oc=Math.PI/180,Qf=180/Math.PI;function $a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Be(t,e,n){return Math.max(e,Math.min(n,t))}function aS(t,e){return(t%e+e)%e}function kc(t,e,n){return(1-n)*t+n*e}function Js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ch=class ch{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Be(this.x,e.x,n.x),this.y=Be(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Be(this.x,e,n),this.y=Be(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ch.prototype.isVector2=!0;let je=ch;class Gs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],g=s[a+2],M=s[a+3];if(h!==M||l!==f||c!==p||d!==g){let m=l*f+c*p+d*g+h*M;m<0&&(f=-f,p=-p,g=-g,M=-M,m=-m);let u=1-o;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);u=Math.sin(u*v)/S,o=Math.sin(o*v)/S,l=l*u+f*o,c=c*u+p*o,d=d*u+g*o,h=h*u+M*o}else{l=l*u+f*o,c=c*u+p*o,d=d*u+g*o,h=h*u+M*o;const v=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=v,c*=v,d*=v,h*=v}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+d*h+l*p-c*f,e[n+1]=l*g+d*f+c*h-o*p,e[n+2]=c*g+d*p+o*f-l*h,e[n+3]=d*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*p*g,this._y=c*p*h-f*d*g,this._z=c*d*g+f*p*h,this._w=c*d*h-f*p*g;break;case"YXZ":this._x=f*d*h+c*p*g,this._y=c*p*h-f*d*g,this._z=c*d*g-f*p*h,this._w=c*d*h+f*p*g;break;case"ZXY":this._x=f*d*h-c*p*g,this._y=c*p*h+f*d*g,this._z=c*d*g+f*p*h,this._w=c*d*h-f*p*g;break;case"ZYX":this._x=f*d*h-c*p*g,this._y=c*p*h+f*d*g,this._z=c*d*g-f*p*h,this._w=c*d*h+f*p*g;break;case"YZX":this._x=f*d*h+c*p*g,this._y=c*p*h+f*d*g,this._z=c*d*g-f*p*h,this._w=c*d*h-f*p*g;break;case"XZY":this._x=f*d*h-c*p*g,this._y=c*p*h-f*d*g,this._z=c*d*g+f*p*h,this._w=c*d*h+f*p*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const uh=class uh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Be(this.x,e.x,n.x),this.y=Be(this.y,e.y,n.y),this.z=Be(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Be(this.x,e,n),this.y=Be(this.y,e,n),this.z=Be(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;let k=uh;const Bc=new k,Hp=new Gs,fh=class fh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],g=i[8],M=r[0],m=r[3],u=r[6],v=r[1],S=r[4],y=r[7],w=r[2],T=r[5],C=r[8];return s[0]=a*M+o*v+l*w,s[3]=a*m+o*S+l*T,s[6]=a*u+o*y+l*C,s[1]=c*M+d*v+h*w,s[4]=c*m+d*S+h*T,s[7]=c*u+d*y+h*C,s[2]=f*M+p*v+g*w,s[5]=f*m+p*S+g*T,s[8]=f*u+p*y+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,p=c*s-a*l,g=n*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(r*c-d*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(e,n)),this}rotate(e){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fh.prototype.isMatrix3=!0;let Ne=fh;const zc=new Ne,Gp=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wp=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oS(){const t={enabled:!0,workingColorSpace:Pl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=Rs(r.r),r.g=Rs(r.g),r.b=Rs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?Ll:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Pl]:{primaries:e,whitePoint:i,transfer:Ll,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const Ge=oS();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Rs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class lS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=Dl("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cS=0;class ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vc(r[a].image)):s.push(Vc(r[a]))}else s=Vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let uS=0;const Hc=new k;class rn extends Gr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=wi,r=wi,s=Zt,a=Rr,o=Yn,l=Nn,c=rn.DEFAULT_ANISOTROPY,d=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=$a(),this.name="",this.source=new ah(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hc).x}get height(){return this.source.getSize(Hc).y}get depth(){return this.source.getSize(Hc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=s_;rn.DEFAULT_ANISOTROPY=1;const dh=class dh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],g=l[9],M=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(p+1)/2,w=(u+1)/2,T=(d+f)/4,C=(h+M)/4,x=(g+m)/4;return S>y&&S>w?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=T/i,s=C/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=x/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-M)/v,this.z=(f-d)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Be(this.x,e.x,n.x),this.y=Be(this.y,e.y,n.y),this.z=Be(this.z,e.z,n.z),this.w=Be(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Be(this.x,e,n),this.y=Be(this.y,e,n),this.z=Be(this.z,e,n),this.w=Be(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;let yt=dh;class fS extends Gr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ah(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends fS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class p_ extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dS extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kl=class kl{constructor(e,n,i,r,s,a,o,l,c,d,h,f,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,p,g,M,m)}set(e,n,i,r,s,a,o,l,c,d,h,f,p,g,M,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=g,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*h,g=o*d,M=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,g=c*d,M=c*h;n[0]=f+M*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-g,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,g=c*d,M=c*h;n[0]=f-M*o,n[4]=-a*h,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*d,n[9]=M-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*h,g=o*d,M=o*h;n[0]=l*d,n[4]=g*c-p,n[8]=f*c+M,n[1]=l*h,n[5]=M*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,M=o*c;n[0]=l*d,n[4]=M-f*h,n[8]=g*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+g,n[10]=f-M*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,M=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+M,n[5]=a*d,n[9]=p*h-g,n[2]=g*h-p,n[6]=o*d,n[10]=M*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hS,e,pS)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),zi.crossVectors(i,_n),zi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),zi.crossVectors(i,_n)),zi.normalize(),_o.crossVectors(_n,zi),r[0]=zi.x,r[4]=_o.x,r[8]=_n.x,r[1]=zi.y,r[5]=_o.y,r[9]=_n.y,r[2]=zi.z,r[6]=_o.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],g=i[2],M=i[6],m=i[10],u=i[14],v=i[3],S=i[7],y=i[11],w=i[15],T=r[0],C=r[4],x=r[8],A=r[12],b=r[1],L=r[5],D=r[9],X=r[13],Z=r[2],B=r[6],j=r[10],H=r[14],F=r[3],$=r[7],J=r[11],ne=r[15];return s[0]=a*T+o*b+l*Z+c*F,s[4]=a*C+o*L+l*B+c*$,s[8]=a*x+o*D+l*j+c*J,s[12]=a*A+o*X+l*H+c*ne,s[1]=d*T+h*b+f*Z+p*F,s[5]=d*C+h*L+f*B+p*$,s[9]=d*x+h*D+f*j+p*J,s[13]=d*A+h*X+f*H+p*ne,s[2]=g*T+M*b+m*Z+u*F,s[6]=g*C+M*L+m*B+u*$,s[10]=g*x+M*D+m*j+u*J,s[14]=g*A+M*X+m*H+u*ne,s[3]=v*T+S*b+y*Z+w*F,s[7]=v*C+S*L+y*B+w*$,s[11]=v*x+S*D+y*j+w*J,s[15]=v*A+S*X+y*H+w*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],g=e[3],M=e[7],m=e[11],u=e[15],v=l*p-c*f,S=o*p-c*h,y=o*f-l*h,w=a*p-c*d,T=a*f-l*d,C=a*h-o*d;return n*(M*v-m*S+u*y)-i*(g*v-m*w+u*T)+r*(g*S-M*w+u*C)-s*(g*y-M*T+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(a*d-o*c)-i*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],g=e[12],M=e[13],m=e[14],u=e[15],v=n*o-i*a,S=n*l-r*a,y=n*c-s*a,w=i*l-r*o,T=i*c-s*o,C=r*c-s*l,x=d*M-h*g,A=d*m-f*g,b=d*u-p*g,L=h*m-f*M,D=h*u-p*M,X=f*u-p*m,Z=v*X-S*D+y*L+w*b-T*A+C*x;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Z;return e[0]=(o*X-l*D+c*L)*B,e[1]=(r*D-i*X-s*L)*B,e[2]=(M*C-m*T+u*w)*B,e[3]=(f*T-h*C-p*w)*B,e[4]=(l*b-a*X-c*A)*B,e[5]=(n*X-r*b+s*A)*B,e[6]=(m*y-g*C-u*S)*B,e[7]=(d*C-f*y+p*S)*B,e[8]=(a*D-o*b+c*x)*B,e[9]=(i*b-n*D-s*x)*B,e[10]=(g*T-M*y+u*v)*B,e[11]=(h*y-d*T-p*v)*B,e[12]=(o*A-a*L-l*x)*B,e[13]=(n*L-i*A+r*x)*B,e[14]=(M*S-g*w-m*v)*B,e[15]=(d*w-h*S+f*v)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,p=s*d,g=s*h,M=a*d,m=a*h,u=o*h,v=l*c,S=l*d,y=l*h,w=i.x,T=i.y,C=i.z;return r[0]=(1-(M+u))*w,r[1]=(p+y)*w,r[2]=(g-S)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(f+u))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+S)*C,r[9]=(m-v)*C,r[10]=(1-(f+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),l=jr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Bn.copy(this);const c=1/a,d=1/o,h=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,M;if(l)g=s/(a-s),M=a*s/(a-s);else if(o===oi)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Nl)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,M;if(l)g=1/(a-s),M=a/(a-s);else if(o===oi)g=-2/(a-s),M=-(a+s)/(a-s);else if(o===Nl)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};kl.prototype.isMatrix4=!0;let St=kl;const jr=new k,Bn=new St,hS=new k(0,0,0),pS=new k(1,1,1),zi=new k,_o=new k,_n=new k,Xp=new St,$p=new Gs;class zr{constructor(e=0,n=0,i=0,r=zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zr.DEFAULT_ORDER="XYZ";class m_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mS=0;const Yp=new k,Kr=new Gs,mi=new St,vo=new k,ea=new k,gS=new k,_S=new Gs,qp=new k(1,0,0),jp=new k(0,1,0),Kp=new k(0,0,1),Zp={type:"added"},vS={type:"removed"},Zr={type:"childadded",child:null},Gc={type:"childremoved",child:null};class mn extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new k,n=new zr,i=new Gs,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Ne}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Kp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ea,vo,this.up):mi.lookAt(vo,ea,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(mi),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vS),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,gS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,_S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new k(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pr extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),u=this._getHandJoint(c,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Xc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ge.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ge.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ge.workingColorSpace){if(e=aS(e,1),n=Be(n,0,1),i=Be(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Xc(a,s,e+1/3),this.g=Xc(a,s,e),this.b=Xc(a,s,e-1/3)}return Ge.colorSpaceToWorking(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=g_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Ge.workingToColorSpace(jt.copy(this),e),Math.round(Be(jt.r*255,0,255))*65536+Math.round(Be(jt.g*255,0,255))*256+Math.round(Be(jt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ge.workingColorSpace){Ge.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ge.workingColorSpace){return Ge.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Rn){Ge.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(xo);const i=kc(Vi.h,xo.h,n),r=kc(Vi.s,xo.s,n),s=kc(Vi.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Qe;Qe.NAMES=g_;class yS extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zn=new k,gi=new k,$c=new k,_i=new k,Qr=new k,Jr=new k,Qp=new k,Yc=new k,qc=new k,jc=new k,Kc=new yt,Zc=new yt,Qc=new yt;class $n{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){zn.subVectors(r,n),gi.subVectors(i,n),$c.subVectors(e,n);const a=zn.dot(zn),o=zn.dot(gi),l=zn.dot($c),c=gi.dot(gi),d=gi.dot($c),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,g=(a*d-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Kc.setScalar(0),Zc.setScalar(0),Qc.setScalar(0),Kc.fromBufferAttribute(e,n),Zc.fromBufferAttribute(e,i),Qc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kc,s.x),a.addScaledVector(Zc,s.y),a.addScaledVector(Qc,s.z),a}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),gi.subVectors(e,n),zn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),zn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),Jr.subVectors(s,i),Yc.subVectors(e,i);const l=Qr.dot(Yc),c=Jr.dot(Yc);if(l<=0&&c<=0)return n.copy(i);qc.subVectors(e,r);const d=Qr.dot(qc),h=Jr.dot(qc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Qr,a);jc.subVectors(e,s);const p=Qr.dot(jc),g=Jr.dot(jc);if(g>=0&&p<=g)return n.copy(s);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Jr,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Qp.subVectors(s,r),o=(h-d)/(h-d+(p-g)),n.copy(r).addScaledVector(Qp,o);const u=1/(m+M+f);return a=M*u,o=f*u,n.copy(i).addScaledVector(Qr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ya{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),So.subVectors(this.max,ta),es.subVectors(e.a,ta),ts.subVectors(e.b,ta),ns.subVectors(e.c,ta),Hi.subVectors(ts,es),Gi.subVectors(ns,ts),mr.subVectors(es,ns);let n=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-mr.z,mr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,mr.z,0,-mr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-mr.y,mr.x,0];return!Jc(n,es,ts,ns,So)||(n=[1,0,0,0,1,0,0,0,1],!Jc(n,es,ts,ns,So))?!1:(Mo.crossVectors(Hi,Gi),n=[Mo.x,Mo.y,Mo.z],Jc(n,es,ts,ns,So))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new k,new k,new k,new k,new k,new k,new k,new k],Vn=new k,yo=new Ya,es=new k,ts=new k,ns=new k,Hi=new k,Gi=new k,mr=new k,ta=new k,So=new k,Mo=new k,gr=new k;function Jc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){gr.fromArray(t,s);const o=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),d=i.dot(gr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Rt=new k,Eo=new je;let SS=0;class di extends Gr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kp,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eo.fromBufferAttribute(this,n),Eo.applyMatrix3(e),this.setXY(n,Eo.x,Eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Js(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Js(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Js(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class __ extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class v_ extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qt extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const MS=new Ya,na=new k,eu=new k;class nc{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):MS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(eu)),this.expandByPoint(na.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ES=0;const Cn=new St,tu=new mn,is=new k,vn=new Ya,ia=new Ya,Ft=new k;class wn extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nS(e)?v_:__)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(vn.min,ia.min),vn.expandByPoint(Ft),Ft.addVectors(vn.max,ia.max),vn.expandByPoint(Ft)):(vn.expandByPoint(ia.min),vn.expandByPoint(ia.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ft.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(e,c),Ft.add(is)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new k,l[x]=new k;const c=new k,d=new k,h=new k,f=new je,p=new je,g=new je,M=new k,m=new k;function u(x,A,b){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,b),d.sub(c),h.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(M.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),o[x].add(M),o[A].add(M),o[b].add(M),l[x].add(m),l[A].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,A=v.length;x<A;++x){const b=v[x],L=b.start,D=b.count;for(let X=L,Z=L+D;X<Z;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const S=new k,y=new k,w=new k,T=new k;function C(x){w.fromBufferAttribute(r,x),T.copy(w);const A=o[x];S.copy(A),S.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(T,A);const L=y.dot(l[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,L)}for(let x=0,A=v.length;x<A;++x){const b=v[x],L=b.start,D=b.count;for(let X=L,Z=L+D;X<Z;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,d=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let u=0;u<d;u++)f[g++]=c[p++]}return new di(f,d,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new wn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let TS=0;class qa extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=As,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ff,this.blendDst=df,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Pe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ff&&(i.blendSrc=this.blendSrc),this.blendDst!==df&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Op&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xi=new k,nu=new k,To=new k,Wi=new k,iu=new k,wo=new k,ru=new k;class x_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nu.copy(e).add(n).multiplyScalar(.5),To.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(nu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(To),o=Wi.dot(this.direction),l=-Wi.dot(To),c=Wi.lengthSq(),d=Math.abs(1-a*a);let h,f,p,g;if(d>0)if(h=a*l-o,f=a*o-l,g=s*d,h>=0)if(f>=-g)if(f<=g){const M=1/d;h*=M,f*=M,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(nu).addScaledVector(To,f),p}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){iu.subVectors(n,e),wo.subVectors(i,e),ru.crossVectors(iu,wo);let a=this.direction.dot(ru),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot(wo.crossVectors(Wi,wo));if(l<0)return null;const c=o*this.direction.dot(iu.cross(Wi));if(c<0||l+c>a)return null;const d=-o*Wi.dot(ru);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Si extends qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jp=new St,_r=new x_,Ao=new nc,em=new k,Co=new k,Ro=new k,bo=new k,su=new k,Po=new k,tm=new k,Lo=new k;class Vt extends mn{constructor(e=new wn,n=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(su.fromBufferAttribute(h,e),a?Po.addScaledVector(su,d):Po.addScaledVector(su.sub(n),d))}n.add(Po)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Ao.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Ao,em)===null||_r.origin.distanceToSquared(em)>(e.far-e.near)**2))&&(Jp.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Jp),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=S;y<w;y+=3){const T=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);r=No(this,u,e,i,c,d,h,T,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,u=M;m<u;m+=3){const v=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);r=No(this,a,e,i,c,d,h,v,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=S;y<w;y+=3){const T=y,C=y+1,x=y+2;r=No(this,u,e,i,c,d,h,T,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,u=M;m<u;m+=3){const v=m,S=m+1,y=m+2;r=No(this,a,e,i,c,d,h,v,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function wS(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ur,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Lo);return c<n.near||c>n.far?null:{distance:c,point:Lo.clone(),object:t}}function No(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Co),t.getVertexPosition(l,Ro),t.getVertexPosition(c,bo);const d=wS(t,e,n,i,Co,Ro,bo,tm);if(d){const h=new k;$n.getBarycoord(tm,Co,Ro,bo,h),r&&(d.uv=$n.getInterpolatedAttribute(r,o,l,c,h,new je)),s&&(d.uv1=$n.getInterpolatedAttribute(s,o,l,c,h,new je)),a&&(d.normal=$n.getInterpolatedAttribute(a,o,l,c,h,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};$n.getNormal(Co,Ro,bo,f.normal),d.face=f,d.barycoord=h}return d}class AS extends rn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Ht,d=Ht,h,f){super(null,a,o,l,c,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new k,CS=new k,RS=new Ne;class Sr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(CS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(au),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RS.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new nc,bS=new je(.5,.5),Do=new k;class y_{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],f=s[6],p=s[7],g=s[8],M=s[9],m=s[10],u=s[11],v=s[12],S=s[13],y=s[14],w=s[15];if(r[0].setComponents(c-a,p-d,u-g,w-v).normalize(),r[1].setComponents(c+a,p+d,u+g,w+v).normalize(),r[2].setComponents(c+o,p+h,u+M,w+S).normalize(),r[3].setComponents(c-o,p-h,u-M,w-S).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,p-f,u-m,w-y).normalize();else if(r[4].setComponents(c-l,p-f,u-m,w-y).normalize(),n===oi)r[5].setComponents(c+l,p+f,u+m,w+y).normalize();else if(n===Nl)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=bS.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Do.x=r.normal.x>0?e.max.x:e.min.x,Do.y=r.normal.y>0?e.max.y:e.min.y,Do.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jf extends qa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Il=new k,Ul=new k,nm=new St,ra=new x_,Io=new nc,ou=new k,im=new k;class PS extends mn{constructor(e=new wn,n=new Jf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Il.fromBufferAttribute(n,r-1),Ul.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Il.distanceTo(Ul);e.setAttribute("lineDistance",new Qt(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;nm.copy(r).invert(),ra.copy(e.ray).applyMatrix4(nm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=c){const u=d.getX(M),v=d.getX(M+1),S=Uo(this,e,ra,l,u,v,M);S&&n.push(S)}if(this.isLineLoop){const M=d.getX(g-1),m=d.getX(p),u=Uo(this,e,ra,l,M,m,g-1);u&&n.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let M=p,m=g-1;M<m;M+=c){const u=Uo(this,e,ra,l,M,M+1,M);u&&n.push(u)}if(this.isLineLoop){const M=Uo(this,e,ra,l,g-1,p,g-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Uo(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Il.fromBufferAttribute(o,r),Ul.fromBufferAttribute(o,s),n.distanceSqToSegment(Il,Ul,ou,im)>i)return;ou.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ou);if(!(c<e.near||c>e.far))return{distance:c,point:im.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class S_ extends rn{constructor(e=[],n=kr,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ks extends rn{constructor(e,n,i=hi,r,s,a,o=Ht,l=Ht,c,d=Ii,h=1){if(d!==Ii&&d!==br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ah(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class LS extends ks{constructor(e,n=hi,i=kr,r,s,a=Ht,o=Ht,l,c=Ii){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class M_ extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends wn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(h,2));function g(M,m,u,v,S,y,w,T,C,x,A){const b=y/C,L=w/x,D=y/2,X=w/2,Z=T/2,B=C+1,j=x+1;let H=0,F=0;const $=new k;for(let J=0;J<j;J++){const ne=J*L-X;for(let ae=0;ae<B;ae++){const Oe=ae*b-D;$[M]=Oe*v,$[m]=ne*S,$[u]=Z,c.push($.x,$.y,$.z),$[M]=0,$[m]=0,$[u]=T>0?1:-1,d.push($.x,$.y,$.z),h.push(ae/C),h.push(1-J/x),H+=1}}for(let J=0;J<x;J++)for(let ne=0;ne<C;ne++){const ae=f+ne+B*J,Oe=f+ne+B*(J+1),We=f+(ne+1)+B*(J+1),He=f+(ne+1)+B*J;l.push(ae,Oe,He),l.push(Oe,We,He),F+=6}o.addGroup(p,F,A),p+=F,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class NS{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],f=i[r+1]-d,p=(a-d)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new je:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new k,r=[],s=[],a=[],o=new k,l=new St;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new k)}s[0]=new k,a[0]=new k;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Be(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Be(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function DS(t,e){const n=1-t;return n*n*e}function IS(t,e){return 2*(1-t)*t*e}function US(t,e){return t*t*e}function lu(t,e,n,i){return DS(t,e)+IS(t,n)+US(t,i)}class FS extends NS{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(lu(e,r.x,s.x,a.x),lu(e,r.y,s.y,a.y),lu(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ic extends wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,p=[],g=[],M=[],m=[];for(let u=0;u<d;u++){const v=u*f-a;for(let S=0;S<c;S++){const y=S*h-s;g.push(y,-v,0),M.push(0,0,1),m.push(S/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const S=v+c*u,y=v+c*(u+1),w=v+1+c*(u+1),T=v+1+c*u;p.push(S,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(M,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fl extends wn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let h=e;const f=(n-e)/r,p=new k,g=new je;for(let M=0;M<=r;M++){for(let m=0;m<=i;m++){const u=s+m/i*a;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,d.push(g.x,g.y)}h+=f}for(let M=0;M<r;M++){const m=M*(i+1);for(let u=0;u<i;u++){const v=u+m,S=v,y=v+i+1,w=v+i+2,T=v+1;o.push(S,y,T),o.push(y,w,T)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Er extends wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new k,f=new k,p=[],g=[],M=[],m=[];for(let u=0;u<=i;u++){const v=[],S=u/i,y=a+S*o,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w);let C=0;u===0&&a===0?C=.5/n:u===i&&l===Math.PI&&(C=-.5/n);for(let x=0;x<=n;x++){const A=x/n,b=r+A*s;h.x=-T*Math.cos(b),h.y=w,h.z=T*Math.sin(b),g.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),m.push(A+C,1-S),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const S=d[u][v+1],y=d[u][v],w=d[u+1][v],T=d[u+1][v+1];(u!==0||a>0)&&p.push(S,y,T),(u!==i-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(M,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(rm(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(rm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=Bs(t[n]);for(const r in i)e[r]=i[r]}return e}function rm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function OS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function E_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const kS={clone:Bs,merge:en};var BS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BS,this.fragmentShader=zS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=OS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[i].value=new St().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class VS extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HS extends qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GS extends qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fo=new k,Oo=new Gs,ti=new k;class T_ extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fo,Oo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Fo,Oo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Oo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new k,sm=new je,am=new je;class Ln extends T_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,n){return this.getViewBounds(e,sm,am),n.subVectors(am,sm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class w_ extends T_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const rs=-90,ss=1;class WS extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new Ln(rs,ss,e,n);s.layers=this.layers,this.add(s);const a=new Ln(rs,ss,e,n);a.layers=this.layers,this.add(a);const o=new Ln(rs,ss,e,n);o.layers=this.layers,this.add(o);const l=new Ln(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new Ln(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class XS extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hh=class hh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};hh.prototype.isMatrix2=!0;let om=hh;function lm(t,e,n,i){const r=$S(i);switch(n){case u_:return t*e;case d_:return t*e/r.components*r.byteLength;case th:return t*e/r.components*r.byteLength;case Br:return t*e*2/r.components*r.byteLength;case nh:return t*e*2/r.components*r.byteLength;case f_:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case ih:return t*e*4/r.components*r.byteLength;case Jo:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case tl:case nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:case wf:return Math.max(t,16)*Math.max(e,8)/4;case Mf:case Tf:return Math.max(t,8)*Math.max(e,8)/2;case Af:case Cf:case bf:case Pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rf:case Rl:case Lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Of:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $f:case Yf:case qf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jf:case Kf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bl:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $S(t){switch(t){case Nn:case a_:return{byteLength:1,components:1};case Ba:case o_:case Di:return{byteLength:2,components:1};case Jd:case eh:return{byteLength:2,components:4};case hi:case Qd:case ai:return{byteLength:4,components:1};case l_:case c_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function A_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function YS(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],M=h[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,h[f]=M)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const M=h[p];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$M=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:qS,alphahash_pars_fragment:jS,alphamap_fragment:KS,alphamap_pars_fragment:ZS,alphatest_fragment:QS,alphatest_pars_fragment:JS,aomap_fragment:eM,aomap_pars_fragment:tM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:aM,iridescence_fragment:oM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:dM,color_fragment:hM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:_M,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:yM,displacementmap_vertex:SM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:TM,colorspace_pars_fragment:wM,envmap_fragment:AM,envmap_common_pars_fragment:CM,envmap_pars_fragment:RM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:zM,envmap_vertex:PM,fog_vertex:LM,fog_pars_vertex:NM,fog_fragment:DM,fog_pars_fragment:IM,gradientmap_pars_fragment:UM,lightmap_pars_fragment:FM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:kM,lights_pars_begin:BM,lights_toon_fragment:VM,lights_toon_pars_fragment:HM,lights_phong_fragment:GM,lights_phong_pars_fragment:WM,lights_physical_fragment:XM,lights_physical_pars_fragment:$M,lights_fragment_begin:YM,lights_fragment_maps:qM,lights_fragment_end:jM,lightprobes_pars_fragment:KM,logdepthbuf_fragment:ZM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:e1,map_fragment:t1,map_pars_fragment:n1,map_particle_fragment:i1,map_particle_pars_fragment:r1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:a1,morphinstance_vertex:o1,morphcolor_vertex:l1,morphnormal_vertex:c1,morphtarget_pars_vertex:u1,morphtarget_vertex:f1,normal_fragment_begin:d1,normal_fragment_maps:h1,normal_pars_fragment:p1,normal_pars_vertex:m1,normal_vertex:g1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:S1,opaque_fragment:M1,packing:E1,premultiplied_alpha_fragment:T1,project_vertex:w1,dithering_fragment:A1,dithering_pars_fragment:C1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:P1,shadowmap_pars_vertex:L1,shadowmap_vertex:N1,shadowmask_pars_fragment:D1,skinbase_vertex:I1,skinning_pars_vertex:U1,skinning_vertex:F1,skinnormal_vertex:O1,specularmap_fragment:k1,specularmap_pars_fragment:B1,tonemapping_fragment:z1,tonemapping_pars_fragment:V1,transmission_fragment:H1,transmission_pars_fragment:G1,uv_pars_fragment:W1,uv_pars_vertex:X1,uv_vertex:$1,worldpos_vertex:Y1,background_vert:q1,background_frag:j1,backgroundCube_vert:K1,backgroundCube_frag:Z1,cube_vert:Q1,cube_frag:J1,depth_vert:eE,depth_frag:tE,distance_vert:nE,distance_frag:iE,equirect_vert:rE,equirect_frag:sE,linedashed_vert:aE,linedashed_frag:oE,meshbasic_vert:lE,meshbasic_frag:cE,meshlambert_vert:uE,meshlambert_frag:fE,meshmatcap_vert:dE,meshmatcap_frag:hE,meshnormal_vert:pE,meshnormal_frag:mE,meshphong_vert:gE,meshphong_frag:_E,meshphysical_vert:vE,meshphysical_frag:xE,meshtoon_vert:yE,meshtoon_frag:SE,points_vert:ME,points_frag:EE,shadow_vert:TE,shadow_frag:wE,sprite_vert:AE,sprite_frag:CE},pe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ri={basic:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:en([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:en([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:en([pe.points,pe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:en([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:en([pe.common,pe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:en([pe.sprite,pe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:en([pe.common,pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:en([pe.lights,pe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ri.physical={uniforms:en([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ko={r:0,b:0,g:0},RE=new St,C_=new Ne;C_.set(-1,0,0,0,1,0,0,0,1);function bE(t,e,n,i,r,s){const a=new Qe(0);let o=r===!0?0:1,l,c,d=null,h=0,f=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(v){let S=!1;const y=p(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),S=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(v,S){const y=p(S);y&&(y.isCubeTexture||y.mapping===tc)?(c===void 0&&(c=new Vt(new ja(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Bs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(RE.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(C_),c.material.toneMapped=Ge.getTransfer(y.colorSpace)!==et,(d!==y||h!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,f=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Vt(new ic(2,2),new pi({name:"BackgroundMaterial",uniforms:Bs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(ko,E_(t)),n.buffers.color.setClear(ko.r,ko.g,ko.b,S,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:M,dispose:u}}function PE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(L,D,X,Z,B){let j=!1;const H=h(L,Z,X,D);s!==H&&(s=H,c(s.object)),j=p(L,Z,X,B),j&&g(L,Z,X,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(L,D,X,Z),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function d(L){return t.deleteVertexArray(L)}function h(L,D,X,Z){const B=Z.wireframe===!0;let j=i[D.id];j===void 0&&(j={},i[D.id]=j);const H=L.isInstancedMesh===!0?L.id:0;let F=j[H];F===void 0&&(F={},j[H]=F);let $=F[X.id];$===void 0&&($={},F[X.id]=$);let J=$[B];return J===void 0&&(J=f(l()),$[B]=J),J}function f(L){const D=[],X=[],Z=[];for(let B=0;B<n;B++)D[B]=0,X[B]=0,Z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:Z,object:L,attributes:{},index:null}}function p(L,D,X,Z){const B=s.attributes,j=D.attributes;let H=0;const F=X.getAttributes();for(const $ in F)if(F[$].location>=0){const ne=B[$];let ae=j[$];if(ae===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;H++}return s.attributesNum!==H||s.index!==Z}function g(L,D,X,Z){const B={},j=D.attributes;let H=0;const F=X.getAttributes();for(const $ in F)if(F[$].location>=0){let ne=j[$];ne===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),B[$]=ae,H++}s.attributes=B,s.attributesNum=H,s.index=Z}function M(){const L=s.newAttributes;for(let D=0,X=L.length;D<X;D++)L[D]=0}function m(L){u(L,0)}function u(L,D){const X=s.newAttributes,Z=s.enabledAttributes,B=s.attributeDivisors;X[L]=1,Z[L]===0&&(t.enableVertexAttribArray(L),Z[L]=1),B[L]!==D&&(t.vertexAttribDivisor(L,D),B[L]=D)}function v(){const L=s.newAttributes,D=s.enabledAttributes;for(let X=0,Z=D.length;X<Z;X++)D[X]!==L[X]&&(t.disableVertexAttribArray(X),D[X]=0)}function S(L,D,X,Z,B,j,H){H===!0?t.vertexAttribIPointer(L,D,X,B,j):t.vertexAttribPointer(L,D,X,Z,B,j)}function y(L,D,X,Z){M();const B=Z.attributes,j=X.getAttributes(),H=D.defaultAttributeValues;for(const F in j){const $=j[F];if($.location>=0){let J=B[F];if(J===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const ne=J.normalized,ae=J.itemSize,Oe=e.get(J);if(Oe===void 0)continue;const We=Oe.buffer,He=Oe.type,K=Oe.bytesPerElement,oe=He===t.INT||He===t.UNSIGNED_INT||J.gpuType===Qd;if(J.isInterleavedBufferAttribute){const re=J.data,Le=re.stride,De=J.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<$.locationSize;Re++)u($.location+Re,re.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<$.locationSize;Re++)m($.location+Re);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Re=0;Re<$.locationSize;Re++)S($.location+Re,ae/$.locationSize,He,ne,Le*K,(De+ae/$.locationSize*Re)*K,oe)}else{if(J.isInstancedBufferAttribute){for(let re=0;re<$.locationSize;re++)u($.location+re,J.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let re=0;re<$.locationSize;re++)m($.location+re);t.bindBuffer(t.ARRAY_BUFFER,We);for(let re=0;re<$.locationSize;re++)S($.location+re,ae/$.locationSize,He,ne,ae*K,ae/$.locationSize*re*K,oe)}}else if(H!==void 0){const ne=H[F];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv($.location,ne);break;case 3:t.vertexAttrib3fv($.location,ne);break;case 4:t.vertexAttrib4fv($.location,ne);break;default:t.vertexAttrib1fv($.location,ne)}}}}v()}function w(){A();for(const L in i){const D=i[L];for(const X in D){const Z=D[X];for(const B in Z){const j=Z[B];for(const H in j)d(j[H].object),delete j[H];delete Z[B]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const X in D){const Z=D[X];for(const B in Z){const j=Z[B];for(const H in j)d(j[H].object),delete j[H];delete Z[B]}}delete i[L.id]}function C(L){for(const D in i){const X=i[D];for(const Z in X){const B=X[Z];if(B[L.id]===void 0)continue;const j=B[L.id];for(const H in j)d(j[H].object),delete j[H];delete B[L.id]}}}function x(L){for(const D in i){const X=i[D],Z=L.isInstancedMesh===!0?L.id:0,B=X[Z];if(B!==void 0){for(const j in B){const H=B[j];for(const F in H)d(H[F].object),delete H[F];delete B[j]}delete X[Z],Object.keys(X).length===0&&delete i[D]}}}function A(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function LE(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let p=0;p<d;p++)f+=c[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function NE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Yn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ai&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Pe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:w,samples:T}}function DE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Sr,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,S=v*4;let y=u.clippingState||null;l.value=y,y=d(g,f,S,p);for(let w=0;w!==S;++w)y[w]=n[w];u.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,g){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const u=p+M*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,y=p;S!==M;++S,y+=4)a.copy(h[S]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const Ji=4,cm=[.125,.215,.35,.446,.526,.582],Tr=20,IE=256,sa=new w_,um=new Qe;let cu=null,uu=0,fu=0,du=!1;const UE=new k;class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=UE}=s;cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,uu,fu),this._renderer.xr.enabled=du,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===kr||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Di,format:Yn,colorSpace:Pl,depthBuffer:!1},r=dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FE(s)),this._blurMaterial=kE(s,e,n),this._ggxMaterial=OE(s,e,n)}return r}_compileMaterial(e){const n=new Vt(new wn,e);this._renderer.compile(n,sa)}_sceneToCubeUV(e,n,i,r,s){const l=new Ln(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(um),h.toneMapping=ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new ja,new Si({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let u=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,u=!0):(m.color.copy(um),u=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[S]));const w=this._cubeSize;as(r,y*w,S>2?w:0,w,w),h.setRenderTarget(r),u&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===kr||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;as(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,sa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),f=0+c*1.25,p=h*f,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-Ji?i-g+Ji:0),u=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,as(s,m,u,3*M,2*M),r.setRenderTarget(s),r.render(o,sa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,as(e,m,u,3*M,2*M),r.setRenderTarget(e),r.render(o,sa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),M=s/g,m=isFinite(s)?1+Math.floor(d*M):Tr;m>Tr&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tr}`);const u=[];let v=0;for(let C=0;C<Tr;++C){const x=C/M,A=Math.exp(-x*x/2);u.push(A),C===0?v+=A:C<m&&(v+=2*A)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const y=this._sizeLods[r],w=3*y*(r>S-Ji?r-S+Ji:0),T=4*(this._cubeSize-y);as(n,w,T,3*y,2*y),l.setRenderTarget(n),l.render(h,sa)}}function FE(t){const e=[],n=[],i=[];let r=t;const s=t-Ji+1+cm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Ji?l=cm[a-t+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,M=3,m=2,u=1,v=new Float32Array(M*g*p),S=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,x=T>2?0:-1,A=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(A,M*g*T),S.set(f,m*g*T);const b=[T,T,T,T,T,T];y.set(b,u*g*T)}const w=new wn;w.setAttribute("position",new di(v,M)),w.setAttribute("uv",new di(S,m)),w.setAttribute("faceIndex",new di(y,u)),i.push(new Vt(w,null)),r>Ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function dm(t,e,n){const i=new fi(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function OE(t,e,n){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function kE(t,e,n){const i=new Float32Array(Tr),r=new k(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function hm(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function pm(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class R_ extends fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new S_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ja(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ci});s.uniforms.tEquirect.value=n;const a=new Vt(r,s),o=n.minFilter;return n.minFilter===Rr&&(n.minFilter=Zt),new WS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function BE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Ic||p===Uc)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const M=new R_(g.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,g=p===Ic||p===Uc,M=p===kr||p===Os;if(g||M){let m=n.get(f);const u=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new fm(t)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return g&&v&&v.height>0||M&&v&&l(v)?(i===null&&(i=new fm(t)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function o(f,p){return p===Ic?f.mapping=kr:p===Uc&&(f.mapping=Os),f}function l(f){let p=0;const g=6;for(let M=0;M<g;M++)f[M]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function zE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Cs("WebGLRenderer: "+i+" extension not supported."),r}}}function VE(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let M=0;if(g===void 0)return;if(p!==null){const v=p.array;M=p.version;for(let S=0,y=v.length;S<y;S+=3){const w=v[S+0],T=v[S+1],C=v[S+2];f.push(w,T,T,C,C,w)}}else{const v=g.array;M=g.version;for(let S=0,y=v.length/3-1;S<y;S+=3){const w=S+0,T=S+1,C=S+2;f.push(w,T,T,C,C,w)}}const m=new(g.count>=65535?v_:__)(f,1);m.version=M;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function HE(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function c(h,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,h*a,p),n.update(f,i,p))}function d(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,p);let M=0;for(let m=0;m<p;m++)M+=f[m];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function GE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WE(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let b=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),m===!0&&(y=3);let w=o.attributes.position.count*y,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*h),x=new p_(C,w,T,h);x.type=ai,x.needsUpdate=!0;const A=y*4;for(let L=0;L<h;L++){const D=u[L],X=v[L],Z=S[L],B=w*T*4*L;for(let j=0;j<D.count;j++){const H=j*A;g===!0&&(r.fromBufferAttribute(D,j),C[B+H+0]=r.x,C[B+H+1]=r.y,C[B+H+2]=r.z,C[B+H+3]=0),M===!0&&(r.fromBufferAttribute(X,j),C[B+H+4]=r.x,C[B+H+5]=r.y,C[B+H+6]=r.z,C[B+H+7]=0),m===!0&&(r.fromBufferAttribute(Z,j),C[B+H+8]=r.x,C[B+H+9]=r.y,C[B+H+10]=r.z,C[B+H+11]=Z.itemSize===4?r.w:1)}}f={count:h,texture:x,size:new je(w,T)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function XE(t,e,n,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return f}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const $E={[Q0]:"LINEAR_TONE_MAPPING",[J0]:"REINHARD_TONE_MAPPING",[e_]:"CINEON_TONE_MAPPING",[t_]:"ACES_FILMIC_TONE_MAPPING",[i_]:"AGX_TONE_MAPPING",[r_]:"NEUTRAL_TONE_MAPPING",[n_]:"CUSTOM_TONE_MAPPING"};function YE(t,e,n,i,r,s){const a=new fi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ks(e,n):void 0}),o=new fi(e,n,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new wn;l.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const c=new VS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Vt(l,c),h=new w_(-1,1,1,-1,0,1);let f=null,p=null,g=!1,M,m=null,u=[],v=!1;this.setSize=function(S,y){a.setSize(S,y),o.setSize(S,y);for(let w=0;w<u.length;w++){const T=u[w];T.setSize&&T.setSize(S,y)}},this.setEffects=function(S){u=S,v=u.length>0&&u[0].isRenderPass===!0;const y=a.width,w=a.height;for(let T=0;T<u.length;T++){const C=u[T];C.setSize&&C.setSize(y,w)}},this.begin=function(S,y){if(g||S.toneMapping===ui&&u.length===0)return!1;if(m=y,y!==null){const w=y.width,T=y.height;(a.width!==w||a.height!==T)&&this.setSize(w,T)}return v===!1&&S.setRenderTarget(a),M=S.toneMapping,S.toneMapping=ui,!0},this.hasRenderPass=function(){return v},this.end=function(S,y){S.toneMapping=M,g=!0;let w=a,T=o;for(let C=0;C<u.length;C++){const x=u[C];if(x.enabled!==!1&&(x.render(S,T,w,y),x.needsSwap!==!1)){const A=w;w=T,T=A}}if(f!==S.outputColorSpace||p!==S.toneMapping){f=S.outputColorSpace,p=S.toneMapping,c.defines={},Ge.getTransfer(f)===et&&(c.defines.SRGB_TRANSFER="");const C=$E[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(m),S.render(d,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const b_=new rn,ed=new ks(1,1),P_=new p_,L_=new dS,N_=new S_,mm=[],gm=[],_m=new Float32Array(16),vm=new Float32Array(9),xm=new Float32Array(4);function Ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mm[r];if(s===void 0&&(s=new Float32Array(r),mm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=gm[e];n===void 0&&(n=new Int32Array(e),gm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function QE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),It(n,i)}}function JE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;vm.set(i),t.uniformMatrix3fv(this.addr,!1,vm),It(n,i)}}function eT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;_m.set(i),t.uniformMatrix4fv(this.addr,!1,_m),It(n,i)}}function tT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ed.compareFunction=n.isReversedDepthBuffer()?sh:rh,s=ed):s=b_,n.setTexture2D(e||s,r)}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||L_,r)}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||N_,r)}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||P_,r)}function hT(t){switch(t){case 5126:return qE;case 35664:return jE;case 35665:return KE;case 35666:return ZE;case 35674:return QE;case 35675:return JE;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return aT;case 36295:return oT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return dT}}function pT(t,e){t.uniform1fv(this.addr,e)}function mT(t,e){const n=Ws(e,this.size,2);t.uniform2fv(this.addr,n)}function gT(t,e){const n=Ws(e,this.size,3);t.uniform3fv(this.addr,n)}function _T(t,e){const n=Ws(e,this.size,4);t.uniform4fv(this.addr,n)}function vT(t,e){const n=Ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xT(t,e){const n=Ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yT(t,e){const n=Ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ST(t,e){t.uniform1iv(this.addr,e)}function MT(t,e){t.uniform2iv(this.addr,e)}function ET(t,e){t.uniform3iv(this.addr,e)}function TT(t,e){t.uniform4iv(this.addr,e)}function wT(t,e){t.uniform1uiv(this.addr,e)}function AT(t,e){t.uniform2uiv(this.addr,e)}function CT(t,e){t.uniform3uiv(this.addr,e)}function RT(t,e){t.uniform4uiv(this.addr,e)}function bT(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=ed:a=b_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function PT(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||L_,s[a])}function LT(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||N_,s[a])}function NT(t,e,n){const i=this.cache,r=e.length,s=sc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||P_,s[a])}function DT(t){switch(t){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return _T;case 35674:return vT;case 35675:return xT;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return wT;case 36294:return AT;case 36295:return CT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}class IT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hT(n.type)}}class UT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DT(n.type)}}class FT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function ym(t,e){t.seq.push(e),t.map[e.id]=e}function OT(t,e,n){const i=t.name,r=i.length;for(hu.lastIndex=0;;){const s=hu.exec(i),a=hu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ym(n,c===void 0?new IT(o,t,e):new UT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new FT(o),ym(n,h)),n=h}}}class il{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);OT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kT=37297;let BT=0;function zT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Mm=new Ne;function VT(t){Ge._getMatrix(Mm,Ge.workingColorSpace,t);const e=`mat3( ${Mm.elements.map(n=>n.toFixed(4))} )`;switch(Ge.getTransfer(t)){case Ll:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+zT(t.getShaderSource(e),o)}else return s}function HT(t,e){const n=VT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const GT={[Q0]:"Linear",[J0]:"Reinhard",[e_]:"Cineon",[t_]:"ACESFilmic",[i_]:"AgX",[r_]:"Neutral",[n_]:"Custom"};function WT(t,e){const n=GT[e];return n===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Bo=new k;function XT(){Ge.getLuminanceCoefficients(Bo);const t=Bo.x.toFixed(4),e=Bo.y.toFixed(4),n=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $T(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function YT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function qT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function da(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(t){return t.replace(jT,ZT)}const KT=new Map;function ZT(t,e){let n=Fe[e];if(n===void 0){const i=KT.get(e);if(i!==void 0)n=Fe[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return td(n)}const QT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(t){return t.replace(QT,JT)}function JT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ew={[Qo]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function tw(t){return ew[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nw={[kr]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[tc]:"ENVMAP_TYPE_CUBE_UV"};function iw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":nw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const rw={[Os]:"ENVMAP_MODE_REFRACTION"};function sw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":rw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aw={[Z0]:"ENVMAP_BLENDING_MULTIPLY",[Xy]:"ENVMAP_BLENDING_MIX",[$y]:"ENVMAP_BLENDING_ADD"};function ow(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":aw[t.combine]||"ENVMAP_BLENDING_NONE"}function lw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=tw(n),c=iw(n),d=sw(n),h=ow(n),f=lw(n),p=$T(n),g=YT(s),M=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(da).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(da).join(`
`),u.length>0&&(u+=`
`)):(m=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),u=[Cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?Fe.tonemapping_pars_fragment:"",n.toneMapping!==ui?WT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,HT("linearToOutputTexel",n.outputColorSpace),XT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),a=td(a),a=Tm(a,n),a=wm(a,n),o=td(o),o=Tm(o,n),o=wm(o,n),a=Am(a),o=Am(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=v+m+a,y=v+u+o,w=Sm(r,r.VERTEX_SHADER,S),T=Sm(r,r.FRAGMENT_SHADER,y);r.attachShader(M,w),r.attachShader(M,T),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(L){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(w)||"",Z=r.getShaderInfoLog(T)||"",B=D.trim(),j=X.trim(),H=Z.trim();let F=!0,$=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,w,T);else{const J=Em(r,w,"vertex"),ne=Em(r,T,"fragment");Ye("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+J+`
`+ne)}else B!==""?Pe("WebGLProgram: Program Info Log:",B):(j===""||H==="")&&($=!1);$&&(L.diagnostics={runnable:F,programLog:B,vertexShader:{log:j,prefix:m},fragmentShader:{log:H,prefix:u}})}r.deleteShader(w),r.deleteShader(T),x=new il(r,M),A=qT(r,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(M,kT)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=T,this}let uw=0;class fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new dw(e),n.set(e,i)),i}}class dw{constructor(e){this.id=uw++,this.code=e,this.usedTimes=0}}function hw(t){return t===Br||t===Rl||t===bl}function pw(t,e,n,i,r,s){const a=new m_,o=new fw,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,A,b,L,D,X){const Z=L.fog,B=D.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||j,H),$=F&&F.mapping===tc?F.image.height:null,J=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=ne!==void 0?ne.length:0;let Oe=0;B.morphAttributes.position!==void 0&&(Oe=1),B.morphAttributes.normal!==void 0&&(Oe=2),B.morphAttributes.color!==void 0&&(Oe=3);let We,He,K,oe;if(J){const Se=ri[J];We=Se.vertexShader,He=Se.fragmentShader}else{We=x.vertexShader,He=x.fragmentShader;const Se=o.getVertexShaderStage(x),_t=o.getFragmentShaderStage(x);o.update(x,Se,_t),K=Se.id,oe=_t.id}const re=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,Re=D.isBatchedMesh===!0,Mt=!!x.map,Ve=!!x.matcap,rt=!!F,Ze=!!x.aoMap,Xe=!!x.lightMap,At=!!x.bumpMap&&x.wireframe===!1,Pt=!!x.normalMap,Ut=!!x.displacementMap,Bt=!!x.emissiveMap,gt=!!x.metalnessMap,Ct=!!x.roughnessMap,I=x.anisotropy>0,on=x.clearcoat>0,Je=x.dispersion>0,R=x.iridescence>0,_=x.sheen>0,O=x.transmission>0,G=I&&!!x.anisotropyMap,Y=on&&!!x.clearcoatMap,se=on&&!!x.clearcoatNormalMap,ce=on&&!!x.clearcoatRoughnessMap,q=R&&!!x.iridescenceMap,ee=R&&!!x.iridescenceThicknessMap,ue=_&&!!x.sheenColorMap,Te=_&&!!x.sheenRoughnessMap,he=!!x.specularMap,fe=!!x.specularColorMap,Ce=!!x.specularIntensityMap,be=O&&!!x.transmissionMap,Ie=O&&!!x.thicknessMap,N=!!x.gradientMap,le=!!x.alphaMap,Q=x.alphaTest>0,de=!!x.alphaHash,_e=!!x.extensions;let te=ui;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(te=t.toneMapping);const Ee={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:He,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Re,batchingColor:Re&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Mt,matcap:Ve,envMap:rt,envMapMode:rt&&F.mapping,envMapCubeUVHeight:$,aoMap:Ze,lightMap:Xe,bumpMap:At,normalMap:Pt,displacementMap:Ut,emissiveMap:Bt,normalMapObjectSpace:Pt&&x.normalMapType===jy,normalMapTangentSpace:Pt&&x.normalMapType===Fp,packedNormalMap:Pt&&x.normalMapType===Fp&&hw(x.normalMap.format),metalnessMap:gt,roughnessMap:Ct,anisotropy:I,anisotropyMap:G,clearcoat:on,clearcoatMap:Y,clearcoatNormalMap:se,clearcoatRoughnessMap:ce,dispersion:Je,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:ee,sheen:_,sheenColorMap:ue,sheenRoughnessMap:Te,specularMap:he,specularColorMap:fe,specularIntensityMap:Ce,transmission:O,transmissionMap:be,thicknessMap:Ie,gradientMap:N,opaque:x.transparent===!1&&x.blending===As&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:Q,alphaHash:de,combine:x.combine,mapUv:Mt&&g(x.map.channel),aoMapUv:Ze&&g(x.aoMap.channel),lightMapUv:Xe&&g(x.lightMap.channel),bumpMapUv:At&&g(x.bumpMap.channel),normalMapUv:Pt&&g(x.normalMap.channel),displacementMapUv:Ut&&g(x.displacementMap.channel),emissiveMapUv:Bt&&g(x.emissiveMap.channel),metalnessMapUv:gt&&g(x.metalnessMap.channel),roughnessMapUv:Ct&&g(x.roughnessMap.channel),anisotropyMapUv:G&&g(x.anisotropyMap.channel),clearcoatMapUv:Y&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(x.sheenRoughnessMap.channel),specularMapUv:he&&g(x.specularMap.channel),specularColorMapUv:fe&&g(x.specularColorMap.channel),specularIntensityMapUv:Ce&&g(x.specularIntensityMap.channel),transmissionMapUv:be&&g(x.transmissionMap.channel),thicknessMapUv:Ie&&g(x.thicknessMap.channel),alphaMapUv:le&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pt||I),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Mt||le),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&Pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Le,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&Ge.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:Bt&&x.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xn,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const b in x.defines)A.push(b),A.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(u(A,x),v(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function u(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){const A=p[x.type];let b;if(A){const L=ri[A];b=kS.clone(L.uniforms)}else b=x.uniforms;return b}function y(x,A){let b=d.get(A);return b!==void 0?++b.usedTimes:(b=new cw(t,A,x,r),c.push(b),d.set(A,b)),b}function w(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function mw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function gw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,M,m,u){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:u},t[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=M,v.renderOrder=f.renderOrder,v.z=m,v.group=u),e++,v}function l(f,p,g,M,m,u){const v=o(f,p,g,M,m,u);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):n.push(v)}function c(f,p,g,M,m,u){const v=o(f,p,g,M,m,u);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function d(f,p,g){n.length>1&&n.sort(f||gw),i.length>1&&i.sort(p||Rm),r.length>1&&r.sort(p||Rm),g&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function _w(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new bm,t.set(i,[a])):r>=s.length?(a=new bm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function vw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Qe};break;case"SpotLight":n={position:new k,direction:new k,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function xw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let yw=0;function Sw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Mw(t){const e=new vw,n=xw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new St,a=new St;function o(c){let d=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,M=0,m=0,u=0,v=0,S=0,y=0,w=0,T=0,C=0;c.sort(Sw);for(let A=0,b=c.length;A<b;A++){const L=c[A],D=L.color,X=L.intensity,Z=L.distance;let B=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Br?B=L.shadow.map.texture:B=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=D.r*X,h+=D.g*X,f+=D.b*X;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],X);C++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,F=n.get(L);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(D).multiplyScalar(X),j.distance=Z,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[M]=j;const H=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,H.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[M]=H.matrix,L.castShadow){const F=n.get(L);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,i.spotShadow[M]=F,i.spotShadowMap[M]=B,y++}M++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(D).multiplyScalar(X),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const H=L.shadow,F=n.get(L);F.shadowIntensity=H.intensity,F.shadowBias=H.bias,F.shadowNormalBias=H.normalBias,F.shadowRadius=H.radius,F.shadowMapSize=H.mapSize,F.shadowCameraNear=H.camera.near,F.shadowCameraFar=H.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=L.shadow.matrix,S++}i.point[g]=j,g++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(X),j.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[u]=j,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==M||x.rectAreaLength!==m||x.hemiLength!==u||x.numDirectionalShadows!==v||x.numPointShadows!==S||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,x.directionalLength=p,x.pointLength=g,x.spotLength=M,x.rectAreaLength=m,x.hemiLength=u,x.numDirectionalShadows=v,x.numPointShadows=S,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=C,i.version=yw++)}function l(c,d){let h=0,f=0,p=0,g=0,M=0;const m=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const S=c[u];if(S.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(S.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Pm(t){const e=new Mw(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function d(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ew(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Pm(t),e.set(r,[o])):s>=a.length?(o=new Pm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ww=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Aw=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Cw=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Lm=new St,aa=new k,pu=new k;function Rw(t,e,n){let i=new y_;const r=new je,s=new je,a=new yt,o=new HS,l=new GS,c={},d=n.maxTextureSize,h={[ur]:pn,[pn]:ur,[Xn]:Xn},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Tw,fragmentShader:ww}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let u=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ay&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qo);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Ci),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const X=u!==this.type;X&&C.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(B=>B.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,B=T.length;Z<B;Z++){const j=T[Z],H=j.shadow;if(H===void 0){Pe("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const F=H.getFrameExtents();r.multiply(F),s.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/F.x),r.x=s.x*F.x,H.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/F.y),r.y=s.y*F.y,H.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=$,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===fa){if(j.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new fi(r.x,r.y,{format:Br,type:Di,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new ks(r.x,r.y,ai),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=Ii,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ht,H.map.depthTexture.magFilter=Ht}else j.isPointLight?(H.map=new R_(r.x),H.map.depthTexture=new LS(r.x,hi)):(H.map=new fi(r.x,r.y),H.map.depthTexture=new ks(r.x,r.y,hi)),H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=Ii,this.type===Qo?(H.map.depthTexture.compareFunction=$?sh:rh,H.map.depthTexture.minFilter=Zt,H.map.depthTexture.magFilter=Zt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ht,H.map.depthTexture.magFilter=Ht);H.camera.updateProjectionMatrix()}const J=H.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<J;ne++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(H.map),t.clear());const ae=H.getViewport(ne);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),D.viewport(a)}if(j.isPointLight){const ae=H.camera,Oe=H.matrix,We=j.distance||ae.far;We!==ae.far&&(ae.far=We,ae.updateProjectionMatrix()),aa.setFromMatrixPosition(j.matrixWorld),ae.position.copy(aa),pu.copy(ae.position),pu.add(Aw[ne]),ae.up.copy(Cw[ne]),ae.lookAt(pu),ae.updateMatrixWorld(),Oe.makeTranslation(-aa.x,-aa.y,-aa.z),Lm.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Lm,ae.coordinateSystem,ae.reversedDepth)}else H.updateMatrices(j);i=H.getFrustum(),y(C,x,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===fa&&v(H,x),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(A,b,L)};function v(T,C){const x=e.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fi(r.x,r.y,{format:Br,type:Di})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,x,f,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,x,p,M,null)}function S(T,C,x,A){let b=null;const L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=b.uuid,X=C.uuid;let Z=c[D];Z===void 0&&(Z={},c[D]=Z);let B=Z[X];B===void 0&&(B=b.clone(),Z[X]=B,C.addEventListener("dispose",w)),b=B}if(b.visible=C.visible,b.wireframe=C.wireframe,A===fa?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,x.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=t.properties.get(b);D.light=x}return b}function y(T,C,x,A,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===fa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const X=e.update(T),Z=T.material;if(Array.isArray(Z)){const B=X.groups;for(let j=0,H=B.length;j<H;j++){const F=B[j],$=Z[F.materialIndex];if($&&$.visible){const J=S(T,$,A,b);T.onBeforeShadow(t,T,C,x,X,J,F),t.renderBufferDirect(x,null,X,J,T,F),T.onAfterShadow(t,T,C,x,X,J,F)}}}else if(Z.visible){const B=S(T,Z,A,b);T.onBeforeShadow(t,T,C,x,X,B,null),t.renderBufferDirect(x,null,X,B,T,null),T.onAfterShadow(t,T,C,x,X,B,null)}}const D=T.children;for(let X=0,Z=D.length;X<Z;X++)y(D[X],C,x,A,b)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const A=c[x],b=T.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function bw(t,e){function n(){let N=!1;const le=new yt;let Q=null;const de=new yt(0,0,0,0);return{setMask:function(_e){Q!==_e&&!N&&(t.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){N=_e},setClear:function(_e,te,Ee,Se,_t){_t===!0&&(_e*=Se,te*=Se,Ee*=Se),le.set(_e,te,Ee,Se),de.equals(le)===!1&&(t.clearColor(_e,te,Ee,Se),de.copy(le))},reset:function(){N=!1,Q=null,de.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,Q=null,de=null,_e=null;return{setReversed:function(te){if(le!==te){const Ee=e.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),le=te;const Se=_e;_e=null,this.setClear(Se)}},getReversed:function(){return le},setTest:function(te){te?re(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(te){Q!==te&&!N&&(t.depthMask(te),Q=te)},setFunc:function(te){if(le&&(te=sS[te]),de!==te){switch(te){case hf:t.depthFunc(t.NEVER);break;case pf:t.depthFunc(t.ALWAYS);break;case mf:t.depthFunc(t.LESS);break;case Fs:t.depthFunc(t.LEQUAL);break;case gf:t.depthFunc(t.EQUAL);break;case _f:t.depthFunc(t.GEQUAL);break;case vf:t.depthFunc(t.GREATER);break;case xf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=te}},setLocked:function(te){N=te},setClear:function(te){_e!==te&&(_e=te,le&&(te=1-te),t.clearDepth(te))},reset:function(){N=!1,Q=null,de=null,_e=null,le=!1}}}function r(){let N=!1,le=null,Q=null,de=null,_e=null,te=null,Ee=null,Se=null,_t=null;return{setTest:function(ot){N||(ot?re(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(ot){le!==ot&&!N&&(t.stencilMask(ot),le=ot)},setFunc:function(ot,Zn,Qn){(Q!==ot||de!==Zn||_e!==Qn)&&(t.stencilFunc(ot,Zn,Qn),Q=ot,de=Zn,_e=Qn)},setOp:function(ot,Zn,Qn){(te!==ot||Ee!==Zn||Se!==Qn)&&(t.stencilOp(ot,Zn,Qn),te=ot,Ee=Zn,Se=Qn)},setLocked:function(ot){N=ot},setClear:function(ot){_t!==ot&&(t.clearStencil(ot),_t=ot)},reset:function(){N=!1,le=null,Q=null,de=null,_e=null,te=null,Ee=null,Se=null,_t=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f={},p=new WeakMap,g=[],M=null,m=!1,u=null,v=null,S=null,y=null,w=null,T=null,C=null,x=new Qe(0,0,0),A=0,b=!1,L=null,D=null,X=null,Z=null,B=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec($)[1]),H=F>=1):$.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=F>=2);let J=null,ne={};const ae=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),We=new yt().fromArray(ae),He=new yt().fromArray(Oe);function K(N,le,Q,de){const _e=new Uint8Array(4),te=t.createTexture();t.bindTexture(N,te),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<Q;Ee++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(le+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return te}const oe={};oe[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(Fs),At(!1),Pt(Np),re(t.CULL_FACE),Ze(Ci);function re(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function Le(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function De(N,le){return f[N]!==le?(t.bindFramebuffer(N,le),f[N]=le,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=le),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Re(N,le){let Q=g,de=!1;if(N){Q=p.get(le),Q===void 0&&(Q=[],p.set(le,Q));const _e=N.textures;if(Q.length!==_e.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Ee=_e.length;te<Ee;te++)Q[te]=t.COLOR_ATTACHMENT0+te;Q.length=_e.length,de=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,de=!0);de&&t.drawBuffers(Q)}function Mt(N){return M!==N?(t.useProgram(N),M=N,!0):!1}const Ve={[Mr]:t.FUNC_ADD,[Ry]:t.FUNC_SUBTRACT,[by]:t.FUNC_REVERSE_SUBTRACT};Ve[Py]=t.MIN,Ve[Ly]=t.MAX;const rt={[Ny]:t.ZERO,[Dy]:t.ONE,[Iy]:t.SRC_COLOR,[ff]:t.SRC_ALPHA,[zy]:t.SRC_ALPHA_SATURATE,[ky]:t.DST_COLOR,[Fy]:t.DST_ALPHA,[Uy]:t.ONE_MINUS_SRC_COLOR,[df]:t.ONE_MINUS_SRC_ALPHA,[By]:t.ONE_MINUS_DST_COLOR,[Oy]:t.ONE_MINUS_DST_ALPHA,[Vy]:t.CONSTANT_COLOR,[Hy]:t.ONE_MINUS_CONSTANT_COLOR,[Gy]:t.CONSTANT_ALPHA,[Wy]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(N,le,Q,de,_e,te,Ee,Se,_t,ot){if(N===Ci){m===!0&&(Le(t.BLEND),m=!1);return}if(m===!1&&(re(t.BLEND),m=!0),N!==Cy){if(N!==u||ot!==b){if((v!==Mr||w!==Mr)&&(t.blendEquation(t.FUNC_ADD),v=Mr,w=Mr),ot)switch(N){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.ONE,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ye("WebGLState: Invalid blending: ",N);break}else switch(N){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ip:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Up:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",N);break}S=null,y=null,T=null,C=null,x.set(0,0,0),A=0,u=N,b=ot}return}_e=_e||le,te=te||Q,Ee=Ee||de,(le!==v||_e!==w)&&(t.blendEquationSeparate(Ve[le],Ve[_e]),v=le,w=_e),(Q!==S||de!==y||te!==T||Ee!==C)&&(t.blendFuncSeparate(rt[Q],rt[de],rt[te],rt[Ee]),S=Q,y=de,T=te,C=Ee),(Se.equals(x)===!1||_t!==A)&&(t.blendColor(Se.r,Se.g,Se.b,_t),x.copy(Se),A=_t),u=N,b=!1}function Xe(N,le){N.side===Xn?Le(t.CULL_FACE):re(t.CULL_FACE);let Q=N.side===pn;le&&(Q=!Q),At(Q),N.blending===As&&N.transparent===!1?Ze(Ci):Ze(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const de=N.stencilWrite;o.setTest(de),de&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function At(N){L!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),L=N)}function Pt(N){N!==Ty?(re(t.CULL_FACE),N!==D&&(N===Np?t.cullFace(t.BACK):N===wy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),D=N}function Ut(N){N!==X&&(H&&t.lineWidth(N),X=N)}function Bt(N,le,Q){N?(re(t.POLYGON_OFFSET_FILL),(Z!==le||B!==Q)&&(Z=le,B=Q,a.getReversed()&&(le=-le),t.polygonOffset(le,Q))):Le(t.POLYGON_OFFSET_FILL)}function gt(N){N?re(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function Ct(N){N===void 0&&(N=t.TEXTURE0+j-1),J!==N&&(t.activeTexture(N),J=N)}function I(N,le,Q){Q===void 0&&(J===null?Q=t.TEXTURE0+j-1:Q=J);let de=ne[Q];de===void 0&&(de={type:void 0,texture:void 0},ne[Q]=de),(de.type!==N||de.texture!==le)&&(J!==Q&&(t.activeTexture(Q),J=Q),t.bindTexture(N,le||oe[N]),de.type=N,de.texture=le)}function on(){const N=ne[J];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Je(){try{t.compressedTexImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function _(){try{t.texSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function O(){try{t.texSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Y(){try{t.compressedTexSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function se(){try{t.texStorage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ce(){try{t.texStorage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function q(){try{t.texImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ee(){try{t.texImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ue(N){return h[N]!==void 0?h[N]:t.getParameter(N)}function Te(N,le){h[N]!==le&&(t.pixelStorei(N,le),h[N]=le)}function he(N){We.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),We.copy(N))}function fe(N){He.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Ce(N,le){let Q=c.get(le);Q===void 0&&(Q=new WeakMap,c.set(le,Q));let de=Q.get(N);de===void 0&&(de=t.getUniformBlockIndex(le,N.name),Q.set(N,de))}function be(N,le){const de=c.get(le).get(N);l.get(le)!==de&&(t.uniformBlockBinding(le,de,N.__bindingPointIndex),l.set(le,de))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},J=null,ne={},f={},p=new WeakMap,g=[],M=null,m=!1,u=null,v=null,S=null,y=null,w=null,T=null,C=null,x=new Qe(0,0,0),A=0,b=!1,L=null,D=null,X=null,Z=null,B=null,We.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Le,bindFramebuffer:De,drawBuffers:Re,useProgram:Mt,setBlending:Ze,setMaterial:Xe,setFlipSided:At,setCullFace:Pt,setLineWidth:Ut,setPolygonOffset:Bt,setScissorTest:gt,activeTexture:Ct,bindTexture:I,unbindTexture:on,compressedTexImage2D:Je,compressedTexImage3D:R,texImage2D:q,texImage3D:ee,pixelStorei:Te,getParameter:ue,updateUBOMapping:Ce,uniformBlockBinding:be,texStorage2D:se,texStorage3D:ce,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:he,viewport:fe,reset:Ie}}function Pw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap,h=new Set;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,_){return g?new OffscreenCanvas(R,_):Dl("canvas")}function m(R,_,O){let G=1;const Y=Je(R);if((Y.width>O||Y.height>O)&&(G=O/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(G*Y.width),ce=Math.floor(G*Y.height);f===void 0&&(f=M(se,ce));const q=_?M(se,ce):f;return q.width=se,q.height=ce,q.getContext("2d").drawImage(R,0,0,se,ce),Pe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+se+"x"+ce+")."),q}else return"data"in R&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function u(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,_,O,G,Y,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;G&&(ce=e.get("EXT_texture_norm16"),ce||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=_;if(_===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8),O===t.UNSIGNED_SHORT&&ce&&(q=ce.R16_EXT),O===t.SHORT&&ce&&(q=ce.R16_SNORM_EXT)),_===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),_===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8),O===t.UNSIGNED_SHORT&&ce&&(q=ce.RG16_EXT),O===t.SHORT&&ce&&(q=ce.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),_===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),_===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),_===t.RGB&&(O===t.UNSIGNED_SHORT&&ce&&(q=ce.RGB16_EXT),O===t.SHORT&&ce&&(q=ce.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),_===t.RGBA){const ee=se?Ll:Ge.getTransfer(Y);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=ee===et?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ce&&(q=ce.RGBA16_EXT),O===t.SHORT&&ce&&(q=ce.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function w(R,_){let O;return R?_===null||_===hi||_===za?O=t.DEPTH24_STENCIL8:_===ai?O=t.DEPTH32F_STENCIL8:_===Ba&&(O=t.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hi||_===za?O=t.DEPTH_COMPONENT24:_===ai?O=t.DEPTH_COMPONENT32F:_===Ba&&(O=t.DEPTH_COMPONENT16),O}function T(R,_){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Zt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function C(R){const _=R.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&h.delete(_)}function x(R){const _=R.target;_.removeEventListener("dispose",x),L(_)}function A(R){const _=i.get(R);if(_.__webglInit===void 0)return;const O=R.source,G=p.get(O);if(G){const Y=G[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&b(R),Object.keys(G).length===0&&p.delete(O)}i.remove(R)}function b(R){const _=i.get(R);t.deleteTexture(_.__webglTexture);const O=R.source,G=p.get(O);delete G[_.__cacheKey],a.memory.textures--}function L(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let Y=0;Y<_.__webglFramebuffer[G].length;Y++)t.deleteFramebuffer(_.__webglFramebuffer[G][Y]);else t.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)t.deleteFramebuffer(_.__webglFramebuffer[G]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=R.textures;for(let G=0,Y=O.length;G<Y;G++){const se=i.get(O[G]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(O[G])}i.remove(R)}let D=0;function X(){D=0}function Z(){return D}function B(R){D=R}function j(){const R=D;return R>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function H(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function F(R,_){const O=i.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const G=R.image;if(G===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(O,R,_);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+_)}function $(R,_){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Le(O,R,_);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+_)}function J(R,_){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Le(O,R,_);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+_)}function ne(R,_){const O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){De(O,R,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+_)}const ae={[yf]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Sf]:t.MIRRORED_REPEAT},Oe={[Ht]:t.NEAREST,[Yy]:t.NEAREST_MIPMAP_NEAREST,[go]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Fc]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},We={[Ky]:t.NEVER,[tS]:t.ALWAYS,[Zy]:t.LESS,[rh]:t.LEQUAL,[Qy]:t.EQUAL,[sh]:t.GEQUAL,[Jy]:t.GREATER,[eS]:t.NOTEQUAL};function He(R,_){if(_.type===ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Zt||_.magFilter===Fc||_.magFilter===go||_.magFilter===Rr||_.minFilter===Zt||_.minFilter===Fc||_.minFilter===go||_.minFilter===Rr)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ae[_.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ae[_.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ae[_.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Oe[_.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Oe[_.minFilter]),_.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,We[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ht||_.minFilter!==go&&_.minFilter!==Rr||_.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function K(R,_){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",C));const G=_.source;let Y=p.get(G);Y===void 0&&(Y={},p.set(G,Y));const se=H(_);if(se!==R.__cacheKey){Y[se]===void 0&&(Y[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Y[se].usedTimes++;const ce=Y[R.__cacheKey];ce!==void 0&&(Y[R.__cacheKey].usedTimes--,ce.usedTimes===0&&b(_)),R.__cacheKey=se,R.__webglTexture=Y[se].texture}return O}function oe(R,_,O){return Math.floor(Math.floor(R/O)/_)}function re(R,_,O,G){const se=R.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,O,G,_.data);else{se.sort((Te,he)=>Te.start-he.start);let ce=0;for(let Te=1;Te<se.length;Te++){const he=se[ce],fe=se[Te],Ce=he.start+he.count,be=oe(fe.start,_.width,4),Ie=oe(he.start,_.width,4);fe.start<=Ce+1&&be===Ie&&oe(fe.start+fe.count-1,_.width,4)===be?he.count=Math.max(he.count,fe.start+fe.count-he.start):(++ce,se[ce]=fe)}se.length=ce+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Te=0,he=se.length;Te<he;Te++){const fe=se[Te],Ce=Math.floor(fe.start/4),be=Math.ceil(fe.count/4),Ie=Ce%_.width,N=Math.floor(Ce/_.width),le=be,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Ie,N,le,Q,O,G,_.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function Le(R,_,O){let G=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=t.TEXTURE_3D);const Y=K(R,_),se=_.source;n.bindTexture(G,R.__webglTexture,t.TEXTURE0+O);const ce=i.get(se);if(se.version!==ce.__version||Y===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=Ge.getPrimaries(Ge.workingColorSpace),de=_.colorSpace===Ki?null:Ge.getPrimaries(_.colorSpace),_e=_.colorSpace===Ki||Q===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=m(_.image,!1,r.maxTextureSize);ee=on(_,ee);const ue=s.convert(_.format,_.colorSpace),Te=s.convert(_.type);let he=y(_.internalFormat,ue,Te,_.normalized,_.colorSpace,_.isVideoTexture);He(G,_);let fe;const Ce=_.mipmaps,be=_.isVideoTexture!==!0,Ie=ce.__version===void 0||Y===!0,N=se.dataReady,le=T(_,ee);if(_.isDepthTexture)he=w(_.format===br,_.type),Ie&&(be?n.texStorage2D(t.TEXTURE_2D,1,he,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,he,ee.width,ee.height,0,ue,Te,null));else if(_.isDataTexture)if(Ce.length>0){be&&Ie&&n.texStorage2D(t.TEXTURE_2D,le,he,Ce[0].width,Ce[0].height);for(let Q=0,de=Ce.length;Q<de;Q++)fe=Ce[Q],be?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,ue,Te,fe.data):n.texImage2D(t.TEXTURE_2D,Q,he,fe.width,fe.height,0,ue,Te,fe.data);_.generateMipmaps=!1}else be?(Ie&&n.texStorage2D(t.TEXTURE_2D,le,he,ee.width,ee.height),N&&re(_,ee,ue,Te)):n.texImage2D(t.TEXTURE_2D,0,he,ee.width,ee.height,0,ue,Te,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){be&&Ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,Ce[0].width,Ce[0].height,ee.depth);for(let Q=0,de=Ce.length;Q<de;Q++)if(fe=Ce[Q],_.format!==Yn)if(ue!==null)if(be){if(N)if(_.layerUpdates.size>0){const _e=lm(fe.width,fe.height,_.format,_.type);for(const te of _.layerUpdates){const Ee=fe.data.subarray(te*_e/fe.data.BYTES_PER_ELEMENT,(te+1)*_e/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,te,fe.width,fe.height,1,ue,Ee)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,ee.depth,ue,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,he,fe.width,fe.height,ee.depth,0,fe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,ee.depth,ue,Te,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,he,fe.width,fe.height,ee.depth,0,ue,Te,fe.data)}else{be&&Ie&&n.texStorage2D(t.TEXTURE_2D,le,he,Ce[0].width,Ce[0].height);for(let Q=0,de=Ce.length;Q<de;Q++)fe=Ce[Q],_.format!==Yn?ue!==null?be?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,ue,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,he,fe.width,fe.height,0,fe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,ue,Te,fe.data):n.texImage2D(t.TEXTURE_2D,Q,he,fe.width,fe.height,0,ue,Te,fe.data)}else if(_.isDataArrayTexture)if(be){if(Ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,ee.width,ee.height,ee.depth),N)if(_.layerUpdates.size>0){const Q=lm(ee.width,ee.height,_.format,_.type);for(const de of _.layerUpdates){const _e=ee.data.subarray(de*Q/ee.data.BYTES_PER_ELEMENT,(de+1)*Q/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,ee.width,ee.height,1,ue,Te,_e)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Te,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,ue,Te,ee.data);else if(_.isData3DTexture)be?(Ie&&n.texStorage3D(t.TEXTURE_3D,le,he,ee.width,ee.height,ee.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Te,ee.data)):n.texImage3D(t.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,ue,Te,ee.data);else if(_.isFramebufferTexture){if(Ie)if(be)n.texStorage2D(t.TEXTURE_2D,le,he,ee.width,ee.height);else{let Q=ee.width,de=ee.height;for(let _e=0;_e<le;_e++)n.texImage2D(t.TEXTURE_2D,_e,he,Q,de,0,ue,Te,null),Q>>=1,de>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),h.add(_),Q.onpaint=de=>{const _e=de.changedElements;for(const te of h)_e.includes(te.image)&&(te.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const _e=t.RGBA,te=t.RGBA,Ee=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,te,Ee,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(be&&Ie){const Q=Je(Ce[0]);n.texStorage2D(t.TEXTURE_2D,le,he,Q.width,Q.height)}for(let Q=0,de=Ce.length;Q<de;Q++)fe=Ce[Q],be?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ue,Te,fe):n.texImage2D(t.TEXTURE_2D,Q,he,ue,Te,fe);_.generateMipmaps=!1}else if(be){if(Ie){const Q=Je(ee);n.texStorage2D(t.TEXTURE_2D,le,he,Q.width,Q.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Te,ee)}else n.texImage2D(t.TEXTURE_2D,0,he,ue,Te,ee);u(_)&&v(G),ce.__version=se.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function De(R,_,O){if(_.image.length!==6)return;const G=K(R,_),Y=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const se=i.get(Y);if(Y.version!==se.__version||G===!0){n.activeTexture(t.TEXTURE0+O);const ce=Ge.getPrimaries(Ge.workingColorSpace),q=_.colorSpace===Ki?null:Ge.getPrimaries(_.colorSpace),ee=_.colorSpace===Ki||ce===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!ue&&!Te?he[te]=m(_.image[te],!0,r.maxCubemapSize):he[te]=Te?_.image[te].image:_.image[te],he[te]=on(_,he[te]);const fe=he[0],Ce=s.convert(_.format,_.colorSpace),be=s.convert(_.type),Ie=y(_.internalFormat,Ce,be,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,le=se.__version===void 0||G===!0,Q=Y.dataReady;let de=T(_,fe);He(t.TEXTURE_CUBE_MAP,_);let _e;if(ue){N&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ie,fe.width,fe.height);for(let te=0;te<6;te++){_e=he[te].mipmaps;for(let Ee=0;Ee<_e.length;Ee++){const Se=_e[Ee];_.format!==Yn?Ce!==null?N?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Se.width,Se.height,Ce,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Ie,Se.width,Se.height,0,Se.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Se.width,Se.height,Ce,be,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Ie,Se.width,Se.height,0,Ce,be,Se.data)}}}else{if(_e=_.mipmaps,N&&le){_e.length>0&&de++;const te=Je(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ie,te.width,te.height)}for(let te=0;te<6;te++)if(Te){N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Ce,be,he[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,he[te].width,he[te].height,0,Ce,be,he[te].data);for(let Ee=0;Ee<_e.length;Ee++){const _t=_e[Ee].image[te].image;N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,_t.width,_t.height,Ce,be,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Ie,_t.width,_t.height,0,Ce,be,_t.data)}}else{N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,be,he[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,Ce,be,he[te]);for(let Ee=0;Ee<_e.length;Ee++){const Se=_e[Ee];N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Ce,be,Se.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Ie,Ce,be,Se.image[te])}}}u(_)&&v(t.TEXTURE_CUBE_MAP),se.__version=Y.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Re(R,_,O,G,Y,se){const ce=s.convert(O.format,O.colorSpace),q=s.convert(O.type),ee=y(O.internalFormat,ce,q,O.normalized,O.colorSpace),ue=i.get(_),Te=i.get(O);if(Te.__renderTarget=_,!ue.__hasExternalTextures){const he=Math.max(1,_.width>>se),fe=Math.max(1,_.height>>se);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?n.texImage3D(Y,se,ee,he,fe,_.depth,0,ce,q,null):n.texImage2D(Y,se,ee,he,fe,0,ce,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,Y,Te.__webglTexture,0,gt(_)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,Y,Te.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Mt(R,_,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),_.depthBuffer){const G=_.depthTexture,Y=G&&G.isDepthTexture?G.type:null,se=w(_.stencilBuffer,Y),ce=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(_),se,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(_),se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,R)}else{const G=_.textures;for(let Y=0;Y<G.length;Y++){const se=G[Y],ce=s.convert(se.format,se.colorSpace),q=s.convert(se.type),ee=y(se.internalFormat,ce,q,se.normalized,se.colorSpace);Ct(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(_),ee,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(_),ee,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ee,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ve(R,_,O){const G=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),He(t.TEXTURE_CUBE_MAP,_.depthTexture);const ue=s.convert(_.depthTexture.format),Te=s.convert(_.depthTexture.type);let he;_.depthTexture.format===Ii?he=t.DEPTH_COMPONENT24:_.depthTexture.format===br&&(he=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,he,_.width,_.height,0,ue,Te,null)}}else F(_.depthTexture,0);const se=Y.__webglTexture,ce=gt(_),q=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,ee=_.depthTexture.format===br?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ii)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,q,se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ee,q,se,0);else if(_.depthTexture.format===br)Ct(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,q,se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,ee,q,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(R){const _=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=G}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)Ve(_.__webglFramebuffer[G],R,G);else{const G=R.texture.mipmaps;G&&G.length>0?Ve(_.__webglFramebuffer[0],R,0):Ve(_.__webglFramebuffer,R,0)}else if(O){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=t.createRenderbuffer(),Mt(_.__webglDepthbuffer[G],R,!1);else{const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,se)}}else{const G=R.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Mt(_.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(R,_,O){const G=i.get(R);_!==void 0&&Re(G.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&rt(R)}function Xe(R){const _=R.texture,O=i.get(R),G=i.get(_);R.addEventListener("dispose",x);const Y=R.textures,se=R.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=_.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let ee=0;ee<_.mipmaps.length;ee++)O.__webglFramebuffer[q][ee]=t.createFramebuffer()}else O.__webglFramebuffer[q]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)O.__webglFramebuffer[q]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ce)for(let q=0,ee=Y.length;q<ee;q++){const ue=i.get(Y[q]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ct(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<Y.length;q++){const ee=Y[q];O.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[q]);const ue=s.convert(ee.format,ee.colorSpace),Te=s.convert(ee.type),he=y(ee.internalFormat,ue,Te,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),fe=gt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,O.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Mt(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),He(t.TEXTURE_CUBE_MAP,_);for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Re(O.__webglFramebuffer[q][ee],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee);else Re(O.__webglFramebuffer[q],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);u(_)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let q=0,ee=Y.length;q<ee;q++){const ue=Y[q],Te=i.get(ue);let he=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Te.__webglTexture),He(he,ue),Re(O.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+q,he,0),u(ue)&&v(he)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,G.__webglTexture),He(q,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Re(O.__webglFramebuffer[ee],R,_,t.COLOR_ATTACHMENT0,q,ee);else Re(O.__webglFramebuffer,R,_,t.COLOR_ATTACHMENT0,q,0);u(_)&&v(q),n.unbindTexture()}R.depthBuffer&&rt(R)}function At(R){const _=R.textures;for(let O=0,G=_.length;O<G;O++){const Y=_[O];if(u(Y)){const se=S(R),ce=i.get(Y).__webglTexture;n.bindTexture(se,ce),v(se),n.unbindTexture()}}}const Pt=[],Ut=[];function Bt(R){if(R.samples>0){if(Ct(R)===!1){const _=R.textures,O=R.width,G=R.height;let Y=t.COLOR_BUFFER_BIT;const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(R),q=_.length>1;if(q)for(let ue=0;ue<_.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Te=i.get(_[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,O,G,0,0,O,G,Y,t.NEAREST),l===!0&&(Pt.length=0,Ut.length=0,Pt.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pt.push(se),Ut.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let ue=0;ue<_.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Te=i.get(_[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function gt(R){return Math.min(r.maxSamples,R.samples)}function Ct(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(R){const _=a.render.frame;d.get(R)!==_&&(d.set(R,_),R.update())}function on(R,_){const O=R.colorSpace,G=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Pl&&O!==Ki&&(Ge.getTransfer(O)===et?(G!==Yn||Y!==Nn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",O)),_}function Je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.getTextureUnits=Z,this.setTextureUnits=B,this.setTexture2D=F,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=ne,this.rebindTextures=Ze,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Lw(t,e){function n(i,r=Ki){let s;const a=Ge.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===Jd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===eh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===l_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===c_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===a_)return t.BYTE;if(i===o_)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===Qd)return t.INT;if(i===hi)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Di)return t.HALF_FLOAT;if(i===u_)return t.ALPHA;if(i===f_)return t.RGB;if(i===Yn)return t.RGBA;if(i===Ii)return t.DEPTH_COMPONENT;if(i===br)return t.DEPTH_STENCIL;if(i===d_)return t.RED;if(i===th)return t.RED_INTEGER;if(i===Br)return t.RG;if(i===nh)return t.RG_INTEGER;if(i===ih)return t.RGBA_INTEGER;if(i===Jo||i===el||i===tl||i===nl)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mf||i===Ef||i===Tf||i===wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Af||i===Cf||i===Rf||i===bf||i===Pf||i===Rl||i===Lf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Af||i===Cf)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bf)return s.COMPRESSED_R11_EAC;if(i===Pf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Rl)return s.COMPRESSED_RG11_EAC;if(i===Lf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nf||i===Df||i===If||i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===Wf||i===Xf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Df)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===If)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ff)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Of)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$f||i===Yf||i===qf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$f)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jf||i===Kf||i===bl||i===Zf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===za?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new M_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new pi({vertexShader:Nw,fragmentShader:Dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vt(new ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uw extends Gr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Iw,u={},v=n.getContextAttributes();let S=null,y=null;const w=[],T=[],C=new je;let x=null;const A=new Ln;A.viewport=new yt;const b=new Ln;b.viewport=new yt;const L=[A,b],D=new XS;let X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=w[K];return oe===void 0&&(oe=new Wc,w[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=w[K];return oe===void 0&&(oe=new Wc,w[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=w[K];return oe===void 0&&(oe=new Wc,w[K]=oe),oe.getHandSpace()};function B(K){const oe=T.indexOf(K.inputSource);if(oe===-1)return;const re=w[oe];re!==void 0&&(re.update(K.inputSource,K.frame,c||a),re.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",H);for(let K=0;K<w.length;K++){const oe=T[K];oe!==null&&(T[K]=null,w[K].disconnect(oe))}X=null,Z=null,m.reset();for(const K in u)delete u[K];e.setRenderTarget(S),p=null,f=null,h=null,r=null,y=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",j),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Le=null,De=null;v.depth&&(De=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=v.stencil?br:Ii,Le=v.stencil?za:hi);const Re={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new fi(f.textureWidth,f.textureHeight,{format:Yn,type:Nn,depthTexture:new ks(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fi(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(K){for(let oe=0;oe<K.removed.length;oe++){const re=K.removed[oe],Le=T.indexOf(re);Le>=0&&(T[Le]=null,w[Le].disconnect(re))}for(let oe=0;oe<K.added.length;oe++){const re=K.added[oe];let Le=T.indexOf(re);if(Le===-1){for(let Re=0;Re<w.length;Re++)if(Re>=T.length){T.push(re),Le=Re;break}else if(T[Re]===null){T[Re]=re,Le=Re;break}if(Le===-1)break}const De=w[Le];De&&De.connect(re)}}const F=new k,$=new k;function J(K,oe,re){F.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(re.matrixWorld);const Le=F.distanceTo($),De=oe.projectionMatrix.elements,Re=re.projectionMatrix.elements,Mt=De[14]/(De[10]-1),Ve=De[14]/(De[10]+1),rt=(De[9]+1)/De[5],Ze=(De[9]-1)/De[5],Xe=(De[8]-1)/De[0],At=(Re[8]+1)/Re[0],Pt=Mt*Xe,Ut=Mt*At,Bt=Le/(-Xe+At),gt=Bt*-Xe;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(gt),K.translateZ(Bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),De[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ct=Mt+Bt,I=Ve+Bt,on=Pt-gt,Je=Ut+(Le-gt),R=rt*Ve/I*Ct,_=Ze*Ve/I*Ct;K.projectionMatrix.makePerspective(on,Je,R,_,Ct,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ne(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let oe=K.near,re=K.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(re=m.depthFar)),D.near=b.near=A.near=oe,D.far=b.far=A.far=re,(X!==D.near||Z!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,Z=D.far),D.layers.mask=K.layers.mask|6,A.layers.mask=D.layers.mask&-5,b.layers.mask=D.layers.mask&-3;const Le=K.parent,De=D.cameras;ne(D,Le);for(let Re=0;Re<De.length;Re++)ne(De[Re],Le);De.length===2?J(D,A,b):D.projectionMatrix.copy(A.projectionMatrix),ae(K,D,Le)};function ae(K,oe,re){re===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(re.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Qf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return u[K]};let Oe=null;function We(K,oe){if(d=oe.getViewerPose(c||a),g=oe,d!==null){const re=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Le=!1;re.length!==D.cameras.length&&(D.cameras.length=0,Le=!0);for(let Ve=0;Ve<re.length;Ve++){const rt=re[Ve];let Ze=null;if(p!==null)Ze=p.getViewport(rt);else{const At=h.getViewSubImage(f,rt);Ze=At.viewport,Ve===0&&(e.setRenderTargetTextures(y,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(y))}let Xe=L[Ve];Xe===void 0&&(Xe=new Ln,Xe.layers.enable(Ve),Xe.viewport=new yt,L[Ve]=Xe),Xe.matrix.fromArray(rt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(rt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ve===0&&(D.matrix.copy(Xe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Le===!0&&D.cameras.push(Xe)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Ve=h.getDepthInformation(re[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,r.renderState)}if(De&&De.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let Ve=0;Ve<re.length;Ve++){const rt=re[Ve].camera;if(rt){let Ze=u[rt];Ze||(Ze=new M_,u[rt]=Ze);const Xe=h.getCameraImage(rt);Ze.sourceTexture=Xe}}}}for(let re=0;re<w.length;re++){const Le=T[re],De=w[re];Le!==null&&De!==void 0&&De.update(Le,oe,c||a)}Oe&&Oe(K,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const He=new A_;He.setAnimationLoop(We),this.setAnimationLoop=function(K){Oe=K},this.dispose=function(){}}}const Fw=new St,D_=new Ne;D_.set(-1,0,0,0,1,0,0,0,1);function Ow(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,E_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,S,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(m,u):u.isMeshLambertMaterial?(s(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),M(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===pn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===pn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),S=v.envMap,y=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Fw.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(D_),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=S*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const T=w.program;i.uniformBlockBinding(y,T)}function c(y,w){let T=r[y.id];T===void 0&&(m(y),T=d(y),r[y.id]=T,y.addEventListener("dispose",v));const C=w.program;i.updateUBOMapping(y,C);const x=e.render.frame;s[y.id]!==x&&(f(y),s[y.id]=x)}function d(y){const w=h();y.__bindingPointIndex=w;const T=t.createBuffer(),C=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const w=r[y.id],T=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let x=0,A=T.length;x<A;x++){const b=T[x];if(Array.isArray(b))for(let L=0,D=b.length;L<D;L++)p(b[L],x,L,C);else p(b,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,w,T,C){if(M(y,w,T,C)===!0){const x=y.__offset,A=y.value;if(Array.isArray(A)){let b=0;for(let L=0;L<A.length;L++){const D=A[L],X=u(D);g(D,y.__data,b),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(b+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function g(y,w,T){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,T)}function M(y,w,T,C){const x=y.value,A=w+"_"+T;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{const b=C[A];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function m(y){const w=y.uniforms;let T=0;const C=16;for(let A=0,b=w.length;A<b;A++){const L=Array.isArray(w[A])?w[A]:[w[A]];for(let D=0,X=L.length;D<X;D++){const Z=L[D],B=Array.isArray(Z.value)?Z.value:[Z.value];for(let j=0,H=B.length;j<H;j++){const F=B[j],$=u(F),J=T%C,ne=J%$.boundary,ae=J+ne;T+=ne,ae!==0&&C-ae<$.storage&&(T+=C-ae),Z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=T,T+=$.storage}}}const x=T%C;return x>0&&(T+=C-x),y.__size=T,y.__cache={},this}function u(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",y),w}function v(y){const w=y.target;w.removeEventListener("dispose",v);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function S(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:S}}const Bw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function zw(){return ni===null&&(ni=new AS(Bw,16,16,Br,Di),ni.name="DFG_LUT",ni.minFilter=Zt,ni.magFilter=Zt,ni.wrapS=wi,ni.wrapT=wi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class Vw{constructor(e={}){const{canvas:n=iS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Nn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const M=p,m=new Set([ih,nh,th]),u=new Set([Nn,hi,Ba,za,Jd,eh]),v=new Uint32Array(4),S=new Int32Array(4),y=new k;let w=null,T=null;const C=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let L=!1,D=null,X=null,Z=null,B=null;this._outputColorSpace=Rn;let j=0,H=0,F=null,$=-1,J=null;const ne=new yt,ae=new yt;let Oe=null;const We=new Qe(0);let He=0,K=n.width,oe=n.height,re=1,Le=null,De=null;const Re=new yt(0,0,K,oe),Mt=new yt(0,0,K,oe);let Ve=!1;const rt=new y_;let Ze=!1,Xe=!1;const At=new St,Pt=new k,Ut=new yt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ct(){return F===null?re:1}let I=i;function on(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zd}`),n.addEventListener("webglcontextlost",_t,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",Zn,!1),I===null){const U="webgl2";if(I=on(U,E),I===null)throw on(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Ye("WebGLRenderer: "+E.message),E}let Je,R,_,O,G,Y,se,ce,q,ee,ue,Te,he,fe,Ce,be,Ie,N,le,Q,de,_e,te;function Ee(){Je=new zE(I),Je.init(),de=new Lw(I,Je),R=new NE(I,Je,e,de),_=new bw(I,Je),R.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),X=I.createFramebuffer(),Z=I.createFramebuffer(),B=I.createFramebuffer(),O=new GE(I),G=new mw,Y=new Pw(I,Je,_,G,R,de,O),se=new BE(b),ce=new YS(I),_e=new PE(I,ce),q=new VE(I,ce,O,_e),ee=new XE(I,q,ce,_e,O),N=new WE(I,R,Y),Ce=new DE(G),ue=new pw(b,se,Je,R,_e,Ce),Te=new Ow(b,G),he=new _w,fe=new Ew(Je),Ie=new bE(b,se,_,ee,g,l),be=new Rw(b,ee,R),te=new kw(I,O,R,_),le=new LE(I,Je,O),Q=new HE(I,Je,O),O.programs=ue.programs,b.capabilities=R,b.extensions=Je,b.properties=G,b.renderLists=he,b.shadowMap=be,b.state=_,b.info=O}Ee(),M!==Nn&&(A=new YE(M,n.width,n.height,o,r,s));const Se=new Uw(b,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(E){E!==void 0&&(re=E,this.setSize(K,oe,!1))},this.getSize=function(E){return E.set(K,oe)},this.setSize=function(E,U,W=!0){if(Se.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,oe=U,n.width=Math.floor(E*re),n.height=Math.floor(U*re),W===!0&&(n.style.width=E+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(K*re,oe*re).floor()},this.setDrawingBufferSize=function(E,U,W){K=E,oe=U,re=W,n.width=Math.floor(E*W),n.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(M===Nn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,U,W,z){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,U,W,z),_.viewport(ne.copy(Re).multiplyScalar(re).round())},this.getScissor=function(E){return E.copy(Mt)},this.setScissor=function(E,U,W,z){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,U,W,z),_.scissor(ae.copy(Mt).multiplyScalar(re).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){_.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){Le=E},this.setTransparentSort=function(E){De=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,W=!0){let z=0;if(E){let V=!1;if(F!==null){const ge=F.texture.format;V=m.has(ge)}if(V){const ge=F.texture.type,xe=u.has(ge),me=Ie.getClearColor(),Me=Ie.getClearAlpha(),we=me.r,Ue=me.g,ke=me.b;xe?(v[0]=we,v[1]=Ue,v[2]=ke,v[3]=Me,I.clearBufferuiv(I.COLOR,0,v)):(S[0]=we,S[1]=Ue,S[2]=ke,S[3]=Me,I.clearBufferiv(I.COLOR,0,S))}else z|=I.COLOR_BUFFER_BIT}U&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){n.removeEventListener("webglcontextlost",_t,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",Zn,!1),Ie.dispose(),he.dispose(),fe.dispose(),G.dispose(),se.dispose(),ee.dispose(),_e.dispose(),te.dispose(),ue.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",mh),Se.removeEventListener("sessionend",gh),pr.stop()};function _t(E){E.preventDefault(),Vp("WebGLRenderer: Context Lost."),L=!0}function ot(){Vp("WebGLRenderer: Context Restored."),L=!1;const E=O.autoReset,U=be.enabled,W=be.autoUpdate,z=be.needsUpdate,V=be.type;Ee(),O.autoReset=E,be.enabled=U,be.autoUpdate=W,be.needsUpdate=z,be.type=V}function Zn(E){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qn(E){const U=E.target;U.removeEventListener("dispose",Qn),V_(U)}function V_(E){H_(E),G.remove(E)}function H_(E){const U=G.get(E).programs;U!==void 0&&(U.forEach(function(W){ue.releaseProgram(W)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,z,V,ge){U===null&&(U=Bt);const xe=V.isMesh&&V.matrixWorld.determinantAffine()<0,me=X_(E,U,W,z,V);_.setMaterial(z,xe);let Me=W.index,we=1;if(z.wireframe===!0){if(Me=q.getWireframeAttribute(W),Me===void 0)return;we=2}const Ue=W.drawRange,ke=W.attributes.position;let Ae=Ue.start*we,nt=(Ue.start+Ue.count)*we;ge!==null&&(Ae=Math.max(Ae,ge.start*we),nt=Math.min(nt,(ge.start+ge.count)*we)),Me!==null?(Ae=Math.max(Ae,0),nt=Math.min(nt,Me.count)):ke!=null&&(Ae=Math.max(Ae,0),nt=Math.min(nt,ke.count));const Et=nt-Ae;if(Et<0||Et===1/0)return;_e.setup(V,z,me,W,Me);let vt,st=le;if(Me!==null&&(vt=ce.get(Me),st=Q,st.setIndex(vt)),V.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*Ct()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(V.isLine){let Xt=z.linewidth;Xt===void 0&&(Xt=1),_.setLineWidth(Xt*Ct()),V.isLineSegments?st.setMode(I.LINES):V.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else V.isPoints?st.setMode(I.POINTS):V.isSprite&&st.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Xt=V._multiDrawStarts,ve=V._multiDrawCounts,gn=V._multiDrawCount,$e=Me?ce.get(Me).bytesPerElement:1,An=G.get(z).currentProgram.getUniforms();for(let Jn=0;Jn<gn;Jn++)An.setValue(I,"_gl_DrawID",Jn),st.render(Xt[Jn]/$e,ve[Jn])}else if(V.isInstancedMesh)st.renderInstances(Ae,Et,V.count);else if(W.isInstancedBufferGeometry){const Xt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ve=Math.min(W.instanceCount,Xt);st.renderInstances(Ae,Et,ve)}else st.render(Ae,Et)};function ph(E,U,W){E.transparent===!0&&E.side===Xn&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,Za(E,U,W),E.side=ur,E.needsUpdate=!0,Za(E,U,W),E.side=Xn):Za(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),T=fe.get(W),T.init(U),x.push(T),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),E!==W&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const z=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let xe=0;xe<ge.length;xe++){const me=ge[xe];ph(me,W,V),z.add(me)}else ph(ge,W,V),z.add(ge)}),T=x.pop(),z},this.compileAsync=function(E,U,W=null){const z=this.compile(E,U,W);return new Promise(V=>{function ge(){if(z.forEach(function(xe){G.get(xe).currentProgram.isReady()&&z.delete(xe)}),z.size===0){V(E);return}setTimeout(ge,10)}Je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ac=null;function G_(E){ac&&ac(E)}function mh(){pr.stop()}function gh(){pr.start()}const pr=new A_;pr.setAnimationLoop(G_),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(E){ac=E,Se.setAnimationLoop(E),E===null?pr.stop():pr.start()},Se.addEventListener("sessionstart",mh),Se.addEventListener("sessionend",gh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(E,U);const W=Se.enabled===!0&&Se.isPresenting===!0,z=A!==null&&(F===null||W)&&A.begin(b,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(U),U=Se.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,U,F),T=fe.get(E,x.length),T.init(U),T.state.textureUnits=Y.getTextureUnits(),x.push(T),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),rt.setFromProjectionMatrix(At,oi,U.reversedDepth),Xe=this.localClippingEnabled,Ze=Ce.init(this.clippingPlanes,Xe),w=he.get(E,C.length),w.init(),C.push(w),Se.enabled===!0&&Se.isPresenting===!0){const xe=b.xr.getDepthSensingMesh();xe!==null&&oc(xe,U,-1/0,b.sortObjects)}oc(E,U,0,b.sortObjects),w.finish(),b.sortObjects===!0&&w.sort(Le,De,U.reversedDepth),gt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,gt&&Ie.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Ce.beginShadows();const V=T.state.shadowsArray;if(be.render(V,E,U),Ze===!0&&Ce.endShadows(),(z&&A.hasRenderPass())===!1){const xe=w.opaque,me=w.transmissive;if(T.setupLights(),U.isArrayCamera){const Me=U.cameras;if(me.length>0)for(let we=0,Ue=Me.length;we<Ue;we++){const ke=Me[we];vh(xe,me,E,ke)}gt&&Ie.render(E);for(let we=0,Ue=Me.length;we<Ue;we++){const ke=Me[we];_h(w,E,ke,ke.viewport)}}else me.length>0&&vh(xe,me,E,U),gt&&Ie.render(E),_h(w,E,U)}F!==null&&H===0&&(Y.updateMultisampleRenderTarget(F),Y.updateRenderTargetMipmap(F)),z&&A.end(b),E.isScene===!0&&E.onAfterRender(b,E,U),_e.resetDefaultState(),$=-1,J=null,x.pop(),x.length>0?(T=x[x.length-1],Y.setTextureUnits(T.state.textureUnits),Ze===!0&&Ce.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,D!==null&&D.renderEnd()};function oc(E,U,W,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||rt.intersectsSprite(E)){z&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(At);const xe=ee.update(E),me=E.material;me.visible&&w.push(E,xe,me,W,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||rt.intersectsObject(E))){const xe=ee.update(E),me=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ut.copy(xe.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(At)),Array.isArray(me)){const Me=xe.groups;for(let we=0,Ue=Me.length;we<Ue;we++){const ke=Me[we],Ae=me[ke.materialIndex];Ae&&Ae.visible&&w.push(E,xe,Ae,W,Ut.z,ke)}}else me.visible&&w.push(E,xe,me,W,Ut.z,null)}}const ge=E.children;for(let xe=0,me=ge.length;xe<me;xe++)oc(ge[xe],U,W,z)}function _h(E,U,W,z){const{opaque:V,transmissive:ge,transparent:xe}=E;T.setupLightsView(W),Ze===!0&&Ce.setGlobalState(b.clippingPlanes,W),z&&_.viewport(ne.copy(z)),V.length>0&&Ka(V,U,W),ge.length>0&&Ka(ge,U,W),xe.length>0&&Ka(xe,U,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function vh(E,U,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Ae=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new fi(1,1,{generateMipmaps:!0,type:Ae?Di:Nn,minFilter:Rr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const ge=T.state.transmissionRenderTarget[z.id],xe=z.viewport||ne;ge.setSize(xe.z*b.transmissionResolutionScale,xe.w*b.transmissionResolutionScale);const me=b.getRenderTarget(),Me=b.getActiveCubeFace(),we=b.getActiveMipmapLevel();b.setRenderTarget(ge),b.getClearColor(We),He=b.getClearAlpha(),He<1&&b.setClearColor(16777215,.5),b.clear(),gt&&Ie.render(W);const Ue=b.toneMapping;b.toneMapping=ui;const ke=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Ze===!0&&Ce.setGlobalState(b.clippingPlanes,z),Ka(E,W,z),Y.updateMultisampleRenderTarget(ge),Y.updateRenderTargetMipmap(ge),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let nt=0,Et=U.length;nt<Et;nt++){const vt=U[nt],{object:st,geometry:Xt,material:ve,group:gn}=vt;if(ve.side===Xn&&st.layers.test(z.layers)){const $e=ve.side;ve.side=pn,ve.needsUpdate=!0,xh(st,W,z,Xt,ve,gn),ve.side=$e,ve.needsUpdate=!0,Ae=!0}}Ae===!0&&(Y.updateMultisampleRenderTarget(ge),Y.updateRenderTargetMipmap(ge))}b.setRenderTarget(me,Me,we),b.setClearColor(We,He),ke!==void 0&&(z.viewport=ke),b.toneMapping=Ue}function Ka(E,U,W){const z=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ge=E.length;V<ge;V++){const xe=E[V],{object:me,geometry:Me,group:we}=xe;let Ue=xe.material;Ue.allowOverride===!0&&z!==null&&(Ue=z),me.layers.test(W.layers)&&xh(me,U,W,Me,Ue,we)}}function xh(E,U,W,z,V,ge){E.onBeforeRender(b,U,W,z,V,ge),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(b,U,W,z,E,ge),V.transparent===!0&&V.side===Xn&&V.forceSinglePass===!1?(V.side=pn,V.needsUpdate=!0,b.renderBufferDirect(W,U,z,V,E,ge),V.side=ur,V.needsUpdate=!0,b.renderBufferDirect(W,U,z,V,E,ge),V.side=Xn):b.renderBufferDirect(W,U,z,V,E,ge),E.onAfterRender(b,U,W,z,V,ge)}function Za(E,U,W){U.isScene!==!0&&(U=Bt);const z=G.get(E),V=T.state.lights,ge=T.state.shadowsArray,xe=V.state.version,me=ue.getParameters(E,V.state,ge,U,W,T.state.lightProbeGridArray),Me=ue.getProgramCacheKey(me);let we=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const Ue=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=se.get(E.envMap||z.environment,Ue),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",Qn),we=new Map,z.programs=we);let ke=we.get(Me);if(ke!==void 0){if(z.currentProgram===ke&&z.lightsStateVersion===xe)return Sh(E,me),ke}else me.uniforms=ue.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,W,me),E.onBeforeCompile(me,b),ke=ue.acquireProgram(me,Me),we.set(Me,ke),z.uniforms=me.uniforms;const Ae=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=Ce.uniform),Sh(E,me),z.needsLights=Y_(E),z.lightsStateVersion=xe,z.needsLights&&(Ae.ambientLightColor.value=V.state.ambient,Ae.lightProbe.value=V.state.probe,Ae.directionalLights.value=V.state.directional,Ae.directionalLightShadows.value=V.state.directionalShadow,Ae.spotLights.value=V.state.spot,Ae.spotLightShadows.value=V.state.spotShadow,Ae.rectAreaLights.value=V.state.rectArea,Ae.ltc_1.value=V.state.rectAreaLTC1,Ae.ltc_2.value=V.state.rectAreaLTC2,Ae.pointLights.value=V.state.point,Ae.pointLightShadows.value=V.state.pointShadow,Ae.hemisphereLights.value=V.state.hemi,Ae.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ae.spotLightMatrix.value=V.state.spotLightMatrix,Ae.spotLightMap.value=V.state.spotLightMap,Ae.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=ke,z.uniformsList=null,ke}function yh(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=il.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Sh(E,U){const W=G.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function W_(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let W=0,z=E.length;W<z;W++){const V=E[W];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function X_(E,U,W,z,V){U.isScene!==!0&&(U=Bt),Y.resetTextureUnits();const ge=U.fog,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,me=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ge.workingColorSpace,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=se.get(z.envMap||xe,Me),Ue=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let vt=ui;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vt=b.toneMapping);const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xt=st!==void 0?st.length:0,ve=G.get(z),gn=T.state.lights;if(Ze===!0&&(Xe===!0||E!==J)){const lt=E===J&&z.id===$;Ce.setState(z,E,lt)}let $e=!1;z.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==gn.state.version||ve.outputColorSpace!==me||V.isBatchedMesh&&ve.batching===!1||!V.isBatchedMesh&&ve.batching===!0||V.isBatchedMesh&&ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ve.instancing===!1||!V.isInstancedMesh&&ve.instancing===!0||V.isSkinnedMesh&&ve.skinning===!1||!V.isSkinnedMesh&&ve.skinning===!0||V.isInstancedMesh&&ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ve.instancingMorph===!1&&V.morphTexture!==null||ve.envMap!==we||z.fog===!0&&ve.fog!==ge||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ce.numPlanes||ve.numIntersection!==Ce.numIntersection)||ve.vertexAlphas!==Ue||ve.vertexTangents!==ke||ve.morphTargets!==Ae||ve.morphNormals!==nt||ve.morphColors!==Et||ve.toneMapping!==vt||ve.morphTargetsCount!==Xt||!!ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,ve.__version=z.version);let An=ve.currentProgram;$e===!0&&(An=Za(z,U,V),D&&z.isNodeMaterial&&D.onUpdateProgram(z,An,ve));let Jn=!1,Fi=!1,Wr=!1;const at=An.getUniforms(),Tt=ve.uniforms;if(_.useProgram(An.program)&&(Jn=!0,Fi=!0,Wr=!0),z.id!==$&&($=z.id,Fi=!0),ve.needsLights){const lt=W_(T.state.lightProbeGridArray,V);ve.lightProbeGrid!==lt&&(ve.lightProbeGrid=lt,Fi=!0)}if(Jn||J!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(I,"projectionMatrix",E.projectionMatrix),at.setValue(I,"viewMatrix",E.matrixWorldInverse);const ki=at.map.cameraPosition;ki!==void 0&&ki.setValue(I,Pt.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),J!==E&&(J=E,Fi=!0,Wr=!0)}if(ve.needsLights&&(gn.state.directionalShadowMap.length>0&&at.setValue(I,"directionalShadowMap",gn.state.directionalShadowMap,Y),gn.state.spotShadowMap.length>0&&at.setValue(I,"spotShadowMap",gn.state.spotShadowMap,Y),gn.state.pointShadowMap.length>0&&at.setValue(I,"pointShadowMap",gn.state.pointShadowMap,Y)),V.isSkinnedMesh){at.setOptional(I,V,"bindMatrix"),at.setOptional(I,V,"bindMatrixInverse");const lt=V.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(I,"boneTexture",lt.boneTexture,Y))}V.isBatchedMesh&&(at.setOptional(I,V,"batchingTexture"),at.setValue(I,"batchingTexture",V._matricesTexture,Y),at.setOptional(I,V,"batchingIdTexture"),at.setValue(I,"batchingIdTexture",V._indirectTexture,Y),at.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&at.setValue(I,"batchingColorTexture",V._colorsTexture,Y));const Oi=W.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&N.update(V,W,An),(Fi||ve.receiveShadow!==V.receiveShadow)&&(ve.receiveShadow=V.receiveShadow,at.setValue(I,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Tt.envMapIntensity.value=U.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=zw()),Fi){if(at.setValue(I,"toneMappingExposure",b.toneMappingExposure),ve.needsLights&&$_(Tt,Wr),ge&&z.fog===!0&&Te.refreshFogUniforms(Tt,ge),Te.refreshMaterialUniforms(Tt,z,re,oe,T.state.transmissionRenderTarget[E.id]),ve.needsLights&&ve.lightProbeGrid){const lt=ve.lightProbeGrid;Tt.probesSH.value=lt.texture,Tt.probesMin.value.copy(lt.boundingBox.min),Tt.probesMax.value.copy(lt.boundingBox.max),Tt.probesResolution.value.copy(lt.resolution)}il.upload(I,yh(ve),Tt,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(il.upload(I,yh(ve),Tt,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(I,"center",V.center),at.setValue(I,"modelViewMatrix",V.modelViewMatrix),at.setValue(I,"normalMatrix",V.normalMatrix),at.setValue(I,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){const lt=z.uniformsGroups;for(let ki=0,Xr=lt.length;ki<Xr;ki++){const Mh=lt[ki];te.update(Mh,An),te.bind(Mh,An)}}return An}function $_(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Y_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,U,W){const z=G.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=U,G.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const W=G.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,W=0){F=E,j=U,H=W;let z=null,V=!1,ge=!1;if(E){const me=G.get(E);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(E.viewport),ae.copy(E.scissor),Oe=E.scissorTest,_.viewport(ne),_.scissor(ae),_.setScissorTest(Oe),$=-1;return}else if(me.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(me.__hasExternalTextures)Y.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ue=E.depthTexture;if(me.__boundDepthTexture!==Ue){if(Ue!==null&&G.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ge=!0);const we=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[U])?z=we[U][W]:z=we[U],V=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?z=G.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[W]:z=we,ne.copy(E.viewport),ae.copy(E.scissor),Oe=E.scissorTest}else ne.copy(Re).multiplyScalar(re).floor(),ae.copy(Mt).multiplyScalar(re).floor(),Oe=Ve;if(W!==0&&(z=X),_.bindFramebuffer(I.FRAMEBUFFER,z)&&_.drawBuffers(E,z),_.viewport(ne),_.scissor(ae),_.setScissorTest(Oe),V){const me=G.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,W)}else if(ge){const me=U;for(let Me=0;Me<E.textures.length;Me++){const we=G.get(E.textures[Me]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Me,we.__webglTexture,W,me)}}else if(E!==null&&W!==0){const me=G.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,W)}$=-1},this.readRenderTargetPixels=function(E,U,W,z,V,ge,xe,me=0){if(!(E&&E.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){_.bindFramebuffer(I.FRAMEBUFFER,Me);try{const we=E.textures[me],Ue=we.format,ke=we.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(Ue)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(ke)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&W>=0&&W<=E.height-V&&I.readPixels(U,W,z,V,de.convert(Ue),de.convert(ke),ge)}finally{const we=F!==null?G.get(F).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,U,W,z,V,ge,xe,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(U>=0&&U<=E.width-z&&W>=0&&W<=E.height-V){_.bindFramebuffer(I.FRAMEBUFFER,Me);const we=E.textures[me],Ue=we.format,ke=we.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.bufferData(I.PIXEL_PACK_BUFFER,ge.byteLength,I.STREAM_READ),I.readPixels(U,W,z,V,de.convert(Ue),de.convert(ke),0);const nt=F!==null?G.get(F).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,nt);const Et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await rS(I,Et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ge),I.deleteBuffer(Ae),I.deleteSync(Et),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,W=0){const z=Math.pow(2,-W),V=Math.floor(E.image.width*z),ge=Math.floor(E.image.height*z),xe=U!==null?U.x:0,me=U!==null?U.y:0;Y.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,xe,me,V,ge),_.unbindTexture()},this.copyTextureToTexture=function(E,U,W=null,z=null,V=0,ge=0){let xe,me,Me,we,Ue,ke,Ae,nt,Et;const vt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(W!==null)xe=W.max.x-W.min.x,me=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Ue=W.min.y,ke=W.isBox3?W.min.z:0;else{const Tt=Math.pow(2,-V);xe=Math.floor(vt.width*Tt),me=Math.floor(vt.height*Tt),E.isDataArrayTexture?Me=vt.depth:E.isData3DTexture?Me=Math.floor(vt.depth*Tt):Me=1,we=0,Ue=0,ke=0}z!==null?(Ae=z.x,nt=z.y,Et=z.z):(Ae=0,nt=0,Et=0);const st=de.convert(U.format),Xt=de.convert(U.type);let ve;U.isData3DTexture?(Y.setTexture3D(U,0),ve=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),ve=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),ve=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const gn=_.getParameter(I.UNPACK_ROW_LENGTH),$e=_.getParameter(I.UNPACK_IMAGE_HEIGHT),An=_.getParameter(I.UNPACK_SKIP_PIXELS),Jn=_.getParameter(I.UNPACK_SKIP_ROWS),Fi=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,we),_.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),_.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const Wr=E.isDataArrayTexture||E.isData3DTexture,at=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Tt=G.get(E),Oi=G.get(U),lt=G.get(Tt.__renderTarget),ki=G.get(Oi.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,lt.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Xr=0;Xr<Me;Xr++)Wr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(E).__webglTexture,V,ke+Xr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(U).__webglTexture,ge,Et+Xr)),I.blitFramebuffer(we,Ue,xe,me,Ae,nt,xe,me,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||G.has(E)){const Tt=G.get(E),Oi=G.get(U);_.bindFramebuffer(I.READ_FRAMEBUFFER,Z),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let lt=0;lt<Me;lt++)Wr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,V,ke+lt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,V),at?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oi.__webglTexture,ge,Et+lt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Oi.__webglTexture,ge),V!==0?I.blitFramebuffer(we,Ue,xe,me,Ae,nt,xe,me,I.COLOR_BUFFER_BIT,I.NEAREST):at?I.copyTexSubImage3D(ve,ge,Ae,nt,Et+lt,we,Ue,xe,me):I.copyTexSubImage2D(ve,ge,Ae,nt,we,Ue,xe,me);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ve,ge,Ae,nt,Et,xe,me,Me,st,Xt,vt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(ve,ge,Ae,nt,Et,xe,me,Me,st,vt.data):I.texSubImage3D(ve,ge,Ae,nt,Et,xe,me,Me,st,Xt,vt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ge,Ae,nt,xe,me,st,Xt,vt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ge,Ae,nt,vt.width,vt.height,st,vt.data):I.texSubImage2D(I.TEXTURE_2D,ge,Ae,nt,xe,me,st,Xt,vt);_.pixelStorei(I.UNPACK_ROW_LENGTH,gn),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),_.pixelStorei(I.UNPACK_SKIP_PIXELS,An),_.pixelStorei(I.UNPACK_SKIP_ROWS,Jn),_.pixelStorei(I.UNPACK_SKIP_IMAGES,Fi),ge===0&&U.generateMipmaps&&I.generateMipmap(ve),_.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){j=0,H=0,F=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ge._getUnpackColorSpace()}}const Hw=()=>{const t=it.useRef(null);return it.useEffect(()=>{if(!t.current)return;const e=t.current,n=e.clientWidth,i=e.clientHeight,r=new yS,s=new Ln(45,n/i,.1,1e3);s.position.z=3.2;const a=new Vw({antialias:!0,alpha:!0});a.setSize(n,i),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setClearColor(0,0),e.appendChild(a.domElement);const o=new Er(1,40,40),l=new Si({color:58879,wireframe:!0,transparent:!0,opacity:.08}),c=new Vt(o,l);r.add(c);const d=new Er(.98,32,32),h=new Si({color:657968,transparent:!0,opacity:.6}),f=new Vt(d,h);r.add(f),new Jf({color:58879,transparent:!0,opacity:.12});for(let D=0;D<5;D++){const X=new Fl(.3+D*.18,.3+D*.18+.005,64),Z=new Vt(X,new Si({color:58879,transparent:!0,opacity:.06,side:Xn}));Z.rotation.x=Math.PI/2,Z.position.y=-.8+D*.4,r.add(Z)}const p=50,g=[],M=new Pr;for(let D=0;D<p;D++){const X=Math.acos(2*Math.random()-1),Z=2*Math.PI*Math.random(),B=1.01,j=B*Math.sin(X)*Math.cos(Z),H=B*Math.sin(X)*Math.sin(Z),F=B*Math.cos(X),$=new k(j,H,F);g.push($);const J=new Er(.018,8,8),ne=Math.random()>.5,ae=new Si({color:ne?58879:8146431}),Oe=new Vt(J,ae);if(Oe.position.copy($),M.add(Oe),ne&&Math.random()>.4){const We=new Vt(new Er(.04,8,8),new Si({color:58879,transparent:!0,opacity:.25}));We.position.copy($),M.add(We)}}r.add(M);const m=new Pr,u=new Set;for(let D=0;D<g.length;D++)for(let X=D+1;X<g.length;X++)if(g[D].distanceTo(g[X])<.8&&Math.random()>.5){const B=`${D}-${X}`;if(u.has(B))continue;u.add(B);const j=new k().addVectors(g[D],g[X]).multiplyScalar(.5);j.normalize().multiplyScalar(1.15);const F=new FS(g[D],j,g[X]).getPoints(20),$=new wn().setFromPoints(F),J=new Jf({color:Math.random()>.5?58879:8146431,transparent:!0,opacity:.15+Math.random()*.15}),ne=new PS($,J);m.add(ne)}r.add(m);const v=new Fl(1.05,1.12,64),S=new Si({color:58879,transparent:!0,opacity:.04,side:Xn}),y=new Vt(v,S);r.add(y);const w=new Pr;for(let D=0;D<80;D++){const X=D/80*Math.PI*2,Z=1.3+Math.random()*.15,B=new Vt(new Er(.006,4,4),new Si({color:58879,transparent:!0,opacity:.3+Math.random()*.4}));B.position.set(Math.cos(X)*Z,(Math.random()-.5)*.15,Math.sin(X)*Z),w.add(B)}r.add(w);let T=0,C=0;const x=D=>{T=(D.clientX/window.innerWidth-.5)*2,C=(D.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",x);let A=0;const b=()=>{A+=.003,c.rotation.y=A*.5+T*.3,c.rotation.x=C*.15,M.rotation.y=A*.5+T*.3,M.rotation.x=C*.15,m.rotation.y=A*.5+T*.3,m.rotation.x=C*.15,f.rotation.y=A*.3,w.rotation.y=A*.8,w.rotation.x=Math.sin(A)*.1,y.rotation.z=A*.2,M.children.forEach((D,X)=>{if(D instanceof Vt&&D.geometry.type==="SphereGeometry"){const Z=1+Math.sin(A*3+X)*.15;D.scale.setScalar(Z)}}),a.render(r,s),requestAnimationFrame(b)};b();const L=()=>{const D=e.clientWidth,X=e.clientHeight;s.aspect=D/X,s.updateProjectionMatrix(),a.setSize(D,X)};return window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L),window.removeEventListener("mousemove",x),e.removeChild(a.domElement),a.dispose()}},[]),P.jsx("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:1}})};/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=t=>{const e=Ww(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},$w=it.createContext({}),Yw=()=>it.useContext($w),qw=it.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>{const{size:c=24,strokeWidth:d=2,absoluteStrokeWidth:h=!1,color:f="currentColor",className:p=""}=Yw()??{},g=i??h?Number(n??d)*24/Number(e??c):n??d;return it.createElement("svg",{ref:l,...mu,width:e??c??mu.width,height:e??c??mu.height,stroke:t??f,strokeWidth:g,className:I_("lucide",p,r),...!s&&!Xw(o)&&{"aria-hidden":"true"},...o},[...a.map(([M,m])=>it.createElement(M,m)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(t,e)=>{const n=it.forwardRef(({className:i,...r},s)=>it.createElement(qw,{ref:s,iconNode:e,className:I_(`lucide-${Gw(Nm(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Nm(t),n};/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],nd=Ke("activity",jw);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],U_=Ke("arrow-down-right",Kw);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],Qw=Ke("arrow-left-right",Zw);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],F_=Ke("arrow-up-right",Jw);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],O_=Ke("briefcase",eA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],nA=Ke("chart-column",tA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],rA=Ke("chart-no-axes-column",iA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aA=Ke("circle-alert",sA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],k_=Ke("circle-check-big",oA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],cA=Ke("circle-x",lA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],oh=Ke("clock",uA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]],dA=Ke("coins",fA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],pA=Ke("dollar-sign",hA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],gA=Ke("file-text",mA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],lh=Ke("globe",_A);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],xA=Ke("link",vA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],SA=Ke("message-square",yA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],EA=Ke("percent",MA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],wA=Ke("radio",TA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Dm=Ke("search",AA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],RA=Ke("send",CA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],B_=Ke("settings",bA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],LA=Ke("shield",PA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],DA=Ke("star",NA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],z_=Ke("tag",IA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],FA=Ke("timer",UA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],kA=Ke("trending-down",OA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Ol=Ke("trending-up",BA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],VA=Ke("user",zA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],Im=Ke("wallet",HA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],WA=Ke("wifi-off",GA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],$A=Ke("wifi",XA);/**
 * @license lucide-react v1.25.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],qA=Ke("zap",YA),jA=({agentOnline:t,connected:e})=>P.jsxs("header",{className:"header",children:[P.jsxs("div",{className:"header-left",children:[P.jsxs("div",{className:"logo",children:[P.jsx("div",{className:"logo-icon",children:P.jsx(qA,{size:18})}),P.jsx("span",{className:"logo-text",children:"SphereTrader"})]}),P.jsx("span",{className:"header-subtitle",children:"Autonomous Market Maker"})]}),P.jsxs("div",{className:"header-right",children:[P.jsxs("span",{className:`badge ${t?"badge-online":""}`,children:[P.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:t?"var(--emerald)":"var(--red)",boxShadow:t?"0 0 8px var(--emerald)":void 0,animation:t?"pulse 2s infinite":void 0}}),t?"AGENT ONLINE":"OFFLINE"]}),e!==void 0&&P.jsxs("span",{className:"badge",style:{background:e?"rgba(0,230,118,0.06)":"rgba(255,171,0,0.06)",borderColor:e?"rgba(0,230,118,0.2)":"rgba(255,171,0,0.2)",color:e?"var(--emerald)":"var(--amber)"},children:[e?P.jsx($A,{size:11}):P.jsx(WA,{size:11}),e?"API LIVE":"SIMULATION"]}),P.jsxs("span",{className:"badge badge-network",children:[P.jsx(lh,{size:11})," TESTNET V2"]}),P.jsxs("span",{className:"badge badge-brand",children:[P.jsx(LA,{size:11})," UNICITY"]})]})]}),KA=({data:t,color:e="#00e5ff",width:n=120,height:i=40})=>{const r=it.useMemo(()=>{if(t&&t.length>0)return t;const l=[50];for(let c=1;c<24;c++)l.push(Math.max(10,Math.min(90,l[c-1]+(Math.random()-.45)*15)));return l},[t]),s=it.useMemo(()=>{const l=Math.min(...r),d=Math.max(...r)-l||1;return r.map((h,f)=>({x:f/(r.length-1)*n,y:i-(h-l)/d*(i-4)-2}))},[r,n,i]),a=s.map((l,c)=>`${c===0?"M":"L"}${l.x},${l.y}`).join(" "),o=`${a} L${n},${i} L0,${i} Z`;return P.jsxs("svg",{width:n,height:i,viewBox:`0 0 ${n} ${i}`,style:{display:"block"},children:[P.jsxs("defs",{children:[P.jsxs("linearGradient",{id:`grad-${e.replace("#","")}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[P.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.3"}),P.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0"})]}),P.jsxs("filter",{id:"glow",children:[P.jsx("feGaussianBlur",{stdDeviation:"2",result:"blur"}),P.jsxs("feMerge",{children:[P.jsx("feMergeNode",{in:"blur"}),P.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),P.jsx("path",{d:o,fill:`url(#grad-${e.replace("#","")})`}),P.jsx("path",{d:a,fill:"none",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#glow)"}),P.jsx("circle",{cx:s[s.length-1].x,cy:s[s.length-1].y,r:"2.5",fill:e}),P.jsxs("circle",{cx:s[s.length-1].x,cy:s[s.length-1].y,r:"5",fill:e,opacity:"0.2",children:[P.jsx("animate",{attributeName:"r",values:"4;8;4",dur:"2s",repeatCount:"indefinite"}),P.jsx("animate",{attributeName:"opacity",values:"0.3;0.05;0.3",dur:"2s",repeatCount:"indefinite"})]})]})},ZA={trades:P.jsx(Ol,{size:20}),volume:P.jsx(dA,{size:20}),intents:P.jsx(wA,{size:20}),uptime:P.jsx(oh,{size:20})},Um={cyan:"#00e5ff",emerald:"#00e676",purple:"#7c4dff",amber:"#ffab00"},QA=({data:t,iconKey:e})=>{const n=it.useRef(null),i=it.useCallback(s=>{if(!n.current)return;const a=n.current.getBoundingClientRect(),o=(s.clientX-a.left)/a.width-.5,l=(s.clientY-a.top)/a.height-.5;n.current.style.transform=`perspective(600px) rotateY(${o*10}deg) rotateX(${-l*10}deg) translateY(-4px)`},[]),r=it.useCallback(()=>{n.current&&(n.current.style.transform="")},[]);return P.jsxs("div",{ref:n,className:`stat-card accent-${t.accent}`,onMouseMove:i,onMouseLeave:r,children:[P.jsxs("div",{className:"stat-card-header",children:[P.jsx("div",{className:"stat-icon-wrap",style:{color:Um[t.accent]},children:ZA[e]||P.jsx(Ol,{size:20})}),P.jsx(KA,{color:Um[t.accent],width:90,height:32})]}),P.jsx("div",{className:"stat-value",children:t.value}),P.jsx("div",{className:"stat-label",children:t.label}),P.jsx("div",{className:"stat-footer",children:t.trend&&P.jsxs("span",{className:`stat-trend ${t.trendDir==="up"?"up":"neutral"}`,children:[t.trendDir==="up"&&P.jsx(Ol,{size:11}),t.trend]})})]})},JA=["trades","volume","intents","uptime"],eC=({stats:t})=>P.jsx("div",{className:"stats-row",children:t.map((e,n)=>P.jsx(QA,{data:e,iconKey:JA[n]},n))}),tC={system:{icon:P.jsx(B_,{size:14}),color:"#484d6e"},intent_posted:{icon:P.jsx(gA,{size:14}),color:"#00e5ff"},dm_received:{icon:P.jsx(SA,{size:14}),color:"#22d3ee"},dm_sent:{icon:P.jsx(RA,{size:14}),color:"#c084fc"},trade_started:{icon:P.jsx(nd,{size:14}),color:"#ffab00"},trade_settled:{icon:P.jsx(k_,{size:14}),color:"#00e676"},payment_sent:{icon:P.jsx(pA,{size:14}),color:"#ffab00"},payment_received:{icon:P.jsx(Im,{size:14}),color:"#00e676"},balance_update:{icon:P.jsx(Im,{size:14}),color:"#00e5ff"},nametag_registered:{icon:P.jsx(z_,{size:14}),color:"#c084fc"},error:{icon:P.jsx(aA,{size:14}),color:"#ff1744"}},nC=({activities:t})=>{const e=it.useRef(null),n=it.useRef(0);it.useEffect(()=>{t.length>n.current&&e.current&&(e.current.scrollTop=0),n.current=t.length},[t.length]);const i=r=>new Date(r).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return P.jsxs("div",{className:"card",style:{minHeight:400},children:[P.jsxs("div",{className:"card-header",children:[P.jsxs("h2",{className:"card-title",children:[P.jsx(nd,{size:16})," LIVE FEED"]}),P.jsxs("span",{className:"badge badge-live",children:[P.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"#ff1744",boxShadow:"0 0 8px #ff1744"}})," LIVE"]})]}),P.jsx("div",{ref:e,className:"feed-scroll",children:t.length===0?P.jsx("div",{style:{padding:40,textAlign:"center",color:"var(--text-muted)",fontFamily:"'JetBrains Mono', monospace",fontSize:12},children:"Awaiting agent telemetry..."}):t.map((r,s)=>{const a=tC[r.type]||{icon:P.jsx(nd,{size:14}),color:"#484d6e"};return P.jsx("div",{className:`feed-item ${s===0?"newest":""}`,children:P.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[P.jsx("span",{style:{color:a.color,flexShrink:0,marginTop:2,filter:`drop-shadow(0 0 4px ${a.color}40)`},children:a.icon}),P.jsxs("div",{style:{flex:1,minWidth:0},children:[P.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:12,color:a.color,lineHeight:1.5,wordBreak:"break-word"},children:r.message}),P.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,color:"var(--text-muted)",marginTop:3,opacity:.5},children:i(r.timestamp)})]})]})},r.id)})})]})},Fm=["@node_runner","@trader42","@mm_node","@whale_buyer","@alpha_bot","@dex_agent","@flash_seller","@escrow_agent","@arb_master","@yield_bot"];function Om(t){return{id:`#${48e3+t}`,counterparty:Fm[Math.floor(Math.random()*Fm.length)],side:Math.random()>.5?"buy":"sell",amount:Math.floor(Math.random()*900+50),price:parseFloat((.9+Math.random()*.2).toFixed(2)),status:Math.random()>.85?Math.random()>.5?"pending":"failed":"completed",time:new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"})}}const iC=()=>{const[t,e]=it.useState(()=>Array.from({length:8},(i,r)=>Om(r)));it.useEffect(()=>{const i=setInterval(()=>{e(r=>[Om(r.length+Math.floor(Math.random()*100)),...r.slice(0,9)])},4e3+Math.random()*6e3);return()=>clearInterval(i)},[]);const n=({status:i})=>i==="completed"?P.jsx(k_,{size:12}):i==="pending"?P.jsx(oh,{size:12}):P.jsx(cA,{size:12});return P.jsxs("div",{className:"card",children:[P.jsxs("div",{className:"card-header",children:[P.jsxs("h2",{className:"card-title",children:[P.jsx(nA,{size:16})," TRADE HISTORY"]}),P.jsxs("span",{className:"badge",style:{background:"rgba(124,77,255,0.08)",borderColor:"rgba(124,77,255,0.2)",color:"var(--purple)"},children:[t.length," TRADES"]})]}),P.jsx("div",{style:{overflowX:"auto",maxHeight:380},children:P.jsxs("table",{className:"trade-table",children:[P.jsx("thead",{children:P.jsxs("tr",{children:[P.jsx("th",{children:"ID"}),P.jsx("th",{children:"Counterparty"}),P.jsx("th",{children:"Side"}),P.jsx("th",{style:{textAlign:"right"},children:"Amount"}),P.jsx("th",{style:{textAlign:"right"},children:"Price"}),P.jsx("th",{style:{textAlign:"center"},children:"Status"}),P.jsx("th",{style:{textAlign:"right"},children:"Time"})]})}),P.jsx("tbody",{children:t.map((i,r)=>P.jsxs("tr",{className:r===0?"new-row":"",children:[P.jsx("td",{style:{color:"var(--text-muted)",fontFamily:"'JetBrains Mono', monospace"},children:i.id}),P.jsx("td",{style:{color:"var(--cyan)",fontWeight:500},children:i.counterparty}),P.jsx("td",{children:P.jsxs("span",{className:`side-badge ${i.side}`,children:[i.side==="buy"?P.jsx(F_,{size:10,style:{marginRight:2}}):P.jsx(U_,{size:10,style:{marginRight:2}}),i.side.toUpperCase()]})}),P.jsxs("td",{style:{textAlign:"right",fontFamily:"'JetBrains Mono', monospace"},children:[i.amount," UCT"]}),P.jsxs("td",{style:{textAlign:"right",fontFamily:"'JetBrains Mono', monospace"},children:[i.price," USDU"]}),P.jsx("td",{style:{textAlign:"center"},children:P.jsxs("span",{className:`status-badge ${i.status}`,children:[P.jsx(n,{status:i.status})," ",i.status==="completed"?"Done":i.status==="pending"?"Pending":"Failed"]})}),P.jsx("td",{style:{textAlign:"right",color:"var(--text-muted)",fontFamily:"'JetBrains Mono', monospace",fontSize:"0.7rem"},children:i.time})]},i.id+r))})]})})]})},rC=({connected:t})=>{const e=[{label:"Agent Nametag",value:"@spheretrader",icon:P.jsx(z_,{size:15})},{label:"Trading Pair",value:"UCT / USDU",icon:P.jsx(Qw,{size:15})},{label:"Buy Price",value:"0.95 USDU",icon:P.jsx(kA,{size:15})},{label:"Sell Price",value:"1.05 USDU",icon:P.jsx(Ol,{size:15})},{label:"Spread",value:"10.5%",icon:P.jsx(EA,{size:15})},{label:"Max Trade",value:"1,000 UCT",icon:P.jsx(rA,{size:15})},{label:"Budget Limit",value:"10,000 UCT",icon:P.jsx(O_,{size:15})},{label:"Trading Interval",value:"60 seconds",icon:P.jsx(FA,{size:15})},{label:"Network",value:"Testnet v2",icon:P.jsx(lh,{size:15})},{label:"Settlement",value:"Sphere Payments",icon:P.jsx(xA,{size:15})}];return P.jsxs("div",{className:"card",children:[P.jsxs("div",{className:"card-header",children:[P.jsxs("h2",{className:"card-title",children:[P.jsx(B_,{size:16})," CONFIGURATION"]}),P.jsx("span",{className:"badge",style:{background:t?"rgba(0,230,118,0.06)":"rgba(255,171,0,0.06)",borderColor:t?"rgba(0,230,118,0.2)":"rgba(255,171,0,0.2)",color:t?"var(--emerald)":"var(--amber)"},children:t?"LIVE":"DEMO"})]}),P.jsx("div",{style:{display:"grid",gap:4},children:e.map(n=>P.jsxs("div",{className:"config-row",children:[P.jsxs("span",{className:"config-label",children:[n.icon," ",n.label]}),P.jsx("span",{className:"config-value",children:n.value})]},n.label))})]})},km=[{id:"int-a1b2c3",type:"buy",description:"Looking to buy 500 UCT tokens at market rate. Immediate settlement preferred.",price:"0.96",currency:"USDU",agent:"@spheretrader",created:"2026-07-11T04:10:00Z",score:.98},{id:"int-d4e5f6",type:"sell",description:"Selling 200 UCT tokens. Willing to negotiate on quantity.",price:"1.04",currency:"USDU",agent:"@alphadealer",created:"2026-07-11T03:55:00Z",score:.94},{id:"int-g7h8i9",type:"service",description:"Offering OTC market-making service for UCT/USDU pairs. Low spread, fast settlement.",price:"0.5%",currency:"spread",agent:"@mm_node",created:"2026-07-11T03:30:00Z",score:.91},{id:"int-j1k2l3",type:"buy",description:"Bid for 1,000 UCT — bulk purchase. Looking for best offer.",price:"0.94",currency:"USDU",agent:"@whale_buyer",created:"2026-07-11T02:45:00Z",score:.89}];function sC(t){if(!t)return"—";try{return new Date(t).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return t}}const aC=()=>{const[t,e]=it.useState(km),[n,i]=it.useState("mock");it.useEffect(()=>{e(km),i("mock")},[]);const r=({type:s})=>s==="buy"?P.jsx(F_,{size:12}):s==="sell"?P.jsx(U_,{size:12}):s==="service"?P.jsx(O_,{size:12}):P.jsx(Dm,{size:12});return P.jsxs("div",{className:"card",style:{minHeight:400},children:[P.jsxs("div",{className:"card-header",children:[P.jsxs("h2",{className:"card-title",children:[P.jsx(Dm,{size:16})," MARKET INTENT BROWSER"]}),P.jsxs("span",{className:"badge",style:{background:"rgba(255,171,0,0.1)",borderColor:"rgba(255,171,0,0.2)",color:"var(--amber)"},children:[P.jsx(lh,{size:11,style:{marginRight:4}})," DEMO DATA"]})]}),P.jsx("div",{className:"feed-scroll",children:t.map((s,a)=>P.jsxs("div",{className:"feed-item",style:{borderLeft:`2px solid ${s.type==="buy"?"var(--emerald)":s.type==="sell"?"var(--red)":"var(--purple)"}`},children:[P.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,alignItems:"center"},children:[P.jsxs("span",{className:`side-badge ${s.type}`,style:{display:"inline-flex",alignItems:"center",gap:4},children:[P.jsx(r,{type:s.type})," ",s.type.toUpperCase()]}),s.price&&P.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.85rem",color:"#fff",fontWeight:600},children:[s.price," ",P.jsx("span",{style:{color:"var(--text-muted)"},children:s.currency})]})]}),P.jsx("div",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.8)",marginBottom:12,lineHeight:1.4},children:s.description}),P.jsxs("div",{style:{display:"flex",gap:16,fontSize:"0.7rem",color:"var(--text-muted)",fontFamily:"'JetBrains Mono', monospace"},children:[s.agent&&P.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[P.jsx(VA,{size:10})," ",s.agent]}),s.created&&P.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[P.jsx(oh,{size:10})," ",sC(s.created)]}),s.score&&P.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4,color:"var(--cyan)"},children:[P.jsx(DA,{size:10})," ",s.score]})]})]},s.id))})]})},gu="http://localhost:3001/api",oC=3e3;class lC{constructor(){On(this,"_connected",!1);On(this,"_status",null);On(this,"_activities",[]);On(this,"_stats",null);On(this,"_listeners",new Set);On(this,"_pollTimer",null);On(this,"_simTimer",null);On(this,"_simStartTime",Date.now());On(this,"_simTradeCount",0);On(this,"_simVolume",0)}start(){this._simStartTime=Date.now(),this._tryConnect(),this._pollTimer=setInterval(()=>this._tryConnect(),oC)}stop(){this._pollTimer&&clearInterval(this._pollTimer),this._simTimer&&clearInterval(this._simTimer)}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}get connected(){return this._connected}get status(){return this._status}get activities(){return this._activities}get stats(){return this._stats}_notify(){this._listeners.forEach(e=>e())}async _tryConnect(){try{const[e,n,i]=await Promise.all([fetch(`${gu}/status`,{signal:AbortSignal.timeout(2e3)}),fetch(`${gu}/activity?limit=50`,{signal:AbortSignal.timeout(2e3)}),fetch(`${gu}/stats`,{signal:AbortSignal.timeout(2e3)})]);if(e.ok){this._connected=!0,this._status=await e.json();const r=await n.json();this._activities=r.activities||[],this._stats=await i.json(),this._simTimer&&(clearInterval(this._simTimer),this._simTimer=null),this._notify();return}}catch{}!this._connected&&!this._simTimer&&this._startSimulation()}_startSimulation(){this._connected=!1,this._generateSimActivity("system","Agent started — SphereTrader v1.0.0 initialized"),this._generateSimActivity("system","Connected to Unicity Sphere testnet-v2"),this._generateSimActivity("nametag_registered","Registered nametag: @spheretrader"),this._generateSimActivity("balance_update","Balance: 4,250.00 UCT"),this._generateSimActivity("intent_posted","Posted buy intent: 100 UCT at price 0.95 USDU"),this._generateSimActivity("intent_posted","Posted sell intent: 100 UCT at price 1.05 USDU");const e=[()=>{const n=["@trader42","@mm_node","@whale_buyer","@alpha_bot","@dex_agent","@flash_seller","@escrow_agent","@node_runner","@arb_master","@yield_bot"],i=n[Math.floor(Math.random()*n.length)],r=Math.floor(Math.random()*500+50),s=[{type:"dm_received",msg:`Received DM from ${i}: "Interested in your ${r} UCT buy offer"`},{type:"dm_sent",msg:`Sent counter-offer to ${i}: ${r} UCT at 0.98 USDU`},{type:"intent_posted",msg:`Refreshed buy intent: ${r} UCT at ${(.93+Math.random()*.04).toFixed(2)} USDU`},{type:"intent_posted",msg:`Refreshed sell intent: ${r} UCT at ${(1.03+Math.random()*.04).toFixed(2)} USDU`},{type:"trade_started",msg:`Trade negotiation started with ${i} for ${r} UCT`},{type:"balance_update",msg:`Balance: ${(4250+Math.random()*200-100).toFixed(2)} UCT`},{type:"payment_received",msg:`Incoming transfer from ${i}: ${r} UCT received`}],a=s[Math.floor(Math.random()*s.length)];if(this._generateSimActivity(a.type,a.msg),Math.random()<.2){this._simTradeCount++;const o=Math.floor(Math.random()*300+25);this._simVolume+=o,this._generateSimActivity("trade_settled",`✅ Trade settled with ${i}: ${o} UCT at ${(.95+Math.random()*.1).toFixed(2)} USDU`)}}];this._simTimer=setInterval(()=>{e[0](),this._updateSimStats(),this._notify()},2e3+Math.random()*3e3),this._updateSimStats(),this._notify()}_generateSimActivity(e,n){const i={id:`sim_${Date.now()}_${Math.random().toString(36).slice(2,5)}`,timestamp:new Date().toISOString(),type:e,message:n};this._activities.unshift(i),this._activities.length>50&&this._activities.pop()}_updateSimStats(){const e=Date.now()-this._simStartTime;this._stats={totalTrades:this._simTradeCount,completedTrades:this._simTradeCount,totalVolume:this._simVolume.toFixed(2),activeNegotiations:Math.floor(Math.random()*4),activeIntents:4+Math.floor(Math.random()*4),uptime:e,loopCount:Math.floor(e/6e4)}}}const os=new lC;function cC(t){const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60;return`${n}h ${i.toString().padStart(2,"0")}m ${r.toString().padStart(2,"0")}s`}const uC=()=>{const[,t]=it.useState(0),e=it.useCallback(()=>t(s=>s+1),[]);it.useEffect(()=>{os.start();const s=os.subscribe(e),a=setInterval(()=>t(o=>o+1),1e3);return()=>{s(),clearInterval(a),os.stop()}},[e]);const n=os.stats,i=os.connected,r=[{icon:"trades",value:String((n==null?void 0:n.totalTrades)??0),label:"Total Trades",trend:n?`+${n.completedTrades} settled`:"initializing...",trendDir:((n==null?void 0:n.completedTrades)??0)>0?"up":void 0,accent:"cyan"},{icon:"volume",value:(n==null?void 0:n.totalVolume)??"0.00",label:"Volume (UCT)",trend:n?`${n.loopCount} loops`:"scanning...",trendDir:parseFloat((n==null?void 0:n.totalVolume)??"0")>0?"up":void 0,accent:"emerald"},{icon:"intents",value:String((n==null?void 0:n.activeIntents)??0),label:"Active Intents",trend:n?`${n.activeNegotiations} negotiating`:"posting...",accent:"purple"},{icon:"uptime",value:cC((n==null?void 0:n.uptime)??0),label:"Agent Uptime",accent:"amber"}];return P.jsxs(P.Fragment,{children:[P.jsx(jA,{agentOnline:!0,connected:i}),P.jsxs("section",{className:"hero",children:[P.jsxs("div",{className:"hero-bg",children:[P.jsx("img",{src:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80",alt:"",className:"hero-bg-img"}),P.jsx("div",{className:"hero-gradient-overlay"}),P.jsx("div",{className:"hero-noise"})]}),P.jsx("div",{className:"hero-globe-container",children:P.jsx(Hw,{})}),P.jsxs("div",{className:"hero-inner",children:[P.jsxs("div",{className:"hero-badge",children:[P.jsx("span",{className:"hero-dot"})," AUTONOMOUS AGENT — LIVE ON TESTNET V2"]}),P.jsxs("h1",{className:"hero-title",children:["SPHERE",P.jsx("br",{}),P.jsx("span",{className:"hero-title-accent",children:"TRADER"})]}),P.jsx("p",{className:"hero-desc",children:"Autonomous AI market maker — discovers, negotiates, and settles trades on the Unicity Sphere network with zero human intervention."}),P.jsxs("div",{className:"hero-metrics",children:[P.jsxs("div",{className:"hero-metric",children:[P.jsx("span",{className:"hero-metric-val",children:(n==null?void 0:n.totalTrades)??0}),P.jsx("span",{className:"hero-metric-label",children:"TRADES"})]}),P.jsx("div",{className:"hero-metric-divider"}),P.jsxs("div",{className:"hero-metric",children:[P.jsx("span",{className:"hero-metric-val",children:(n==null?void 0:n.activeIntents)??0}),P.jsx("span",{className:"hero-metric-label",children:"INTENTS"})]}),P.jsx("div",{className:"hero-metric-divider"}),P.jsxs("div",{className:"hero-metric",children:[P.jsx("span",{className:"hero-metric-val",style:{color:"var(--emerald)"},children:i?"LIVE":"SIM"}),P.jsx("span",{className:"hero-metric-label",children:"STATUS"})]})]})]})]}),P.jsx("section",{className:"features-strip",children:[{img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",title:"Peer-to-Peer DMs",desc:"Negotiate trades via encrypted direct messaging"},{img:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",title:"Autonomous Settlement",desc:"Payments execute automatically on-chain"},{img:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",title:"Market Scanning",desc:"Discovers and matches intents at machine speed"},{img:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",title:"SDK Primitives",desc:"Built on all 6 Sphere SDK modules"}].map((s,a)=>P.jsxs("div",{className:"feature-card",children:[P.jsx("img",{src:s.img,alt:s.title,className:"feature-card-img"}),P.jsx("div",{className:"feature-card-overlay"}),P.jsxs("div",{className:"feature-card-content",children:[P.jsx("h3",{className:"feature-card-title",children:s.title}),P.jsx("p",{className:"feature-card-desc",children:s.desc})]})]},a))}),P.jsxs("main",{className:"dashboard",children:[P.jsxs("div",{className:"section-header",children:[P.jsx("h2",{className:"section-title",children:"LIVE DASHBOARD"}),P.jsx("div",{className:"section-line"})]}),P.jsx(eC,{stats:r}),P.jsxs("div",{className:"main-grid",children:[P.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[P.jsx(nC,{activities:os.activities}),P.jsx(aC,{})]}),P.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[P.jsx(iC,{}),P.jsx(rC,{connected:i})]})]}),P.jsxs("footer",{className:"footer",children:[P.jsx("span",{className:"gradient-text",children:"SPHERETRADER"}),"  ·   Autonomous Market Maker   ·  ",P.jsx("a",{href:"https://unicity.network",target:"_blank",rel:"noopener noreferrer",children:"Unicity Sphere"})]})]})]})};_u.createRoot(document.getElementById("root")).render(P.jsx(dv.StrictMode,{children:P.jsx(uC,{})}));
