!function(){"use strict";!function(){var t=Math.PI;function e(t){throw new Error(t)}var n=Array.prototype,r=n.slice,i=function(){},o=i,a={},s=Date.now||function(){return(new Date).getTime()},c=navigator.userAgent;function u(t){return t.test(c)}window.addEventListener;var l=u(/iPhone/),d=l||u(/iPad/),h=(u(/Android/),u(/Windows Phone/),u(/Android [2-4]/)),f=u(/; wv\) |Gecko\) Version\/[^ ]+ Chrome|Windows Phone|Opera Mini|UCBrowser|FBAN|CriOS/)||d||h&&!u(/Chrome/),p=(u(/(Windows Phone|\(iP.+UCBrowser\/)/),u(/iPhone|Android 2\./),u(/Windows Phone/),c.match(/Chrome\/(\d+)/));p&&(p=parseInt(p[1],10));u(/Android/),u(/iPhone OS 7/);function m(t){return"boolean"==typeof t}function v(t){return"number"==typeof t}function g(t){return"function"==typeof t}function y(t){return"string"==typeof t}function b(t){return t&&"object"==typeof t}function w(t,e,n){var r;if(arguments.length<3&&(n=this),t)if(void 0!==t.length)for(r=0;r<t.length;r++)e.call(n,r,t[r]);else for(r in t)t.hasOwnProperty(r)&&e.call(n,r,t[r])}function k(t,e,n){y(t)&&(t=e[t]);var i=arguments;return i.length>=3?function(){t.apply(e,r.call(i,2))}:function(){return t.apply(e,arguments)}}function M(t,e){if(1===arguments.length&&(e=0),arguments.length<3)setTimeout(t,e);else{var n=arguments;setTimeout(function(){t.apply(null,r.call(n,2))},e)}}function x(t,e,n,r){if(v(r))return setTimeout(function(){x(t,e,n)},r);if(y(t)&&(t=e&&e[t]),g(t)){e||(e=this);try{return arguments.length>=3?t.call(e,n):t.call(e)}catch(t){i("invoke",t)}}}var N=k(JSON.stringify,JSON),C=k(document.querySelector,document),_=k(document.querySelectorAll,document);k(document.getElementById,document);function A(t,e,n,r){if(!y(r)){if("get"===n)return r||(r=window),void(r.location=t);r&&(r=r.name)}var i=document.createElement("form");i.setAttribute("action",t),n&&i.setAttribute("method",n),r&&i.setAttribute("target",r),e&&(i.innerHTML=S(e)),Y.appendChild(i),i.submit(),Y.removeChild(i)}function S(t,e){if(b(t)){var n="";return w(t,function(t,r){e&&(t=e+"["+t+"]"),n+=S(r,t)}),n}return'<input type="hidden" name="'+e+'" value="'+t+'">'}var T,D=function(t){return y(t)?D(document.querySelector(t)):this instanceof D?void(this[0]=t):new D(t)};function R(e){!function(e){if(!window.requestAnimationFrame)return scrollBy(0,e);T&&clearTimeout(T);T=setTimeout(function(){var n=pageYOffset,r=Math.min(n+e,D(G).height()-innerHeight);e=r-n;var i=0,o=performance.now();requestAnimationFrame(function a(s){i+=(s-o)/300;if(i>=1)return scrollTo(0,r);var c=Math.sin(t*i/2);scrollTo(0,n+Math.round(e*c));o=s;requestAnimationFrame(a)})},100)}(e-pageYOffset)}D.prototype={on:function(t,e,n,r){var i,o=this[0];if(o&&(y(e)&&(e=r[e]),g(e))){var a=window.addEventListener;return i=a?function(t){return 3===t.target.nodeType&&(t.target=t.target.parentNode),e.call(r||this,t)}:function(t){return t||(t=window.event),t.target||(t.target=t.srcElement||document),t.preventDefault||(t.preventDefault=function(){this.returnValue=!1}),t.stopPropagation||(t.stopPropagation=t.preventDefault),t.currentTarget||(t.currentTarget=o),e.call(r||o,t)},w(t.split(" "),function(t,e){a?o.addEventListener(e,i,!!n):o.attachEvent("on"+e,i)}),k(function(){this.off(t,i,n)},this)}},off:function(t,e,n){window.removeEventListener?this[0].removeEventListener(t,e,!!n):window.detachEvent&&this[0].detachEvent("on"+t,e)},prop:function(t,e){var n=this[0];return 1===arguments.length?n&&n[t]:n?(n&&(n[t]=e),this):""},attr:function(t,e){if(b(t))return w(t,function(t,e){this.attr(t,e)},this),this;var n=arguments.length,r=this[0];return 1===n?r&&r.getAttribute(t):(r&&(e?r.setAttribute(t,e):r.removeAttribute(t)),this)},reflow:function(){return this.prop("offsetHeight"),this},remove:function(){try{var t=this[0];t.parentNode.removeChild(t)}catch(t){}return this},append:function(t){this[0].appendChild(t)},hasClass:function(t){return(" "+this[0].className+" ").indexOf(" "+t+" ")>=0},addClass:function(t){var e=this[0];return t&&e&&(e.className?this.hasClass(t)||(e.className+=" "+t):e.className=t),this},removeClass:function(t){var e=this[0];if(e){var n=(" "+e.className+" ").replace(" "+t+" "," ").replace(/^ | $/g,"");e.className!==n&&(e.className=n)}return this},toggleClass:function(t,e){return 1===arguments.length&&(e=!this.hasClass(t)),this[(e?"add":"remove")+"Class"](t)},qs:function(t){var e=this[0];if(e)return e.querySelector(t)},find:function(t){var e=this[0];if(e)return e.querySelectorAll(t)},$:function(t){return D(this.qs(t))},$0:function(){return D(this.firstElementChild)},css:function(t,e){var n=this.prop("style");if(n)if(1===arguments.length){if(!b(t))return n[t];w(t,function(t,e){this.css(t,e)},this)}else try{n[t]=e}catch(t){}return this},bbox:function(){return this[0]?this[0].getBoundingClientRect():a},offht:function(){return this.prop("offsetHeight")},height:function(t){return v(t)&&(t=t.toFixed(2)+"px"),y(t)?this.css("height",t):this[0]?this.bbox().height:void 0},hide:function(){return this.css("display","none")},toggle:function(t){x(t?"show":"hide",this)},show:function(){return this.css("display","block")},parent:function(){return D(this.prop("parentNode"))},val:function(t){return arguments.length?(this[0].value=t,this):this[0].value},html:function(t){return arguments.length?(this[0]&&(this[0].innerHTML=(e=t,L.innerHTML="",L.appendChild(document.createTextNode(e)),L.innerHTML)),this):this[0].innerHTML;var e},focus:function(){if(this[0])try{this[0].focus()}catch(t){}return this},blur:function(){if(this[0])try{this[0].blur()}catch(t){}return this}},D.post=function(t){t.method="post",t.headers||(t.headers={}),t.headers["Content-type"]="application/x-www-form-urlencoded";var e=[];return w(t.data,function(t,n){e.push(t+"="+encodeURIComponent(n))}),t.data=e.join("&"),D.ajax(t)},D.ajax=function(t){var e=new XMLHttpRequest;t.method||(t.method="get"),e.open(t.method,t.url,!0),w(t.headers,function(t,n){e.setRequestHeader(t,n)}),t.callback&&(e.onreadystatechange=function(){if(4===e.readyState&&e.status){var n;try{n=JSON.parse(e.responseText)}catch(t){(n=nt.error("Parsing error")).xhr={status:e.status,text:e.responseText}}t.callback(n)}},e.onerror=function(){var e=nt.error("Network error");e.xhr={status:0},t.callback(e)});var n=t.data||null;return p&&p<=33?x("send",e,n,1e3):e.send(n),e};var L=document.createElement("div");var E=function(t){var e,n,r,i={data:t.data||{},error:t.error||o,success:t.success||o,callback:t.callback||o,url:t.url||""},a=i.url;return a+=i.url.indexOf("?")<0?"?":"&",a+=(e=i.data,n=[],r=window.encodeURIComponent,w(e,function(t,e){n.push(r(t)+"="+r(e))}),n.join("&")),i.computedUrl=a,i};D.jsonp=function(t){t.data||(t.data={});var e=t.data.callback="jsonp_"+Math.random().toString(36).slice(2,15),n=E(t),r=!1;window[e]=function(t){delete t.http_status_code,n.success(t,n),n.callback(t,n);try{delete window[e]}catch(t){window[e]=void 0}};var i=document.createElement("script");return i.src=n.computedUrl,i.async=!0,i.onerror=function(t){n.error({error:!0,url:i.src,event:t}),n.callback({error:!0,url:i.src,event:t},n)},i.onload=i.onreadystatechange=function(){r||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(r=!0,i.onload=i.onreadystatechange=null,D(i).remove(),i=null)},document.documentElement.appendChild(i),{abort:function(){window[e]&&(window[e]=o)}}};var P="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",B=P+"+=",z={};w(P=P.slice(52)+P.slice(0,52),function(t,e){z[e]=t});var K=window.btoa;function F(t){for(var e="";t;)e=P[t%62]+e,t=Math.floor(t/62);return e}function O(){var t,e=F((s()-13885344e5).toString()+("000000"+Math.floor(1e6*Math.random())).slice(-6))+F(Math.floor(238328*Math.random()))+"0",n=0;return w(e,function(r){t=z[e[e.length-1-r]],(e.length-r)%2&&(t*=2),t>=62&&(t=t%62+1),n+=t}),(t=n%62)&&(t=P[62-t]),e.slice(0,13)+t}K||(K=function(t){var e,n,r,i,o,a;for(r=t.length,n=0,e="";n<r;){if(i=255&t.charCodeAt(n++),n===r){e+=B.charAt(i>>2),e+=B.charAt((3&i)<<4),e+="==";break}if(o=t.charCodeAt(n++),n===r){e+=B.charAt(i>>2),e+=B.charAt((3&i)<<4|(240&o)>>4),e+=B.charAt((15&o)<<2),e+="=";break}a=t.charCodeAt(n++),e+=B.charAt(i>>2),e+=B.charAt((3&i)<<4|(240&o)>>4),e+=B.charAt((15&o)<<2|(192&a)>>6),e+=B.charAt(63&a)}return e});var $=O(),H={library:"checkoutjs",platform:"browser",referer:location.href};function I(t,e,n){t.isLiveMode()&&M(function(){n instanceof Error&&(n={message:n.message,stack:n.stack});var r,i,o=(i={checkout_id:(r=t)?r.id:$},w(["integration","referer","library","platform","platform_version","os","os_version","device"],function(t,e){H[e]&&(i[e]=H[e])}),i);o.user_agent=null,o.mode="live";var a=t.get("order_id");a&&(o.order_id=a);var s={},c={options:s};n&&(c.data=n);var u=["key","amount","prefill","theme","image","description","name","method"];w(t.get(),function(t,e){var n=t.split("."),r=n[0];-1!==u.indexOf(r)&&(n.length>1?(u.hasOwnProperty(r)||(s[r]={}),s[r][n[1]]=e):s[t]=e)}),s.image&&nt.isBase64Image(s.image)&&(s.image="base64");var l={context:o,events:[{event:e,properties:c,timestamp:(new Date).getTime()}]};try{D.post({url:"https://lumberjack.razorpay.com/v1/track",method:"post",data:{key:"ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",data:encodeURIComponent(btoa(N(l)))}})}catch(t){}})}var G,U=function(){function t(){return this._evts={},this._defs={},this}return t.prototype={onNew:o,def:function(t,e){this._defs[t]=e},on:function(t,e){if(y(t)&&g(e)){var n=this._evts;n[t]||(n[t]=[]),!1!==this.onNew(t,e)&&n[t].push(e)}return this},once:function(t,e){var n=e,r=this,i=function(){n.apply(r,arguments),r.off(t,i)};return e=i,this.on(t,e)},off:function(e,r){var i=arguments.length;if(!i)return t.call(this);var o,a=this._evts;if(2===i){var s=a[e];if(!(g(r)&&(o=s,o instanceof Array)))return;if(s.splice(function(t,e){if(n.indexOf)return t.indexOf(e);var r=t.length>>>0,i=Number(arguments[1])||0;for((i=i<0?Math.ceil(i):Math.floor(i))<0&&(i+=r);i<r;i++)if(i in t&&t[i]===e)return i;return-1}(s,r),1),s.length)return}return a[e]?delete a[e]:(e+=".",w(a,function(t){t.indexOf(e)||delete a[t]})),this},emit:function(t,e){return w(this._evts[t],function(t,n){try{n.call(this,e)}catch(t){console.error&&console.error(t)}},this),this},emitter:function(){var t=this,e=arguments;return function(){t.emit.apply(t,e)}}},t}();!function t(){(G=document.body||document.getElementsByTagName("body")[0])||setTimeout(t,99)}();var Y=G||document.documentElement;function Z(t){return function e(){return G?t.call(this):(M(k(e,this),99),this)}}var W={api:"https://api.razorpay.com/",version:"v1/",frameApi:"/",cdn:"https://cdn.razorpay.com/"};try{var j=window.Razorpay.config;for(var J in j)W[J]=j[J]}catch(t){}function q(t){return t||(t=""),W.api+W.version+t}var V=window.Razorpay=function(t){if(!(this instanceof V))return new V(t);U.call(this),this.id=O();try{var n=function(t){t&&"object"==typeof t||e("Invalid options");var n=function t(e){if(!(this instanceof t))return new t(e,n);var n=V.defaults;e=at(e,n);this.get=function(t){return arguments.length?t in e?e[t]:n[t]:e};this.set=function(t,n){e[t]=n};this.unset=function(t){delete e[t]}}(t);o=n,o=o.get(),w(rt,function(t,n){t in o&&(a=n(o[t],o)),y(a)&&e("Invalid "+t+" ("+a+")")}),r=n,i=r.get("notes"),w(i,function(t,e){y(e)?e.length>254&&(i[t]=e.slice(0,254)):v(e)||m(e)||delete i[t]}),n.get("callback_url")&&f&&n.set("redirect",!0);var r,i;var o,a;return n}(t);this.get=n.get,this.set=n.set}catch(n){var r=n.message;this.get&&this.isLiveMode()||b(t)&&!t.parent&&alert(r),e(r)}this.get("key")||e("No key passed"),nt.validate(this),nt.isCheckout||I(this,"init"),this.postInit()},X=V.prototype=new U;function Q(t,e){return D.jsonp({url:q("preferences"),data:t,timeout:3e4,success:function(t){x(e,null,t)}})}X.postInit=o,X.onNew=function(t,e){if("ready"===t){var n=this;n.prefs?e(t,n.prefs):Q(et(n),function(t){t.methods&&(n.prefs=t,n.methods=t.methods),e(n.prefs)})}},X.emi_calculator=function(t,e){return V.emi.calculator(this.get("amount")/100,t,e)},V.emi={calculator:function(t,e,n){if(!n)return Math.ceil(t/e);n/=1200;var r=Math.pow(1+n,e);return parseInt(t*n*r/(r-1),10)}};V.payment={getMethods:function(t){return Q({key_id:V.defaults.key},function(e){t(e.methods||e)})}};var tt=V.defaults={key:"",image:"",amount:100,currency:"INR",order_id:"",invoice_id:"",subscription_id:"",notes:null,callback_url:"",redirect:!1,description:"",customer_id:"",recurring:null,signature:"",retry:!0,target:"",subscription_card_change:null,display_currency:"",display_amount:"",recurring_token:{max_amount:0,expire_by:0}};function et(t){if(t){var e=t.get,n={};return n.key_id=e("key"),w(["order_id","customer_id","invoice_id","subscription_id","recurring","subscription_card_change"],function(t,r){var i=e(r);i&&(n[r]=i)}),n}}X.isLiveMode=function(){return/^rzp_l/.test(this.get("key"))};var nt={validate:o,msg:{wrongotp:"Entered OTP was incorrect. Re-enter to proceed."},isBase64Image:function(t){return/data:image\/[^;]+;base64/.test(t)},cancelMsg:"Payment cancelled",error:function(t){return{error:{description:t||nt.cancelMsg}}},redirect:function(t){if(!t.target&&window!==window.parent)return x(V.sendMessage,null,{event:"redirect",data:t});A(t.url,t.content,t.method,t.target)}},rt={notes:function(t){var e="";if(b(t)){var n=0;if(w(t,function(){n++}),!(n>15))return;e="At most 15 notes are allowed"}return e},amount:function(t,e){if((/[^0-9]/.test(n=t)||!((n=parseInt(n,10))>=100))&&!e.recurring){return"should be passed in integer paise. Minimum value is 100 paise, i.e. ₹ 1"}var n},currency:function(t){if("INR"!==t&&"USD"!==t)return"INR and USD are the only supported values for currency field."},display_currency:function(t){if(!(t in nt.currencies)&&t!==V.defaults.display_currency)return"This display currency is not supported"},display_amount:function(t){if(!(t=String(t).replace(/([^0-9\.])/g,""))&&t!==V.defaults.display_amount)return""}};V.configure=function(t){w(at(t,V.defaults),function(t,e){typeof V.defaults[t]==typeof e&&(V.defaults[t]=e)})},nt.currencies={AFN:"&#x60b;",ALL:"&#x6b;",DZD:"د.ج",WST:"T",EUR:"&#8364;",AOA:"Kz",XCD:"EC$",ARS:"$",AMD:"&#1423;",AWG:"ƒ",AUD:"A$",AZN:"ман",BSD:"B$",BHD:"د.ب",BDT:"&#x9f3;",BBD:"Bds$",BYR:"Br",BZD:"BZ$",XOF:"CFA",BMD:"BD$",BTN:"Nu.",BOB:"Bs.",BAM:"KM",BWP:"P",BRL:"R$",USD:"$",BND:"B$",BGN:"лв",BIF:"FBu",KHR:"៛",XAF:"CFA",CAD:"C$",CVE:"Esc",KYD:"KY$",CLP:"$",CNY:"&#165;",COP:"$",KMF:"CF",NZD:"NZ$",CRC:"&#x20a1;",HRK:"Kn",CUC:"&#x20b1;",ANG:"ƒ",CZK:"Kč",CDF:"FC",DKK:"Kr.",DJF:"Fdj",DOP:"RD$",EGP:"E&#163;",SVC:"&#x20a1;",ERN:"Nfa",ETB:"Br",FKP:"FK&#163;",FJD:"FJ$",XPF:"F",GMD:"D",GEL:"ლ",GHS:"&#x20b5;",GIP:"&#163;",GTQ:"Q",GBP:"&#163;",GNF:"FG",GYD:"GY$",HTG:"G",HNL:"L",HKD:"HK$",HUF:"Ft",ISK:"Kr",IDR:"Rp",IRR:"&#xfdfc;",IQD:"ع.د",ILS:"&#x20aa;",JMD:"J$",JPY:"&#165;",JOD:"د.ا",KZT:"&#x20b8;",KES:"KSh",KWD:"د.ك",KGS:"лв",LAK:"&#x20ad;",LVL:"Ls",LBP:"L&#163;",LSL:"L",LRD:"L$",LD:"ل.د",LYD:"ل.د",CHF:"Fr",LTL:"Lt",MOP:"P",MKD:"ден",MGA:"Ar",MWK:"MK",MYR:"RM",MVR:"Rf",MRO:"UM",MUR:"Ɍs",MXN:"$",MDL:"L",MNT:"&#x20ae;",MAD:"د.م.",MZN:"MT",MMK:"K",NAD:"N$",NPR:"NɌs",NIO:"C$",NGN:"&#x20a6;",KPW:"₩",NOK:"Kr",OMR:"ر.ع.",PKR:"Ɍs",PAB:"B/.",PGK:"K",PYG:"&#x20b2;",PEN:"S/.",PHP:"&#x20b1;",PLN:"Zł",QAR:"QAR",RON:"L",RUB:"руб",RWF:"RF",SHP:"&#163;",STD:"Db",SAR:"ر.س",RSD:"Дин.",SCR:"Ɍs",SLL:"Le",SGD:"S$",SBD:"SI$",SOS:"So. Sh.",ZAR:"R",KRW:"₩",SDG:"&#163;Sd",LKR:"Rs",SFR:"Fr",SRD:"$",SZL:"L",SEK:"Kr",SYP:"S&#163;",TWD:"NT$",TJS:"SM",TZS:"TSh",THB:"&#x0e3f;",TOP:"T$",TTD:"TT$",TND:"د.ت",TRY:"TL",TMT:"M",UGX:"USh",UAH:"&#x20b4;",AED:"د.إ",UYU:"$U",UZS:"лв",VUV:"VT",VEF:"Bs",VND:"&#x20ab;",YER:"&#xfdfc;",ZMK:"ZK",ZWL:"Z$"},tt.handler=function(t){if(this instanceof V){var e=this.get("callback_url");e&&A(e,t,"post")}},tt.timeout=0,tt.buttontext="Pay Now",tt.parent=null,tt.name="",tt.ecod=!1,tt.remember_customer=!1,tt.method={netbanking:!0,card:!0,wallet:null,emi:!0,upi:!0,upi_intent:null},tt.prefill={amount:"",wallet:"",method:"",name:"",contact:"",email:"",vpa:"","card[number]":"","card[expiry]":"","card[cvv]":"",bank:"","bank_account[name]":"","bank_account[account_number]":"","bank_account[ifsc]":"","aadhaar[number]":"",auth_type:""},tt.readonly={contact:!1,email:!1},tt.modal={confirm_close:!1,ondismiss:o,onhidden:o,escape:!0,animation:!0,backdropclose:!1},tt.external={wallets:[],handler:o},tt.theme={upi_only:!1,color:"",backdrop_color:"rgba(0,0,0,0.6)",image_padding:!0,image_frame:!0,close_button:!0,close_method_back:!1,hide_topbar:!1,branding:"",emi_mode:!1,debit_card:!1},rt.parent=function(t){if(!D(t)[0])return"parent provided for embedded mode doesn't exist"};var it={};function ot(t,e,n,r){var i=e[n=n.toLowerCase()],o=typeof i;"string"===o&&(v(r)||m(r))?r=String(r):"number"===o?r=Number(r):"boolean"===o&&y(r)&&("true"===r?r=!0:"false"===r&&(r=!1)),null!==i&&o!==typeof r||(t[n]=r)}function at(t,e){var n={};return w(t,function(t,r){t in it?w(r,function(r,i){ot(n,e,t+"."+r,i)}):ot(n,e,t,r)}),n}w(V.defaults,function(t,e){b(e)&&(it[t]=!0,w(e,function(e,n){V.defaults[t+"."+e]=n}),delete V.defaults[t])});var st,ct=Y.style,ut={overflow:"",metas:null,orientationchange:function(){ut.resize.call(this),ut.scroll.call(this)},resize:function(){var t=innerHeight||screen.height;pt.style.position=t<450?"absolute":"fixed",this.el.style.height=Math.max(t,460)+"px"},scroll:function(){if("number"==typeof window.pageYOffset)if(innerHeight<460){var t=460-innerHeight;pageYOffset>t+120&&R(t)}else this.isFocused||R(0)}};function lt(){return ut.metas||(ut.metas=_('head meta[name=viewport],head meta[name="theme-color"]')),ut.metas}function dt(t){try{mt.style.background=t}catch(t){}}function ht(t){if(t)return this.getEl(t),this.openRzp(t);this.getEl(),this.time=s()}ht.prototype={getEl:function(t){if(!this.el){var e={style:"opacity: 1; height: 100%; position: relative; background: none; display: block; border: 0 none transparent; margin: 0px; padding: 0px;",allowtransparency:!0,frameborder:0,width:"100%",height:"100%",src:function(t){var e=W.frame;if(!e){e=q("checkout");var n=et(t);n||(n={},e+="/public"),W.js&&(n.checkout=W.js);var r=[];w(n,function(t,e){r.push(t+"="+e)}),r.length&&(e+="?"+r.join("&"))}return e}(t),class:"razorpay-checkout-frame"};this.el=D(document.createElement("iframe")).attr(e)[0]}return this.el},openRzp:function(t){var e=D(this.el).css({width:"100%",height:"100%"}),n=t.get("parent"),r=D(n||pt);!function(t,e){if(!st)try{(st=document.createElement("div")).className="razorpay-loader";var n="margin:-25px 0 0 -25px;height:50px;width:50px;animation:rzp-rot 1s infinite linear;-webkit-animation:rzp-rot 1s infinite linear;border: 1px solid rgba(255, 255, 255, 0.2);border-top-color: rgba(255, 255, 255, 0.7);border-radius: 50%;";n+=e?"margin: 100px auto -150px;border: 1px solid rgba(0, 0, 0, 0.2);border-top-color: rgba(0, 0, 0, 0.7);":"position:absolute;left:50%;top:50%;",st.setAttribute("style",n),t.append(st)}catch(t){}}(r,n),t!==this.rzp&&(e.parent()!==r[0]&&r.append(e[0]),this.rzp=t),n?(e.css("minHeight","530px"),this.embedded=!0):(r.css("display","block").reflow(),dt(t.get("theme.backdrop_color")),/^rzp_t/.test(t.get("key"))&&(vt.style.opacity=1),this.setMetaAndOverflow()),this.bind(),this.onload()},makeMessage:function(){var t=this.rzp,e=t.get(),n={integration:H.integration,referer:location.href,options:e,id:t.id};return w(t.modal.options,function(t,n){e["modal."+t]=n}),this.embedded&&(delete e.parent,n.embedded=!0),function(t){var e=t.image;if(e&&y(e)){if(nt.isBase64Image(e))return;if(e.indexOf("http")){var n=location.protocol+"//"+location.hostname+(location.port?":"+location.port:""),r="";"/"!==e[0]&&"/"!==(r+=location.pathname.replace(/[^\/]*$/g,""))[0]&&(r="/"+r),t.image=n+r+e}}}(e),n},close:function(){dt(""),vt.style.opacity=0,function(t){t&&w(t,function(t,e){D(e[0]).remove()});var e=lt();e&&w(e,function(t,e){C("head").appendChild(e)})}(this.$metas),ct.overflow=ut.overflow,this.unbind(),l&&scrollTo(0,ut.oldY)},bind:function(){if(!this.listeners){this.listeners=[];var t={};l&&(t.orientationchange=ut.orientationchange,this.rzp.get("parent")||(t.scroll=ut.scroll,t.resize=ut.resize)),w(t,function(t,e){this.listeners.push(D(window).on(t,e,null,this))},this)}},unbind:function(){var t;w(this.listeners,function(e,n){n.call(t)},t),this.listeners=null},setMetaAndOverflow:function(){var t=C("head");t&&(w(lt(),function(t,e){D(e).remove()}),this.$metas=[D(document.createElement("meta")).attr({name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),D(document.createElement("meta")).attr({name:"theme-color",content:this.rzp.get("theme.color")})],w(this.$metas,function(e,n){t.appendChild(n[0])}),ut.overflow=ct.overflow,ct.overflow="hidden",l&&(ut.oldY=pageYOffset,window.scrollTo(0,0),ut.orientationchange.call(this)))},postMessage:function(t){t.id=this.rzp.id,t=N(t),this.el.contentWindow.postMessage(t,"*")},onmessage:function(t){var e;try{e=JSON.parse(t.data)}catch(t){return}var n=e.event,r=this.rzp;t.origin&&"frame"===e.source&&t.source===this.el.contentWindow&&(x("on"+n,this,e=e.data),"dismiss"!==n&&"fault"!==n||I(r,n,e))},onload:function(){this.rzp&&this.postMessage(this.makeMessage())},onfocus:function(){this.isFocused=!0},onblur:function(){this.isFocused=!1,ut.orientationchange.call(this)},onrender:function(){st&&(D(st).remove(),st=null)},onredirect:function(t){nt.redirect(t)},onsubmit:function(t){if("wallet"===t.method){var e=this.rzp;w(e.get("external.wallets"),function(n,r){if(r===t.wallet)try{e.get("external.handler").call(e,t)}catch(t){i("merc",t)}})}},ondismiss:function(t){this.close(),x(this.rzp.get("modal.ondismiss"),0,t)},onhidden:function(){this.afterClose(),x(this.rzp.get("modal.onhidden"))},oncomplete:function(t){this.close();var e=this.rzp;I(e,"checkout_success",t),x(function(){x(this.get("handler"),this,t)},e,null,200)},onpaymenterror:function(t){try{this.rzp.emit("payment.error",t),this.rzp.emit("payment.failed",t)}catch(t){}},onfailure:function(t){this.ondismiss(),alert("Payment Failed.\n"+t.error.description),this.onhidden()},onfault:function(t){this.rzp.close(),alert("Oops! Something went wrong.\n"+t),this.afterClose()},afterClose:function(){pt.style.display="none"}},nt.isCheckout=!0;var ft,pt,mt,vt,gt,yt=document.currentScript||(ft=document.getElementsByTagName("script"))[ft.length-1],bt=function(t){var e=yt.parentNode,n=document.createElement("div");n.innerHTML=S(t),e.appendChild(n),e.onsubmit=o,e.submit()},wt=function(t){var e=document.createElement("input"),n=yt.parentElement;e.type="submit",e.value=t.get("buttontext"),e.className="razorpay-payment-button",n.appendChild(e),n.onsubmit=function(e){e.preventDefault();var r=n.action,i=t.get();if(y(r)&&r&&!i.callback_url&&window.btoa){var o={};w(D(n).find("[name]"),function(t,e){o[e.name]=e.value});var a={url:r};"post"===n.method&&(a.method="post");var s=n.target;s&&y(s)&&(a.target=n.target),Object.keys(o).length&&(a.content=o);try{var c=btoa(N({request:a,options:N(i),back:location.href}));i.callback_url=q("checkout/onyx")+"?data="+c}catch(t){}}return t.open(),!1}};function kt(t){return gt?gt.openRzp(t):(gt=new ht(t),D(window).on("message",k("onmessage",gt)),pt.appendChild(gt.el)),gt}V.open=function(t){return V(t).open()},X.postInit=function(){this.modal={options:a},this.get("parent")&&this.open()};var Mt=X.onNew;X.onNew=function(t,e){"payment.error"===t&&I(this,"event_paymenterror",location.href),g(Mt)&&Mt.call(this,t,e)},X.open=Z(function(){var t=this.checkoutFrame=kt(this);return I(this,"open"),t.el.contentWindow||(t.close(),t.afterClose(),alert("This browser is not supported.\nPlease try payment in another browser.")),"-new.js"===yt.src.slice(-7)&&I(this,"oldscript",location.href),this}),X.close=function(){var t=this.checkoutFrame;t&&t.postMessage({event:"close"})},Z(function(){pt=function(){var t=document.createElement("div");t.className="razorpay-container",t.innerHTML="<style>@keyframes rzp-rot{to{transform: rotate(360deg);}}@-webkit-keyframes rzp-rot{to{-webkit-transform: rotate(360deg);}}</style>";var e=t.style;return w({zIndex:1e9,position:"fixed",top:0,display:"none",left:0,height:"100%",width:"100%","-webkit-overflow-scrolling":"touch","-webkit-backface-visibility":"hidden","overflow-y":"visible"},function(t,n){e[t]=n}),G.appendChild(t),t}(),mt=function(){var t=document.createElement("div");t.className="razorpay-backdrop";var e=t.style;return w({"min-height":"100%",transition:"0.3s ease-out","-webkit-transition":"0.3s ease-out","-moz-transition":"0.3s ease-out",position:"fixed",top:0,left:0,width:"100%",height:"100%",filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#96000000, endColorstr=#96000000)"},function(t,n){e[t]=n}),pt.appendChild(t),t}(),vt=function(){var t=document.createElement("span");t.target="_blank",t.href="",t.innerHTML="Test Mode";var e=t.style,n="opacity 0.3s ease-in",r="rotate(45deg)";return w({"text-decoration":"none",background:"#D64444",border:"1px dashed white",padding:"3px",opacity:"0","-webkit-transform":r,"-moz-transform":r,"-ms-transform":r,"-o-transform":r,transform:r,"-webkit-transition":n,"-moz-transition":n,transition:n,"font-family":"lato,ubuntu,helvetica,sans-serif",color:"white",position:"absolute",width:"200px","text-align":"center",right:"-50px",top:"50px"},function(t,n){e[t]=n}),mt.appendChild(t),t}(),gt=kt();try{!function(){var t={};w(yt.attributes,function(e,n){var r=n.name.toLowerCase();if(/^data-/.test(r)){var i=t;r=r.replace(/^data-/,"");var o=n.value;"true"===o?o=!0:"false"===o&&(o=!1),/^notes\./.test(r)&&(t.notes||(t.notes={}),i=t.notes,r=r.replace(/^notes\./,"")),i[r]=o}});var e=t.key;if(e&&e.length>0){yt.parentElement.action,t.handler=bt;var n=V(t);t.parent||wt(n)}}()}catch(t){}})()}()}();