(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[21],{748:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},745:function(t){t.exports=function(t){if(Array.isArray(t))return t}},791:function(t){function e(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(i,o){var a=t.apply(n,r);function s(t){e(a,i,o,s,c,"next",t)}function c(t){e(a,i,o,s,c,"throw",t)}s(void 0)}))}}},746:function(t){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}},749:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},744:function(t,e,n){var r=n(745),i=n(746),o=n(747),a=n(749);t.exports=function(t,e){return r(t)||i(t,e)||o(t,e)||a()}},747:function(t,e,n){var r=n(748);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},790:function(t,e,n){t.exports=n(288)},814:function(t,e,n){"use strict";var r=n(734),i=n(662);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(705)),a=i(n(790)),s=i(n(791)),c=i(n(706)),u=r(n(352)),f=i(n(646)),d=i(n(737)),h=n(665),l=f.default.input.withConfig({displayName:"FileInput__HiddenInput",componentId:"sc-1jkxgvh-0"})(["opacity:0;visibility:hidden;position:absolute;cursor:pointer;width:0;left:0;"]),p=function(t,e){var n=t.children,r=t.id,i=void 0===r?"rm-file-upload":r,f=t.readFileData,p=void 0===f||f,v=t.dropFile,b=void 0!==v&&v,_=t.name,m=t.onChange,y=t.disabled,g=t.textStyle,w=(0,c.default)(t,["children","id","readFileData","dropFile","name","onChange","disabled","textStyle"]),O=function(){var t=(0,s.default)(a.default.mark((function t(e){var n,r;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.target.files){t.next=2;break}return t.abrupt("return");case 2:if(n=e.target.files[0],!p){t.next=9;break}return t.next=6,(0,h.readFile)(n);case 6:t.t0=t.sent,t.next=10;break;case 9:t.t0=null;case 10:r=t.t0,m(n,r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=(0,s.default)(a.default.mark((function t(e){var n,r;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!e.dataTransfer.files||!e.dataTransfer.files.length){t.next=12;break}if(n=e.dataTransfer.files[0],!p){t.next=9;break}return t.next=6,(0,h.readFile)(n);case 6:t.t0=t.sent,t.next=10;break;case 9:t.t0=null;case 10:r=t.t0,m(n,r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return u.createElement(d.default,(0,o.default)({ref:e,as:"label",htmlFor:i,disabled:y,cursor:"pointer",onDrop:function(t){return b&&E(t)},onDragOver:function(t){return b&&t.preventDefault()}},g),n,u.createElement(l,(0,o.default)({type:"file",name:_||i,id:i,onChange:O,disabled:y},w)))},v=u.forwardRef(p);e.default=v},813:function(t,e,n){"use strict";var r=n(734);Object.defineProperty(e,"__esModule",{value:!0});var i={};Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(814));Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(i,t)||t in e&&e[t]===o[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}}))}))},797:function(t,e,n){"use strict";var r=n(734),i=n(662);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.loadingIndicatorSizes=void 0;var o=i(n(646)),a=r(n(352)),s=n(697),c=n(663),u={small:22,medium:48,big:56};e.loadingIndicatorSizes=u;var f=(0,o.default)(s.Box).withConfig({displayName:"LoadingIndicator___StyledBox",componentId:"sc-1tx9gxx-0"})(["animation:loadingindicatoranimation 2s infinite linear;@keyframes loadingindicatoranimation{from{transform:rotateZ(0deg);}to{transform:rotateZ(360deg);}}"]),d=function(t){var e=t.size,n=t.bgColor,r=t.color;return a.createElement(s.Flex,{alignItems:"center",justifyContent:"center",bg:n||("big"===e||"medium"===e?"tomato":"transparent"),size:"number"==typeof e?"".concat(e,"px"):e&&u[e]?u[e]:u.big,borderRadius:"round"},a.createElement(f,{border:"2px solid",size:"big"===e||"medium"===e?"50%":"100%",borderRadius:"round",borderColor:r?"".concat(r," ").concat(r," transparent transparent"):"big"===e||"medium"===e||"number"==typeof e?"white white transparent transparent":"".concat(c.colors.tomato," ").concat(c.colors.tomato," transparent transparent")}))};d.defaultProps={size:"big"};var h=d;e.default=h},796:function(t,e,n){"use strict";var r=n(734);Object.defineProperty(e,"__esModule",{value:!0});var i={};Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}});var o=r(n(797));Object.keys(o).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(i,t)||t in e&&e[t]===o[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}}))}))},820:function(t,e,n){"use strict";var r=n(662);Object.defineProperty(e,"__esModule",{value:!0}),e.useResizeEffect=void 0;var i=r(n(744)),o=n(352),a=r(n(821)),s=function(t){return t?{width:t.offsetWidth,height:t.offsetHeight,scrollWidth:t.scrollWidth,scrollHeight:t.scrollHeight,offsetWidth:t.offsetWidth,offsetHeight:t.offsetHeight}:{width:0,height:0,scrollWidth:0,scrollHeight:0,offsetWidth:0,offsetHeight:0}};e.useResizeEffect=function(t,e){var n=(0,o.useState)(s(t.current)),r=(0,i.default)(n,2),c=r[0],u=r[1],f=(0,o.useCallback)((function(){t.current&&u(s(t.current))}),[t]);return(0,o.useLayoutEffect)((function(){if(t.current){f();var n=new a.default((function(){f()}));return e?n.unobserve(t.current):n.observe(t.current),function(){n.disconnect()}}}),[t,f,e]),c}},821:function(t,e,n){"use strict";n.r(e);var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function s(){a(o)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},h=m(0,0,0,0);function l(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+l(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return h;var r=d(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=l(o)}return e}(r),o=i.left+i.right,a=i.top+i.bottom,s=l(r.width),c=l(r.height);if("border-box"===r.boxSizing&&(Math.round(s+o)!==e&&(s-=p(r,"left","right")+o),Math.round(c+a)!==n&&(c-=p(r,"top","bottom")+a)),!function(t){return t===d(t).document.documentElement}(t)){var u=Math.round(s+o)-e,f=Math.round(c+a)-n;1!==Math.abs(u)&&(s-=u),1!==Math.abs(f)&&(c-=f)}return m(i.left,i.top,s,c)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function _(t){return i?b(t)?function(t){var e=t.getBBox();return m(0,0,e.width,e.height)}(t):v(t):h}function m(t,e,n,r){return{x:t,y:e,width:n,height:r}}var y=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),g=function(t,e){var n,r,i,o,a,s,c,u=(r=(n=e).x,i=n.y,o=n.width,a=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(s.prototype),f(c,{x:r,y:i,width:o,height:a,top:i,right:r+o,bottom:a+i,left:r}),c);f(this,{target:t,contentRect:u})},w=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new g(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),O="undefined"!=typeof WeakMap?new WeakMap:new r,E=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new w(e,n,this);O.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){E.prototype[t]=function(){var e;return(e=O.get(this))[t].apply(e,arguments)}}));var x=void 0!==o.ResizeObserver?o.ResizeObserver:E;e.default=x}}]);