(function(e){function t(t){for(var i,r,u=t[0],c=t[1],l=t[2],h=0,p=[];h<u.length;h++)r=u[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Cohen-Sutherland/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4911:function(e,t,n){"use strict";n("b01c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),a={class:"main"},o=Object(i["c"])("div",{class:"canvas-container"},[Object(i["c"])("canvas",{class:"canvas",height:"600",width:"800"})],-1),r={class:"ctrl-container"},u=Object(i["d"])('<h1>Cohen-Sutherland algorithm</h1><h3>Frame params</h3><div class="input-wrapper"><div class="label">x</div><input type="number" id="x" min="0" max="600" value="100"></div><div class="input-wrapper"><div class="label">y</div><input type="number" id="y" min="0" max="600" value="100"></div><div class="input-wrapper"><div class="label">width</div><input type="number" id="width" min="0" max="600" value="600"></div><div class="input-wrapper"><div class="label">height</div><input type="number" id="height" min="0" max="600" value="400"></div><h3>Number of lines</h3><div class="input-wrapper"><div class="label">count</div><select id="select"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option selected value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></div>',8),c=["disabled"];function l(e,t,n,l,s,h){return Object(i["e"])(),Object(i["b"])("div",a,[o,Object(i["c"])("div",r,[u,Object(i["c"])("button",{class:"draw-btn",onClick:t[0]||(t[0]=function(){return h.redraw&&h.redraw.apply(h,arguments)}),disabled:s.btnLock},"draw",8,c)])])}var s=n("1da1"),h=(n("96cf"),n("d3b7"),n("a9e3"),{name:"App",components:{},data:function(){return{left:1,right:2,bot:4,top:8,invalid_input:!1,timeout1:null,timeout2:null,btnLock:!1}},mounted:function(){var e=document.querySelector(".canvas"),t=e.getContext("2d");t.translate(0,e.height),t.scale(1,-1)},methods:{redraw:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,i,a,o,r,u,c,l,s,h,p,d,m,v=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.btnLock=!0,null!=this.timeout1&&clearTimeout(this.timeout1),null!=this.timeout2&&clearTimeout(this.timeout2),t=document.querySelector(".canvas"),n=t.getContext("2d"),i=document.getElementById("select").value,a=this.getRect(),o=new Array,r=new Array,n.clearRect(0,0,t.width,t.height),n.imageSmoothingEnabled=!0,n.translate(.5,.5),n.beginPath(),n.strokeStyle="#ccc",n.lineWidth=1,u=.5;u<800;u+=20)n.moveTo(u,0),n.lineTo(u,600);for(c=.5;c<600;c+=20)n.moveTo(0,c),n.lineTo(800,c);n.stroke(),n.closePath(),n.strokeStyle="#7a7a7a",n.lineWidth=2,l=0;case 22:if(!(l<i)){e.next=40;break}return s=this.getRandomCoords(),o.push({x:s[0],y:s[1]}),o.push({x:s[2],y:s[3]}),h={x:s[0],y:s[1]},p={x:s[2],y:s[3]},r.push({a:h,b:p}),d=this.calcWaypoints(o),m=1,console.log(d,m),n.beginPath(),e.next=35,this.animate(n,m,d);case 35:n.closePath(),o=[];case 37:l++,e.next=22;break;case 40:setTimeout((function(){n.strokeStyle="#000",o.push({x:a.x_min,y:a.y_min}),o.push({x:a.x_max,y:a.y_min}),o.push({x:a.x_max,y:a.y_max}),o.push({x:a.x_min,y:a.y_max}),o.push({x:a.x_min,y:a.y_min});var e=v.calcWaypoints(o),t=1;n.beginPath(),v.animate(n,t,e),n.closePath(),o=[]}),2e3),new Promise((function(e){setTimeout((function(){for(var t=0;t<i;t++){console.log(r);var u=v.cohen_sutherland(a,r[t].a,r[t].b);if(-1!==u){r[t].a=u.a,r[t].b=u.b,o.push(r[t].a),o.push(r[t].b);var c=v.calcWaypoints(o),l=1;n.beginPath(),n.strokeStyle="red",v.animate(n,l,c),n.closePath(),o=[]}}r=[],e()}),4200)})).then((function(){setTimeout((function(){v.btnLock=!1}),1e3)}));case 42:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),calcWaypoints:function(e){for(var t=[],n=1;n<e.length;n++)for(var i=e[n-1],a=e[n],o=a.x-i.x,r=a.y-i.y,u=0;u<=100;u++){var c=i.x+o*u/100,l=i.y+r*u/100;t.push({x:c,y:l})}return t},animate:function(e,t,n){var i=setInterval((function(){t>=n.length?clearInterval(i):(e.moveTo(n[t-1].x,n[t-1].y),e.lineTo(n[t].x,n[t].y),e.stroke(),t++)}),5)},getRandomCoords:function(){var e=[],t=1;while(e.length<4){var n=void 0;n=t%2?Math.ceil(800*Math.random()):Math.ceil(600*Math.random());for(var i=!1,a=0;a<e.length;a++)if(e[a]===n){i=!0;break}i||(e[e.length]=n),t++}return e},getRect:function(){var e=document.getElementById("x").value,t=document.getElementById("y").value,n=document.getElementById("width").value,i=document.getElementById("height").value;return e=Number(e),t=Number(t),n=Number(n),i=Number(i),{x_min:e,x_max:e+n,y_min:t,y_max:t+i}},getCode:function(e,t){return(t.x<e.x_min?this.left:0)+(t.x>e.x_max?this.right:0)+(t.y<e.y_min?this.bot:0)+(t.y>e.y_max?this.top:0)},cohen_sutherland:function(e,t,n){var i,a,o=this.getCode(e,t),r=this.getCode(e,n);while(o|r){if(o&r)return-1;o?(i=o,a=t):(i=r,a=n),i&this.left?(a.y+=(t.y-n.y)*(e.x_min-a.x)/(t.x-n.x),a.x=e.x_min):i&this.right?(a.y+=(t.y-n.y)*(e.x_max-a.x)/(t.x-n.x),a.x=e.x_max):i&this.bot?(a.x+=(t.x-n.x)*(e.y_min-a.y)/(t.y-n.y),a.y=e.y_min):i&this.top&&(a.x+=(t.x-n.x)*(e.y_max-a.y)/(t.y-n.y),a.y=e.y_max),i==o?(t=a,o=this.getCode(e,t)):(n=a,r=this.getCode(e,n))}return{a:t,b:n}}}}),p=(n("4911"),n("d959")),d=n.n(p);const m=d()(h,[["render",l]]);var v=m;Object(i["a"])(v).mount("#app")},b01c:function(e,t,n){}});
//# sourceMappingURL=app.d3208063.js.map