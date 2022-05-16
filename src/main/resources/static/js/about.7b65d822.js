(self["webpackChunkbplc_vue"]=self["webpackChunkbplc_vue"]||[]).push([[443],{669:function(t,e,n){t.exports=n(609)},448:function(t,e,n){"use strict";var r=n(867),o=n(26),i=n(372),s=n(327),a=n(97),u=n(109),c=n(985),f=n(874),l=n(648),p=n(644),d=n(205);t.exports=function(t){return new Promise((function(e,n){var h,m=t.data,v=t.headers,b=t.responseType;function y(){t.cancelToken&&t.cancelToken.unsubscribe(h),t.signal&&t.signal.removeEventListener("abort",h)}r.isFormData(m)&&r.isStandardBrowserEnv()&&delete v["Content-Type"];var g=new XMLHttpRequest;if(t.auth){var E=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";v.Authorization="Basic "+btoa(E+":"+w)}var O=a(t.baseURL,t.url);function R(){if(g){var r="getAllResponseHeaders"in g?u(g.getAllResponseHeaders()):null,i=b&&"text"!==b&&"json"!==b?g.response:g.responseText,s={data:i,status:g.status,statusText:g.statusText,headers:r,config:t,request:g};o((function(t){e(t),y()}),(function(t){n(t),y()}),s),g=null}}if(g.open(t.method.toUpperCase(),s(O,t.params,t.paramsSerializer),!0),g.timeout=t.timeout,"onloadend"in g?g.onloadend=R:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(R)},g.onabort=function(){g&&(n(new l("Request aborted",l.ECONNABORTED,t,g)),g=null)},g.onerror=function(){n(new l("Network Error",l.ERR_NETWORK,t,g,g)),g=null},g.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||f;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new l(e,r.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,t,g)),g=null},r.isStandardBrowserEnv()){var x=(t.withCredentials||c(O))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;x&&(v[t.xsrfHeaderName]=x)}"setRequestHeader"in g&&r.forEach(v,(function(t,e){"undefined"===typeof m&&"content-type"===e.toLowerCase()?delete v[e]:g.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(g.withCredentials=!!t.withCredentials),b&&"json"!==b&&(g.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&g.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(h=function(t){g&&(n(!t||t&&t.type?new p:t),g.abort(),g=null)},t.cancelToken&&t.cancelToken.subscribe(h),t.signal&&(t.signal.aborted?h():t.signal.addEventListener("abort",h))),m||(m=null);var A=d(O);A&&-1===["http","https","file"].indexOf(A)?n(new l("Unsupported protocol "+A+":",l.ERR_BAD_REQUEST,t)):g.send(m)}))}},609:function(t,e,n){"use strict";var r=n(867),o=n(849),i=n(321),s=n(185),a=n(546);function u(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n.create=function(e){return u(s(t,e))},n}var c=u(a);c.Axios=i,c.CanceledError=n(644),c.CancelToken=n(972),c.isCancel=n(502),c.VERSION=n(288).version,c.toFormData=n(675),c.AxiosError=n(648),c.Cancel=c.CanceledError,c.all=function(t){return Promise.all(t)},c.spread=n(713),c.isAxiosError=n(268),t.exports=c,t.exports["default"]=c},972:function(t,e,n){"use strict";var r=n(644);function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},o.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},644:function(t,e,n){"use strict";var r=n(648),o=n(867);function i(t){r.call(this,null==t?"canceled":t,r.ERR_CANCELED),this.name="CanceledError"}o.inherits(i,r,{__CANCEL__:!0}),t.exports=i},502:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:function(t,e,n){"use strict";var r=n(867),o=n(327),i=n(782),s=n(572),a=n(185),u=n(97),c=n(875),f=c.validators;function l(t){this.defaults=t,this.interceptors={request:new i,response:new i}}l.prototype.request=function(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var i,u=[];if(this.interceptors.response.forEach((function(t){u.push(t.fulfilled,t.rejected)})),!o){var l=[s,void 0];Array.prototype.unshift.apply(l,r),l=l.concat(u),i=Promise.resolve(e);while(l.length)i=i.then(l.shift(),l.shift());return i}var p=e;while(r.length){var d=r.shift(),h=r.shift();try{p=d(p)}catch(m){h(m);break}}try{i=s(p)}catch(m){return Promise.reject(m)}while(u.length)i=i.then(u.shift(),u.shift());return i},l.prototype.getUri=function(t){t=a(this.defaults,t);var e=u(t.baseURL,t.url);return o(e,t.params,t.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,o){return this.request(a(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}l.prototype[t]=e(),l.prototype[t+"Form"]=e(!0)})),t.exports=l},648:function(t,e,n){"use strict";var r=n(867);function o(t,e,n,r,o){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}r.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){s[t]={value:t}})),Object.defineProperties(o,s),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=function(t,e,n,s,a,u){var c=Object.create(i);return r.toFlatObject(t,c,(function(t){return t!==Error.prototype})),o.call(c,t.message,e,n,s,a),c.name=t.name,u&&Object.assign(c,u),c},t.exports=o},782:function(t,e,n){"use strict";var r=n(867);function o(){this.handlers=[]}o.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},97:function(t,e,n){"use strict";var r=n(793),o=n(303);t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},572:function(t,e,n){"use strict";var r=n(867),o=n(527),i=n(502),s=n(546),a=n(644);function u(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a}t.exports=function(t){u(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||s.adapter;return e(t).then((function(e){return u(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},185:function(t,e,n){"use strict";var r=n(867);t.exports=function(t,e){e=e||{};var n={};function o(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function i(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(t[n],e[n])}function s(t){if(!r.isUndefined(e[t]))return o(void 0,e[t])}function a(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(void 0,e[n])}function u(n){return n in e?o(t[n],e[n]):n in t?o(void 0,t[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=c[t]||i,o=e(t);r.isUndefined(o)&&e!==u||(n[t]=o)})),n}},26:function(t,e,n){"use strict";var r=n(648);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}},527:function(t,e,n){"use strict";var r=n(867),o=n(546);t.exports=function(t,e,n){var i=this||o;return r.forEach(n,(function(n){t=n.call(i,t,e)})),t}},546:function(t,e,n){"use strict";var r=n(867),o=n(16),i=n(648),s=n(874),a=n(675),u={"Content-Type":"application/x-www-form-urlencoded"};function c(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function f(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=n(448)),t}function l(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(t)}var p={transitional:s,adapter:f(),transformRequest:[function(t,e){if(o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t))return t;if(r.isArrayBufferView(t))return t.buffer;if(r.isURLSearchParams(t))return c(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var n,i=r.isObject(t),s=e&&e["Content-Type"];if((n=r.isFileList(t))||i&&"multipart/form-data"===s){var u=this.env&&this.env.FormData;return a(n?{"files[]":t}:t,u&&new u)}return i||"application/json"===s?(c(e,"application/json"),l(t)):t}],transformResponse:[function(t){var e=this.transitional||p.transitional,n=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(s){if("SyntaxError"===a.name)throw i.from(a,i.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(623)},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){p.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){p.headers[t]=r.merge(u)})),t.exports=p},874:function(t){"use strict";t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:function(t){t.exports={version:"0.27.2"}},849:function(t){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},327:function(t,e,n){"use strict";var r=n(867);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))})))})),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},303:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},372:function(t,e,n){"use strict";var r=n(867);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},793:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},268:function(t,e,n){"use strict";var r=n(867);t.exports=function(t){return r.isObject(t)&&!0===t.isAxiosError}},985:function(t,e,n){"use strict";var r=n(867);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},16:function(t,e,n){"use strict";var r=n(867);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},623:function(t){t.exports=null},109:function(t,e,n){"use strict";var r=n(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}})),s):s}},205:function(t){"use strict";t.exports=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}},713:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},675:function(t,e,n){"use strict";var r=n(867);function o(t,e){e=e||new FormData;var n=[];function o(t){return null===t?"":r.isDate(t)?t.toISOString():r.isArrayBuffer(t)||r.isTypedArray(t)?"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function i(t,s){if(r.isPlainObject(t)||r.isArray(t)){if(-1!==n.indexOf(t))throw Error("Circular reference detected in "+s);n.push(t),r.forEach(t,(function(t,n){if(!r.isUndefined(t)){var a,u=s?s+"."+n:n;if(t&&!s&&"object"===typeof t)if(r.endsWith(n,"{}"))t=JSON.stringify(t);else if(r.endsWith(n,"[]")&&(a=r.toArray(t)))return void a.forEach((function(t){!r.isUndefined(t)&&e.append(u,o(t))}));i(t,u)}})),n.pop()}else e.append(s,o(t))}return i(t),e}t.exports=o},875:function(t,e,n){"use strict";var r=n(288).version,o=n(648),i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var s={};function a(t,e,n){if("object"!==typeof t)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);var r=Object.keys(t),i=r.length;while(i-- >0){var s=r[i],a=e[s];if(a){var u=t[s],c=void 0===u||a(u,s,t);if(!0!==c)throw new o("option "+s+" must be "+c,o.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new o("Unknown option "+s,o.ERR_BAD_OPTION)}}i.transitional=function(t,e,n){function i(t,e){return"[Axios v"+r+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,a){if(!1===t)throw new o(i(r," has been removed"+(e?" in "+e:"")),o.ERR_DEPRECATED);return e&&!s[r]&&(s[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,a)}},t.exports={assertOptions:a,validators:i}},867:function(t,e,n){"use strict";var r=n(849),o=Object.prototype.toString,i=function(t){return function(e){var n=o.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function s(t){return t=t.toLowerCase(),function(e){return i(e)===t}}function a(t){return Array.isArray(t)}function u(t){return"undefined"===typeof t}function c(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var f=s("ArrayBuffer");function l(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer),e}function p(t){return"string"===typeof t}function d(t){return"number"===typeof t}function h(t){return null!==t&&"object"===typeof t}function m(t){if("object"!==i(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var v=s("Date"),b=s("File"),y=s("Blob"),g=s("FileList");function E(t){return"[object Function]"===o.call(t)}function w(t){return h(t)&&E(t.pipe)}function O(t){var e="[object FormData]";return t&&("function"===typeof FormData&&t instanceof FormData||o.call(t)===e||E(t.toString)&&t.toString()===e)}var R=s("URLSearchParams");function x(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function A(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function S(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function _(){var t={};function e(e,n){m(t[n])&&m(e)?t[n]=_(t[n],e):m(e)?t[n]=_({},e):a(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)S(arguments[n],e);return t}function T(t,e,n){return S(e,(function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e})),t}function C(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}function N(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function j(t,e,n){var r,o,i,s={};e=e||{};do{r=Object.getOwnPropertyNames(t),o=r.length;while(o-- >0)i=r[o],s[i]||(e[i]=t[i],s[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function D(t,e,n){t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return-1!==r&&r===n}function P(t){if(!t)return null;var e=t.length;if(u(e))return null;var n=new Array(e);while(e-- >0)n[e]=t[e];return n}var U=function(t){return function(e){return t&&e instanceof t}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));t.exports={isArray:a,isArrayBuffer:f,isBuffer:c,isFormData:O,isArrayBufferView:l,isString:p,isNumber:d,isObject:h,isPlainObject:m,isUndefined:u,isDate:v,isFile:b,isBlob:y,isFunction:E,isStream:w,isURLSearchParams:R,isStandardBrowserEnv:A,forEach:S,merge:_,extend:T,trim:x,stripBOM:C,inherits:N,toFlatObject:j,kindOf:i,kindOfTest:s,endsWith:D,toArray:P,isTypedArray:U,isFileList:g}},478:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return w}});var r=n(252),o=n(577),i=function(t){return(0,r.dD)("data-v-654ca4c6"),t=t(),(0,r.Cn)(),t},s={class:"about"},a=(0,r.uE)('<h1 data-v-654ca4c6>This is an about page</h1><br data-v-654ca4c6><br data-v-654ca4c6><h1 data-v-654ca4c6>Bootstrap Test</h1><button type="button" class="btn btn-primary" data-v-654ca4c6>Primary</button><button type="button" class="btn btn-secondary" data-v-654ca4c6>Secondary</button><button type="button" class="btn btn-success" data-v-654ca4c6>Success</button><button type="button" class="btn btn-danger" data-v-654ca4c6>Danger</button><button type="button" class="btn btn-warning" data-v-654ca4c6>Warning</button><button type="button" class="btn btn-info" data-v-654ca4c6>Info</button><button type="button" class="btn btn-light" data-v-654ca4c6>Light</button><button type="button" class="btn btn-dark" data-v-654ca4c6>Dark</button><button type="button" class="btn btn-link" data-v-654ca4c6>Link</button><br data-v-654ca4c6><br data-v-654ca4c6><h1 data-v-654ca4c6>Vuex Test</h1>',16),u=i((function(){return(0,r._)("br",null,null,-1)})),c=i((function(){return(0,r._)("br",null,null,-1)})),f=i((function(){return(0,r._)("h1",null,"Axios Test",-1)}));function l(t,e,n,i,l,p){return(0,r.wg)(),(0,r.iD)("div",s,[a,(0,r._)("h3",null,(0,o.zw)(t.word),1),u,c,f,(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.axiostest&&t.axiostest.apply(t,e)})},"Axios")])}var p=n(907),d=n(870),h=n(669),m=n.n(h),v=m().create({baseURL:"http://localhost:8080"}),b=v,y=(0,r.aZ)({name:"Aboutview",computed:{word:function(){var t=(0,p.oR)(d.J);return t.state.word}},methods:{axiostest:function(){b.get("/axiostest?test=1234").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}}),g=n(744);const E=(0,g.Z)(y,[["render",l],["__scopeId","data-v-654ca4c6"]]);var w=E}}]);
//# sourceMappingURL=about.7b65d822.js.map