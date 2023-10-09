(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(618),t.b),l=i()(o()),u=c()(d);l.push([n.id,`/*basic styling*/\nbody {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #0d0d0d;\n  color: #ffffff;\n  font-family: "Arial", sans-serif;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n}\n\n.container {\n  text-align: center;\n  margin-top: 100px;\n}\n\n/*Main Menu Styling*/\n.input-field,\n.select-field {\n  margin-bottom: 20px;\n  font-size: 18px;\n  padding: 10px;\n  border: none;\n  background-color: #1e222a;\n  color: #ffffff;\n  border-radius: 5px;\n}\n\n.start-button {\n  font-size: 20px;\n  padding: 15px 30px;\n  background-color: #4caf50;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.start-button:hover {\n  background-color: #45a049;\n}\n\n/*Game Styling*/\n.player-info {\n  position: fixed;\n  top: 20px;\n  left: 20px;\n  font-size: 16px;\n  padding: 10px;\n  background-color: #1e222a;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);\n}\n\n.card {\n  width: 100px;\n  height: 150px;\n  background-color: #ccc;\n  margin: 5px;\n  position: relative;\n  transform-style: preserve-3d;\n  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);\n  transform: scale(1);\n  cursor: pointer;\n  transition: transform 0.6s ease;\n}\n\n.back {\n  transform: rotateY(0deg);\n  background-image: url(${u});\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.front {\n  transform: rotateY(180deg);\n  background-image: none;\n}\n\n/*Win Screen Styling*/\n#restartButton {\n  background-color: #4caf50;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n#restartButton:hover {\n  background-color: #45a049;\n}\n\n.winDiv {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n}\n\n.winScreen-content {\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.winningMessage {\n  color: black;\n}\n`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var g=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},618:(n,e,t)=>{n.exports=t.p+"485aafc116377626b604.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(28),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(n,e){this.turned=!1,this.id=n,this.matchingID=e}}let m=new class{constructor(){this.stack=[],this.turnedCards=[],this.gameContainer=document.getElementById("app"),this.cardImages=["/img/dog-solid.svg","/img/dove-solid.svg","/img/dragon-solid.svg","/img/fish-fins-solid.svg","/img/hippo-solid.svg","/img/paw-solid.svg","/img/spider-solid.svg","/img/aurelia.svg","/img/js-badge.svg"]}createCards(){let n=1;for(let e=1;e<17;e+=2){for(let t=0;t<2;t++){let r=new h(e+t,n);this.stack.push(r)}n++}}createVisualCards(){this.shuffleArray(this.cardImages),this.gameContainer.style.display="grid",this.gameContainer.style.gridTemplateColumns="repeat(8, 100px)",this.gameContainer.style.gridGap="10px",this.gameContainer.style.placeItems="center",this.stack.forEach(((n,e)=>{const t=document.createElement("div");t.classList.add("card"),t.classList.add("back"),t.id=n.id,t.innerHTML=n.matchingID,t.addEventListener("click",(()=>this.pickCards(e))),this.gameContainer.appendChild(t),n.htmlElement=t}))}pickCards(n){0==this.stack[n].turned&&(this.toggleCard(this.stack[n].htmlElement),this.stack[n].turned=!0,this.turnedCards.push(this.stack[n]),2==this.turnedCards.length&&this.checkForPair(),this.checkForWin())}toggleCard(n){n.classList.toggle("front"),n.classList.toggle("back")}turnBack(n,e){const t=document.getElementById(n),r=document.getElementById(e);this.toggleCard(t),this.toggleCard(r)}checkForPair(){const[n,e]=this.turnedCards;if(n.matchingID===e.matchingID)console.log("Wir sind ein Paar");else{console.log("Wir sind kein Paar");const t=this.stack.indexOf(n),r=this.stack.indexOf(e);this.stack[t].turned=!1,this.stack[r].turned=!1,this.turnBack(n.id,e.id)}this.turnedCards=[]}wait(n){const e=(new Date).getTime();let t=e;for(;t<e+n;)t=(new Date).getTime()}checkForWin(){let n=0;this.stack.forEach((e=>{0==e.turned&&n++})),0==n&&(function(){const n=document.getElementById("app"),e=document.createElement("div");e.className="winDiv",e.id="win-overlay";const t=document.createElement("div");t.className="winScreen-content";const r=document.createElement("h1");r.className="winningMessage",r.textContent="Du hast gewonnen";const o=document.createElement("button");o.id="restartButton",o.innerHTML="Start another round",n.appendChild(e),e.appendChild(t),t.appendChild(r),t.appendChild(o),document.getElementById("win-overlay").style.display="flex"}(),console.log("Du hast gewonnen!"))}shuffleArray(){for(let n=this.stack.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[this.stack[n],this.stack[e]]=[this.stack[e],this.stack[n]]}}};m.createCards(),m.shuffleArray(),console.log(m.stack),function(n){const e=document.createElement("input");e.className="input-field",e.placeholder="Enter your name";const t=document.createElement("select");t.className="select-field",["Leicht","Mittel","Schwer"].forEach((n=>{const e=document.createElement("option");e.text=n,t.appendChild(e)}));const r=document.createElement("button");r.className="start-button",r.innerText="Start Game";const o=document.getElementById("app");o.appendChild(e),o.appendChild(t),o.appendChild(r),r.addEventListener("click",(function(){!function(n,e,t){(function(){const n=document.getElementById("app");n.querySelectorAll(".input-field, .select-field, .start-button").forEach((e=>{n.removeChild(e)}))})(),function(n,e){const t=document.createElement("div");t.className="player-info",t.textContent=`Spieler: ${n} - Schwierigkeit: ${e}`;document.getElementById("app").appendChild(t)}(n,e),t.createVisualCards()}(e.value,t.value,n)}))}(m)})()})();