(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1183:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var i=a>=0?arguments[a]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,o="/"===i.charAt(0))}return(o?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var a=t.isAbsolute(e),i="/"===o(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!a).join("/"))||a||(e="."),e&&i&&(e+="/"),(a?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),a=r(n.split("/")),i=Math.min(o.length,a.length),s=i,c=0;c<i;c++)if(o[c]!==a[c]){s=c;break}var u=[];for(c=s;c<o.length;c++)u.push("..");return(u=u.concat(a.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!o){r=a;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,a=0,i=e.length-1;i>=0;--i){var s=e.charCodeAt(i);if(47!==s)-1===r&&(o=!1,r=i+1),46===s?-1===t?t=i:1!==a&&(a=1):-1!==t&&(a=-1);else if(!o){n=i+1;break}}return-1===t||-1===r||0===a||1===a&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(302))},1222:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),s=n(11),c=n.n(s),u=n(925),l=n(602),f=n(8),m=n(714),p=n(1216),g=n(5),d=n(587),h=n(296),v=n(575),b=(n(1183),function(e){var t=e.value,n=e.isLoading,r=e.onChange,a=e.onSubmit,i=e.classes,s=Object.values(t).every((function(e){return""!==e}));return o.a.createElement("div",null,o.a.createElement("form",{className:i.container,onSubmit:a},o.a.createElement(d.a,{label:"Username",value:t.username,name:"username",onChange:r,margin:"normal",fullWidth:!0,autoFocus:!0,autoComplete:"off"}),o.a.createElement(d.a,{label:"Password",value:t.password,name:"password",onChange:r,margin:"normal",fullWidth:!0,type:"password",onBlur:function(){document.getElementById("login").focus()}}),o.a.createElement("p",{className:i.forgotContainer},o.a.createElement(p.a,{to:"/forgotPassword"},"Forgot Password?")),o.a.createElement(h.a,{onClick:a,variant:"contained",color:"primary",fullWidth:!0,className:i.button,disabled:!s,type:"submit",id:"login"},n?o.a.createElement(v.a,{size:20}):"Login")),o.a.createElement("div",{style:{position:"fixed",bottom:"10px",right:"217px"}}," Powered by: "),o.a.createElement("div",{style:{position:"fixed",bottom:"-5px",right:"10px"}},o.a.createElement("img",{src:"/images/A1AbilitiesLogo.jpeg",alt:"A1abilities",className:i.a1Logo})))});b.propTypes={value:i.a.object,isLoading:i.a.bool,onChange:i.a.func,onSubmit:i.a.func,classes:i.a.object};var y=Object(g.a)((function(e){return{container:{backgroundColor:"#fff",padding:"".concat(1.5*e.margin,"px ").concat(e.margin,"px"),width:450,borderRadius:6,margin:"0 auto"},button:{borderColor:e.palette.primary.main,marginTop:e.spacing(4),backgroundColor:"#20a8d8",color:"white"},forgotContainer:{textAlign:"right",fontSize:e.typography.pxToRem(12),color:"#20a8d8"},a1Logo:{width:200,heading:200,objectFit:"cover"}}}))(b),k=n(715);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){S(a,r,o,i,s,"next",e)}function s(e){S(a,r,o,i,s,"throw",e)}i(void 0)}))}}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #ffffff;\n"]);return R=function(){return e},e}var A=u.a.section(R()),L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(i,e);var t,n,r,a=I(i);function i(){var e;j(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return P(E(e=a.call.apply(a,[this].concat(n))),"isTokenSource",c.a.CancelToken.source()),P(E(e),"state",{form:{username:"",password:""},isLoading:!1,isSnackbarOpen:!1,snackbarMessage:""}),P(E(e),"onHandleChangeForm",(function(t){var n=e.state.form;n[t.target.name]=t.target.value,e.setState({form:n})})),P(E(e),"onHandleSubmitForm",function(){var t=T(regeneratorRuntime.mark((function t(n){var r,o,a,i,s,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.props.history,o=e.state.form,!Object.values(o).every((function(e){return""===e}))){t.next=6;break}return t.abrupt("return");case 6:return t.prev=6,e.setState({isLoading:!0}),t.next=10,m.a.onLogin({cancelToken:e.isTokenSource.token,username:o.username,password:o.password});case 10:a=t.sent,e.setState({isLoading:!1}),f.c.set({token:a.token,refreshToken:"",roleName:a.role_name,role_id:a.role_id,franchiseId:a.franchise_id,userName:a.user_name,userId:a.user_id,uid:a.uid}),r.push("/auth"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),c.a.isCancel(t.t0)?console.log("Request canceled",t.t0.message):(i=t.t0.response.data,s=i.message,401!==(u=i.errorCode)&&500!==u||e.onToggleSnackbar({message:s}),e.setState({isLoading:!1}));case 19:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(e){return t.apply(this,arguments)}}()),P(E(e),"onToggleSnackbar",(function(t){var n=t.message,r=void 0===n?"Error":n;e.setState((function(e){return{isSnackbarOpen:!e.isSnackbarOpen,snackbarMessage:r}}))})),e}return t=i,(n=[{key:"componentWillUnmount",value:function(){this.isTokenSource.cancel("API Cancel")}},{key:"render",value:function(){var e=this.state,t=e.form,n=e.isLoading,r=e.isSnackbarOpen,a=e.snackbarMessage;return o.a.createElement(A,null,o.a.createElement(k.a,null),o.a.createElement(y,{value:t,isLoading:n,onChange:this.onHandleChangeForm,onSubmit:this.onHandleSubmitForm}),o.a.createElement(l.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:6e3,onClose:this.onToggleSnackbar,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("span",{id:"message-id"},a)}))}}])&&O(t.prototype,n),r&&O(t,r),i}(r.Component);L.propTypes={history:i.a.object};t.default=L},714:function(e,t,n){"use strict";var r=n(11),o=n.n(r),a=n(8);function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,c,"next",e)}function c(e){s(a,r,o,i,c,"throw",e)}i(void 0)}))}}var u,l,f,m,p=function(e){var t=e.methodType;return{method:void 0===t?"GET":t,headers:{"Content-Type":"application/json"}}};t.a={onLogin:(m=c(regeneratorRuntime.mark((function e(t){var n,r,s,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cancelToken,r=i(t,["cancelToken"]),s="".concat(a.a,"/api/auth/login"),e.prev=2,e.next=5,o()(s,Object.assign({},p({methodType:"POST"}),{cancelToken:n,data:r}));case 5:return c=e.sent,u=c.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),function(e){return m.apply(this,arguments)}),onValidate:(f=c(regeneratorRuntime.mark((function e(t){var n,r,i,s,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cancelToken,r=t.accessToken,i="".concat(a.a,"/something"),e.prev=2,e.next=5,o()(i,{method:"GET",headers:{access_token:r},cancelToken:n});case 5:return s=e.sent,c=s.data,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),function(e){return f.apply(this,arguments)}),onRefresh:(l=c(regeneratorRuntime.mark((function e(t){var n,r,s,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cancelToken,r=i(t,["cancelToken"]),s="".concat(a.a,"/something"),e.prev=2,e.next=5,o()(s,Object.assign({},p({methodType:"POST"}),{cancelToken:n,data:r}));case 5:return c=e.sent,u=c.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),function(e){return l.apply(this,arguments)}),onForgotPassword:(u=c(regeneratorRuntime.mark((function e(t){var n,r,s,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cancelToken,r=i(t,["cancelToken"]),s="".concat(a.a,"/api/auth/forgotPassword"),e.prev=2,e.next=5,o()(s,Object.assign({},p({methodType:"POST"}),{cancelToken:n,data:r}));case 5:return c=e.sent,u=c.data,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e.catch(2),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),function(e){return u.apply(this,arguments)})}},715:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(2),i=n.n(a),s=n(5),c=function(e){var t=e.classes;return o.a.createElement(r.Fragment,null,o.a.createElement("img",{src:"/images/logo_transparent.png",alt:"app logo",className:t.logo}))};c.propTypes={classes:i.a.object},t.a=Object(s.a)((function(e){return{heading:{color:"#fff",textAlign:"center",marginBottom:2*e.margin},logo:{width:380,heading:200,objectFit:"cover",marginBottom:2*e.margin}}}))(c)},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a}));var r="http://fme.a1abilities.co.nz",o="http://fme.a1abilities.co.nz",a={set:function(e){var t=e.token,n=e.refreshToken,r=e.roleName,o=e.role_id,a=e.franchiseId,i=e.userName,s=e.userId,c=e.uid;sessionStorage.setItem("token",t),sessionStorage.setItem("refresh_token",n),sessionStorage.setItem("role_name",r),sessionStorage.setItem("role_id",o),sessionStorage.setItem("franchise_id",a),sessionStorage.setItem("user_name",i),sessionStorage.setItem("user_id",s),sessionStorage.setItem("uid",c)},remove:function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("refresh_token"),sessionStorage.removeItem("role_name"),sessionStorage.removeItem("role_id"),sessionStorage.removeItem("user_name"),sessionStorage.removeItem("user_id"),sessionStorage.removeItem("uid"),sessionStorage.removeItem("franchise_id")},get:function(){return{token:sessionStorage.getItem("token"),refreshToken:sessionStorage.getItem("refresh_token"),roleName:sessionStorage.getItem("role_name"),role_id:sessionStorage.getItem("role_id"),franchiseId:sessionStorage.getItem("franchise_id"),userName:sessionStorage.getItem("user_name"),userId:sessionStorage.getItem("user_id"),uid:sessionStorage.getItem("uid")}},get notEmpty(){var e=null!==this.get().token,t=""!==this.get().token;return e&&t}}}}]);