!function(n){var e={};function t(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return n[s].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,s){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:s})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(s,a,function(e){return n[e]}.bind(null,a));return s},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var s=n=>{let{to:e,text:t,className:s,style:a}=n;return`\n      <a \n          href='${e}'\n          onclick='window.app.funcs.linkHandler(this); return false;' \n          class='${s}' style='${a}'\n      > \n          ${t}\n      </a>\n  `};class a{render(){return`\n      <div class="wrapper">\n        <section class="page-content">\n          <section class="mast no-bg paddless">\n            ${s({to:"/",text:'<div class="logo"><img src="assets/img/sendit-pickup-ondemand.svg" alt="sendit-logo" /></div>\n              <div class="text">Send<span>IT</span></div>',className:"logo-text-group",style:""})}\n          </section>\n          <div class="login-box">\n            <form action="">\n              <div class="form-header">\n                Sign up\n              </div>\n              <div class="form-body">\n                <div class="input-group transparent-box">\n                  <label for="firstname">Firstname</label>\n                  <input type="text" placeholder='Firstname' required/>\n                </div>\n                <div class="input-group transparent-box">\n                  <label for="lastname">Lastname</label>\n                  <input type="text" placeholder='Lastname' required/> \n                </div>\n                <div class="input-group transparent-box">\n                  <label for="email">Email</label>\n                  <input type="email" placeholder='you@email.com' required/>\n                </div>\n                <div class="input-group transparent-box">\n                  <label for="password">Password</label>\n                  <input type="password" placeholder='securepassword' required/> \n                </div>\n                <div class="input-footer"></div>\n                <div class="v-gap-2"></div>\n                <div class="row text-center">\n                  <div class="column">\n                    <button class="btn submit">Sign up</button>\n                  </div>\n                  <div class="actions column text-center">\n                    <div class="v-gap-2"></div>\n                    <div class="">\n                      <a href="login.html">Login</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </section>\n        <div class="page-background">\n          <div class="overlay"></div>\n        </div>\n      </div>\n    `}}class i{render(){return`\n      <div class="wrapper">\n        <section class="page-content">\n          <section class="mast no-bg paddless">\n            ${s({to:"/home",text:'<div class="logo"><img src="assets/img/sendit-pickup-ondemand.svg" alt="sendit-logo" /></div>\n              <div class="text">Send<span>IT</span></div>',className:"logo-text-group",style:""})}\n\n          </section>\n          <div class="login-box">\n            <form action="">\n              <div class="form-header">\n                Sign up\n              </div>\n              <div class="form-body">\n                <div class="input-group transparent-box">\n                  <label for="firstname">Firstname</label>\n                  <input type="text" placeholder='Firstname' required/>\n                </div>\n                <div class="input-group transparent-box">\n                  <label for="lastname">Lastname</label>\n                  <input type="text" placeholder='Lastname' required/> \n                </div>\n                <div class="input-group transparent-box">\n                  <label for="email">Email</label>\n                  <input type="email" placeholder='you@email.com' required/>\n                </div>\n                <div class="input-group transparent-box">\n                  <label for="password">Password</label>\n                  <input type="password" placeholder='securepassword' required/> \n                </div>\n                <div class="input-footer"></div>\n                <div class="v-gap-2"></div>\n                <div class="row text-center">\n                  <div class="column">\n                    <button class="btn submit">Sign up</button>\n                  </div>\n                  <div class="actions column text-center">\n                    <div class="v-gap-2"></div>\n                    <div class="">\n                      <a href="login.html">Login</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </section>\n        <div class="page-background">\n          <div class="overlay"></div>\n        </div>\n      </div>\n    `}}class r{render(){return`\n      <div class="wrapper">\n        <section class="page-content">\n          <section class="mast no-bg paddless">\n            ${s({to:"/login",text:'<div class="logo"><img src="assets/img/sendit-pickup-ondemand.svg" alt="sendit-logo" /></div>\n              <div class="text">Send<span>IT</span></div>',className:"logo-text-group",style:""})}\n          </section>\n          <div class="login-box">\n            <form action="">\n              <div class="form-header">\n                Sign up\n              </div>\n              <div class="form-body">\n                <div class="input-group transparent-box">\n                  <label for="firstname">Firstname</label>\n                  <input type="text" placeholder='Firstname' required/>\n                </div>\n                <div class="input-group transparent-box">\n                  <label for="lastname">Lastname</label>\n                  <input type="text" placeholder='Lastname' required/> \n                </div>\n                <div class="input-group transparent-box">\n                  <label for="email">Email</label>\n                  <input type="email" placeholder='you@email.com' required/>\n                </div>\n                <div class="input-group transparent-box">\n                  <label for="password">Password</label>\n                  <input type="password" placeholder='securepassword' required/> \n                </div>\n                <div class="input-footer"></div>\n                <div class="v-gap-2"></div>\n                <div class="row text-center">\n                  <div class="column">\n                    <button class="btn submit">Sign up</button>\n                  </div>\n                  <div class="actions column text-center">\n                    <div class="v-gap-2"></div>\n                    <div class="">\n                      <a href="login.html">Login</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </section>\n        <div class="page-background">\n          <div class="overlay"></div>\n        </div>\n      </div>\n    `}}const o=new class{constructor(){this.handlers={}}set(n,e){this.handlers[n]=e}};o.set("/signup",n=>{console.log("router",o.handlers)});let l=new class{constructor(){this.state={currentPage:this.setInitialPage()}}setInitialPage(){return this.getPathPage()}getPathPage(n){let e;switch(void 0===n&&(n=window.location.pathname),n){case"/signup":e="SignUp";break;case"/login":e="Login";break;case"/":default:e="Home"}return e}setState(n,e){this.state[n]=e,this.reRender(),console.log(this.state)}reRender(){let n=this.render();document.getElementById("root").innerHTML=n}getCurrentPage(){let n,{currentPage:e}=this.state;switch(e){case"Home":n=new r;break;case"Login":n=new a;break;case"SignUp":n=new i;break;default:n=new r}let t=n.attachEventListeners?n.attachEventListeners:null,s=window.appEventListeners||[];return window.appEventListeners=[...s,t],n}renderPage(){return this.getCurrentPage().render()}render(){return`<div>\n            ${this.renderPage()}\n        </div>`}};document.title="Send-IT",window.appEventListeners=[],l.funcs={init(){this.setRouter(),window.onpopstate=(()=>this.setRouter()),this.renderPage()},renderPage:()=>{let n=document.getElementById("root"),e=l.render();n.innerHTML=e},setRouter:n=>{void 0===n&&(n=window.location.pathname);let e={"/signup":"SignUp","/signin":"SignIn","/":"Home"}[n];l.setState("currentPage",e)},linkHandler:n=>{let e=n.getAttribute("href"),{origin:t}=window.location,s=`${t}${e}`;window.history.pushState({},"",s),l.funcs.setRouter(e),o.handlers[e]&&o.handlers[e]()}},window.app=l,window.app.funcs.init()}]);