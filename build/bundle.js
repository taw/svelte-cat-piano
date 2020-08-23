var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function l(){return t=" ",document.createTextNode(t);var t}function f(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function d(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let m;function h(t){m=t}const g=[],_=[],w=[],y=[],$=Promise.resolve();let b=!1;function v(t){w.push(t)}let A=!1;const x=new Set;function k(){if(!A){A=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];h(n),E(n.$$)}for(g.length=0;_.length;)_.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];x.has(n)||(x.add(n),n())}w.length=0}while(g.length);for(;y.length;)y.pop()();b=!1,A=!1,x.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const M=new Set;function C(t,n){-1===t.$$.dirty[0]&&(g.push(t),b||(b=!0,$.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function K(u,c,i,s,l,f,d=[-1]){const p=m;h(u);const g=c.props||{},_=u.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:e(),dirty:d};let w=!1;if(_.ctx=i?i(u,g,(t,n,...e)=>{const o=e.length?e[0]:n;return _.ctx&&l(_.ctx[t],_.ctx[t]=o)&&(_.bound[t]&&_.bound[t](o),w&&C(u,t)),n}):[],_.update(),w=!0,o(_.before_update),_.fragment=!!s&&s(_.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);_.fragment&&_.fragment.l(t),t.forEach(a)}else _.fragment&&_.fragment.c();c.intro&&((y=u.$$.fragment)&&y.i&&(M.delete(y),y.i($))),function(t,e,u){const{fragment:c,on_mount:i,on_destroy:a,after_update:s}=t.$$;c&&c.m(e,u),v(()=>{const e=i.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]}),s.forEach(v)}(u,c.target,c.anchor),k()}var y,$;h(p)}function T(t,n){if(!Array.isArray(t))throw new Error("shuffle expect an array as parameter.");n=n||{};var e,o,r=t,u=t.length,c=n.rng||Math.random;for(!0===n.copy&&(r=t.slice());u;)e=Math.floor(c()*u),o=r[u-=1],r[u]=r[e],r[e]=o;return r}T.pick=function(t,n){if(!Array.isArray(t))throw new Error("shuffle.pick() expect an array as parameter.");var e=(n=n||{}).rng||Math.random,o=n.picks||1;if("number"==typeof o&&1!==o){for(var r,u=t.length,c=t.slice(),i=[];o&&u;)r=Math.floor(e()*u),i.push(c[r]),c.splice(r,1),u-=1,o-=1;return i}return t[Math.floor(e()*t.length)]};var B=T;function L(t,n,e){const o=t.slice();return o[7]=n[e],o[9]=e,o}function N(t){let n,e,r,u,m,h;function g(...n){return t[5](t[9],...n)}function _(...n){return t[6](t[9],...n)}return{c(){n=s("div"),e=s("div"),u=l(),p(e,"class","blackKey svelte-1p4naxg"),p(e,"tabindex",r=200+t[9]),p(n,"class","whiteKey svelte-1p4naxg"),p(n,"tabindex",m=100+t[9])},m(t,r,a){i(t,n,r),c(n,e),c(n,u),a&&o(h),h=[f(e,"click",d(g)),f(n,"click",d(_))]},p(n,e){t=n},d(t){t&&a(n),o(h)}}}function O(n){let e,o=n[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=N(L(n,o,t));return{c(){e=s("div");for(let t=0;t<r.length;t+=1)r[t].c();p(e,"class","container svelte-1p4naxg")},m(t,n){i(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,[n]){if(7&n){let u;for(o=t[0],u=0;u<o.length;u+=1){const c=L(t,o,u);r[u]?r[u].p(c,n):(r[u]=N(c),r[u].c(),r[u].m(e,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=o.length}},i:t,o:t,d(t){t&&a(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function S(t,n,e){let o=[new Audio("sounds/Kitten_Meow-SoundBible.com-1295572573.mp3"),new Audio("sounds/110011__tuberatanka__cat-meow.mp3"),new Audio("sounds/362652__trngle__cat-meow.mp3"),new Audio("sounds/446025__sophiemezam__meow.mp3"),new Audio("sounds/Cat-meow-noise.mp3"),new Audio("sounds/Cat-meowing-loudly.mp3"),new Audio("sounds/Cute-cat-meowing-on-the-street.mp3"),new Audio("sounds/Kitty-meows.mp3"),new Audio("sounds/Meowing-cat-sound.mp3"),new Audio("sounds/Original-cat-sound.mp3"),new Audio("sounds/528192__fthgurdy__cat-meow-5.mp3"),new Audio("sounds/448084__breviceps__cute-kitten-meow.mp3")];B(o);let r=o.slice(0,8),u=o.slice(8,12);function c(t){console.log("WHITE",t),e(0,r[t].volume=.1,r),e(0,r[t].currentTime=0,r),r[t].play()}function i(t){console.log("BLACK",t),u[t].volume=.1,u[t].currentTime=0,u[t].play()}return[r,c,i,u,o,t=>i(Math.floor(t/2)),t=>c(t)]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),K(this,t,S,O,u,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
