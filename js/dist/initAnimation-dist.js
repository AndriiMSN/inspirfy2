!function(){var t=[function(t,n,r){"use strict";r.r(n);r(1),r(32),r(78);function e(t,n,r,e,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?n(a):Promise.resolve(a).then(e,o)}var o=function(t){return new Promise((function(n){return setTimeout(n,t)}))};window.addEventListener("resize",(function(){document.querySelector(".header__logo").style.animation="none",document.querySelector(".header__mobBtn").style.animation="none",document.querySelector(".header__nav").style.animation="none",document.querySelector(".header .start-earning").style.animation="none"})),setTimeout((function(){document.querySelector(".hero .container .hero__title").classList.add("normalize"),document.querySelector(".header").classList.add("normalize"),document.querySelector(".cover").classList.add("hide");var t=document.querySelectorAll("section");!function(){var n,r=(n=regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=0;case 1:if(!(r<=t.length-1)){n.next=8;break}return t[r].classList.remove("hide-section"),n.next=5,o(10);case 5:r++,n.next=1;break;case 8:case"end":return n.stop()}}),n)})),function(){var t=this,r=arguments;return new Promise((function(o,i){var c=n.apply(t,r);function u(t){e(c,o,i,u,a,"next",t)}function a(t){e(c,o,i,u,a,"throw",t)}u(void 0)}))});return function(){return r.apply(this,arguments)}}()()}),3e3)},function(t,n,r){var e=r(2),o=r(23),i=r(29);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,r){var e={};e[r(3)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(4),o=r(5),i=r(19),c=r(20),u=r(21),a=r(22),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},function(t,n,r){var e=r(6),o=r(7);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.2",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t){t.exports=!1},function(t,n,r){var e=r(4),o=r(8),i="__core-js_shared__",c=e[i]||o(i,{});t.exports=c},function(t,n,r){var e=r(4),o=r(9);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(10),o=r(12),i=r(18);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(11);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(10),o=r(13),i=r(16),c=r(17),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(10),o=r(11),i=r(14);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(4),o=r(15),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(15);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(15);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,n,r){var e=r(11);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(21);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(4),o=r(9),i=r(19),c=r(8),u=r(24),a=r(25),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,h=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(a=s(r)).source||(a.source=l.join("string"==typeof n?n:""))),t!==e?(f?!h&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,r){var e=r(7),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e,o,i,c=r(26),u=r(4),a=r(15),f=r(9),s=r(19),l=r(7),p=r(27),h=r(28),v=u.WeakMap;if(c){var y=l.state||(l.state=new v),d=y.get,g=y.has,m=y.set;e=function(t,n){return n.facade=t,m.call(y,t,n),n},o=function(t){return d.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var x=p("state");h[x]=!0,e=function(t,n){return n.facade=t,f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(4),o=r(24),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(5),o=r(20),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t){t.exports={}},function(t,n,r){"use strict";var e=r(2),o=r(30);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,r){var e=r(2),o=r(31),i=r(3)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:c?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,n,r){"use strict";var e,o,i,c,u=r(33),a=r(6),f=r(4),s=r(41),l=r(52),p=r(23),h=r(53),v=r(54),y=r(55),d=r(15),g=r(56),m=r(57),x=r(24),w=r(58),b=r(64),j=r(65),S=r(66).set,E=r(71),O=r(73),L=r(75),T=r(74),P=r(76),_=r(25),k=r(51),M=r(3),N=r(70),I=r(77),F=M("species"),A="Promise",R=_.get,q=_.set,G=_.getterFor(A),z=l,C=f.TypeError,D=f.document,U=f.process,W=s("fetch"),Y=T.f,B=Y,K=!!(D&&D.createEvent&&f.dispatchEvent),H="function"==typeof PromiseRejectionEvent,V="unhandledrejection",J=k(A,(function(){if(!(x(z)!==String(z))){if(66===I)return!0;if(!N&&!H)return!0}if(a&&!z.prototype.finally)return!0;if(I>=51&&/native code/.test(z))return!1;var t=z.resolve(1),n=function(t){t((function(){}),(function(){}))};return(t.constructor={})[F]=n,!(t.then((function(){}))instanceof n)})),Q=J||!b((function(t){z.all(t).catch((function(){}))})),X=function(t){var n;return!(!d(t)||"function"!=typeof(n=t.then))&&n},Z=function(t,n){if(!t.notified){t.notified=!0;var r=t.reactions;E((function(){for(var e=t.value,o=1==t.state,i=0;r.length>i;){var c,u,a,f=r[i++],s=o?f.ok:f.fail,l=f.resolve,p=f.reject,h=f.domain;try{s?(o||(2===t.rejection&&rt(t),t.rejection=1),!0===s?c=e:(h&&h.enter(),c=s(e),h&&(h.exit(),a=!0)),c===f.promise?p(C("Promise-chain cycle")):(u=X(c))?u.call(c,l,p):l(c)):p(e)}catch(t){h&&!a&&h.exit(),p(t)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&tt(t)}))}},$=function(t,n,r){var e,o;K?((e=D.createEvent("Event")).promise=n,e.reason=r,e.initEvent(t,!1,!0),f.dispatchEvent(e)):e={promise:n,reason:r},!H&&(o=f["on"+t])?o(e):t===V&&L("Unhandled promise rejection",r)},tt=function(t){S.call(f,(function(){var n,r=t.facade,e=t.value;if(nt(t)&&(n=P((function(){N?U.emit("unhandledRejection",e,r):$(V,r,e)})),t.rejection=N||nt(t)?2:1,n.error))throw n.value}))},nt=function(t){return 1!==t.rejection&&!t.parent},rt=function(t){S.call(f,(function(){var n=t.facade;N?U.emit("rejectionHandled",n):$("rejectionhandled",n,t.value)}))},et=function(t,n,r){return function(e){t(n,e,r)}},ot=function(t,n,r){t.done||(t.done=!0,r&&(t=r),t.value=n,t.state=2,Z(t,!0))},it=function(t,n,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===n)throw C("Promise can't be resolved itself");var e=X(n);e?E((function(){var r={done:!1};try{e.call(n,et(it,r,t),et(ot,r,t))}catch(n){ot(r,n,t)}})):(t.value=n,t.state=1,Z(t,!1))}catch(n){ot({done:!1},n,t)}}};J&&(z=function(t){m(this,z,A),g(t),e.call(this);var n=R(this);try{t(et(it,n),et(ot,n))}catch(t){ot(n,t)}},(e=function(t){q(this,{type:A,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=h(z.prototype,{then:function(t,n){var r=G(this),e=Y(j(this,z));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=N?U.domain:void 0,r.parent=!0,r.reactions.push(e),0!=r.state&&Z(r,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e,n=R(t);this.promise=t,this.resolve=et(it,n),this.reject=et(ot,n)},T.f=Y=function(t){return t===z||t===i?new o(t):B(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var r=this;return new z((function(t,n){c.call(r,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof W&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(z,W.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:J},{Promise:z}),v(z,A,!1,!0),y(A),i=s(A),u({target:A,stat:!0,forced:J},{reject:function(t){var n=Y(this);return n.reject.call(void 0,t),n.promise}}),u({target:A,stat:!0,forced:a||J},{resolve:function(t){return O(a&&this===i?z:this,t)}}),u({target:A,stat:!0,forced:Q},{all:function(t){var n=this,r=Y(n),e=r.resolve,o=r.reject,i=P((function(){var r=g(n.resolve),i=[],c=0,u=1;w(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,r.call(n,t).then((function(t){f||(f=!0,i[a]=t,--u||e(i))}),o)})),--u||e(i)}));return i.error&&o(i.value),r.promise},race:function(t){var n=this,r=Y(n),e=r.reject,o=P((function(){var o=g(n.resolve);w(t,(function(t){o.call(n,t).then(r.resolve,e)}))}));return o.error&&e(o.value),r.promise}})},function(t,n,r){var e=r(4),o=r(34).f,i=r(9),c=r(23),u=r(8),a=r(39),f=r(51);t.exports=function(t,n){var r,s,l,p,h,v=t.target,y=t.global,d=t.stat;if(r=y?e:d?e[v]||u(v,{}):(e[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(h=o(r,s))&&h.value:r[s],!f(y?s:v+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n,r){var e=r(10),o=r(35),i=r(18),c=r(36),u=r(17),a=r(19),f=r(13),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},function(t,n,r){var e=r(37),o=r(38);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(11),o=r(31),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(19),o=r(40),i=r(34),c=r(12);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){var e=r(41),o=r(43),i=r(50),c=r(16);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(42),o=r(4),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(4);t.exports=e},function(t,n,r){var e=r(44),o=r(49).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(19),o=r(36),i=r(45).indexOf,c=r(28);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(36),o=r(46),i=r(48),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,r){var e=r(47),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,n,r){var e=r(47),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(11),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(4);t.exports=e.Promise},function(t,n,r){var e=r(23);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},function(t,n,r){var e=r(12).f,o=r(19),i=r(3)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){"use strict";var e=r(41),o=r(12),i=r(3),c=r(10),u=i("species");t.exports=function(t){var n=e(t),r=o.f;c&&n&&!n[u]&&r(n,u,{configurable:!0,get:function(){return this}})}},function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t){t.exports=function(t,n,r){if(!(t instanceof n))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},function(t,n,r){var e=r(16),o=r(59),i=r(46),c=r(61),u=r(62),a=r(63),f=function(t,n){this.stopped=t,this.result=n};t.exports=function(t,n,r){var s,l,p,h,v,y,d,g=r&&r.that,m=!(!r||!r.AS_ENTRIES),x=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),b=c(n,g,1+m+w),j=function(t){return s&&a(s),new f(!0,t)},S=function(t){return m?(e(t),w?b(t[0],t[1],j):b(t[0],t[1])):w?b(t,j):b(t)};if(x)s=t;else{if("function"!=typeof(l=u(t)))throw TypeError("Target is not iterable");if(o(l)){for(p=0,h=i(t.length);h>p;p++)if((v=S(t[p]))&&v instanceof f)return v;return new f(!1)}s=l.call(t)}for(y=s.next;!(d=y.call(s)).done;){try{v=S(d.value)}catch(t){throw a(s),t}if("object"==typeof v&&v&&v instanceof f)return v}return new f(!1)}},function(t,n,r){var e=r(3),o=r(60),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t){t.exports={}},function(t,n,r){var e=r(56);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(30),o=r(60),i=r(3)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(16);t.exports=function(t){var n=t.return;if(void 0!==n)return e(n.call(t)).value}},function(t,n,r){var e=r(3)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){var e=r(16),o=r(56),i=r(3)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},function(t,n,r){var e,o,i,c=r(4),u=r(11),a=r(61),f=r(67),s=r(14),l=r(68),p=r(70),h=c.location,v=c.setImmediate,y=c.clearImmediate,d=c.process,g=c.MessageChannel,m=c.Dispatch,x=0,w={},b="onreadystatechange",j=function(t){if(w.hasOwnProperty(t)){var n=w[t];delete w[t],n()}},S=function(t){return function(){j(t)}},E=function(t){j(t.data)},O=function(t){c.postMessage(t+"",h.protocol+"//"+h.host)};v&&y||(v=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return w[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},e(x),x},y=function(t){delete w[t]},p?e=function(t){d.nextTick(S(t))}:m&&m.now?e=function(t){m.now(S(t))}:g&&!l?(i=(o=new g).port2,o.port1.onmessage=E,e=a(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&h&&"file:"!==h.protocol&&!u(O)?(e=O,c.addEventListener("message",E,!1)):e=b in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),j(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:v,clear:y}},function(t,n,r){var e=r(41);t.exports=e("document","documentElement")},function(t,n,r){var e=r(69);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(e)},function(t,n,r){var e=r(41);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(31),o=r(4);t.exports="process"==e(o.process)},function(t,n,r){var e,o,i,c,u,a,f,s,l=r(4),p=r(34).f,h=r(66).set,v=r(68),y=r(72),d=r(70),g=l.MutationObserver||l.WebKitMutationObserver,m=l.document,x=l.process,w=l.Promise,b=p(l,"queueMicrotask"),j=b&&b.value;j||(e=function(){var t,n;for(d&&(t=x.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},v||d||y||!g||!m?w&&w.resolve?(f=w.resolve(void 0),s=f.then,c=function(){s.call(f,e)}):c=d?function(){x.nextTick(e)}:function(){h.call(l,e)}:(u=!0,a=m.createTextNode(""),new g(e).observe(a,{characterData:!0}),c=function(){a.data=u=!u})),t.exports=j||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,r){var e=r(69);t.exports=/web0s(?!.*chrome)/i.test(e)},function(t,n,r){var e=r(16),o=r(15),i=r(74);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){"use strict";var e=r(56),o=function(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)};t.exports.f=function(t){return new o(t)}},function(t,n,r){var e=r(4);t.exports=function(t,n){var r=e.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,n))}},function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,r){var e,o,i=r(4),c=r(69),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t){var n=function(t){"use strict";var n,r=Object.prototype,e=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{a({},"")}catch(t){a=function(t,n,r){return t[n]=r}}function f(t,n,r,e){var o=n&&n.prototype instanceof d?n:d,i=Object.create(o.prototype),c=new P(e||[]);return i._invoke=function(t,n,r){var e=l;return function(o,i){if(e===h)throw new Error("Generator is already running");if(e===v){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=h;var a=s(t,n,r);if("normal"===a.type){if(e=r.done?v:p,a.arg===y)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(e=v,r.method="throw",r.arg=a.arg)}}}(t,r,c),i}function s(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",y={};function d(){}function g(){}function m(){}var x={};x[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(_([])));b&&b!==r&&e.call(b,i)&&(x=b);var j=m.prototype=d.prototype=Object.create(x);function S(t){["next","throw","return"].forEach((function(n){a(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){function r(o,i,c,u){var a=s(t[o],t,i);if("throw"!==a.type){var f=a.arg,l=f.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(a.arg)}var o;this._invoke=function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var e=t.iterator[r.method];if(e===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=n,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=n,r.done=!0,r};return c.next=c}}return{next:k}}function k(){return{value:n,done:!0}}return g.prototype=j.constructor=m,m.constructor=g,g.displayName=a(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,a(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},S(E.prototype),E.prototype[c]=function(){return this},t.AsyncIterator=E,t.async=function(n,r,e,o,i){void 0===i&&(i=Promise);var c=new E(f(n,r,e,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(j),a(j,u,"Generator"),j[i]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},t.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return u.type="throw",u.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var a=e.call(c,"catchLoc"),f=e.call(c,"finallyLoc");if(a&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),y}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}],n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(0)}();
//# sourceMappingURL=initAnimation-dist.js.map