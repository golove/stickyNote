(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},3658:function(t,e,n){"use strict";var i=n("5a9f"),a=n.n(i);a.a},"5a9f":function(t,e,n){},"61a2":function(t,e,n){"use strict";var i=n("cc35"),a=n.n(i);a.a},"674a":function(t,e,n){},"6b5e":function(t,e,n){"use strict";var i=n("674a"),a=n.n(i);a.a},"885d":function(t,e,n){"use strict";var i=n("e7f7"),a=n.n(i);a.a},b42f:function(t,e,n){},cc35:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("toolbar"),n("transition",{attrs:{name:"list-complete"}},[t.$store.state.showInput?n("inputbox",{staticClass:"list-complete-item"}):t._e()],1),n("itemlist",{staticClass:"noblur",class:t.$store.state.showInput?"blurstyle":""})],1)},r=[],s=n("d4ec"),o=n("262e"),c=n("2caf"),l=n("9ab4"),u=n("60a3"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar"},[n("h2",[t._v("便签")]),n("div",{staticClass:"btn"},[n("button",{on:{click:t.showInput}},[t._v("新增")]),n("div",{staticClass:"category1"},[n("button",{on:{click:function(e){t.cateflag=!t.cateflag}}},[t._v(" 全部 "),n("span",[t._v(t._s(t.doFliter(-1)))])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.cateflag,expression:"cateflag"}]},[n("li",{on:{click:function(e){return t.selectCate(-1)}}},[t._v(" 全部 "),n("span",[t._v(t._s(t.doFliter(-1)))])]),n("li",{on:{click:function(e){return t.selectCate(0)}}},[t._v(" 工作 "),n("span",[t._v(t._s(t.doFliter(0)))])]),n("li",{on:{click:function(e){return t.selectCate(1)}}},[t._v(" 生活 "),n("span",[t._v(t._s(t.doFliter(1)))])]),n("li",{on:{click:function(e){return t.selectCate(2)}}},[t._v(" 学习 "),n("span",[t._v(t._s(t.doFliter(2)))])])])])])])},d=[],v=(n("4de4"),n("bee2")),p=(n("99af"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(s["a"])(this,t),this.id=e,this.categoryId=n,this.title=i,this.content=a,this.createTime=this.timeToString(Date.now())}return Object(v["a"])(t,[{key:"timeToString",value:function(t){var e=new Date(t),n="".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes());return n}}]),t}()),m=p,h=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.cateflag=!1,t}return Object(v["a"])(n,[{key:"showInput",value:function(){this.$store.commit("setTransItem",new m(-1,0))}},{key:"doFliter",value:function(t){return-1==t?this.$store.state.actionHelper.demoList.length:this.$store.state.actionHelper.demoList.filter((function(e){return e.categoryId===t})).length}},{key:"selectCate",value:function(t){this.cateflag=!1,this.$store.commit("setFilterId",t)}}]),n}(u["c"]);h=Object(l["a"])([u["a"]],h);var b=h,g=b,y=(n("3658"),n("2877")),O=Object(y["a"])(g,f,d,!1,null,null,null),_=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"itemlist"}},[n("div",{staticClass:"itemlist"},[n("transition-group",{attrs:{name:"list-complete"}},t._l(t.filterData(),(function(t,e){return n("item",{directives:[{name:"show",rawName:"v-show",value:e%2==0,expression:"index%2==0"}],key:t.id,staticClass:"list-complete-item",attrs:{item:t}})})),1)],1),n("div",{staticClass:"itemlist"},[n("transition-group",{attrs:{name:"list-complete"}},t._l(t.filterData(),(function(t,e){return n("item",{directives:[{name:"show",rawName:"v-show",value:e%2==1,expression:"index%2==1"}],key:t.id,staticClass:"list-complete-item",attrs:{item:t}})})),1)],1)])},w=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"titlestle"},[n("h2",[t._v(t._s(t.item.title))]),n("span",[n("button",{staticClass:"buttonicon",on:{click:function(e){return t.editData(t.item)}}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}})])]),n("button",{staticClass:"buttonicon",on:{click:t.remove}},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"currentColor",d:"M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z"}})])])])]),n("div",[n("span",[t._v("分类:"+t._s(t.$store.state.actionHelper.getCategory(t.item.categoryId)))]),n("span",{staticStyle:{marginLeft:"8px"}},[t._v(t._s(t.item.createTime))])]),n("p",[t._v(t._s(t.item.content))])])},I=[],x=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return Object(v["a"])(n,[{key:"editData",value:function(t){var e=JSON.parse(JSON.stringify(this.item));this.$store.commit("setTransItem",e)}},{key:"remove",value:function(){confirm("确认要删除<".concat(this.item.title,">的笔记吗？"))&&this.$store.state.actionHelper.remove(this.item.id)}}]),n}(u["c"]);Object(l["a"])([Object(u["b"])()],x.prototype,"item",void 0),x=Object(l["a"])([u["a"]],x);var C=x,L=C,$=(n("6b5e"),Object(y["a"])(L,k,I,!1,null,null,null)),H=$.exports,S=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.demoArr=t.$store.state.actionHelper.demoList,t}return Object(v["a"])(n,[{key:"filterData",value:function(){var t=this;return-1==this.$store.state.filterId?this.demoArr:this.$store.state.actionHelper.demoList.filter((function(e){return e.categoryId===t.$store.state.filterId}))}}]),n}(u["c"]);S=Object(l["a"])([Object(u["a"])({components:{item:H}})],S);var D=S,T=D,M=(n("885d"),Object(y["a"])(T,j,w,!1,null,null,null)),N=M.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inputbox"},[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}}),n("div",{staticClass:"category"},[n("span",{on:{click:function(e){t.cateflag=!t.cateflag}}},[t._v("分类:"+t._s(t.$store.state.actionHelper.getCategory(t.item.categoryId)))]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.cateflag,expression:"cateflag"}]},[n("li",{on:{click:function(e){return t.selectCate(0)}}},[t._v("工作")]),n("li",{on:{click:function(e){return t.selectCate(1)}}},[t._v("生活")]),n("li",{on:{click:function(e){return t.selectCate(2)}}},[t._v("学习")])])]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.content,expression:"item.content"}],attrs:{placeholder:"请输入内容",type:"text"},domProps:{value:t.item.content},on:{input:function(e){e.target.composing||t.$set(t.item,"content",e.target.value)}}})]),n("button",{staticClass:"buttoninput",on:{click:t.submit}},[t._v("提交")]),n("button",{staticClass:"buttoninput",on:{click:t.close}},[t._v("关闭")])])},P=[],K=(n("498a"),function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.call(this),t.cateflag=!1,t.item=new m(-1,0),t}return Object(v["a"])(n,[{key:"selectCate",value:function(t){this.cateflag=!1,this.item.categoryId=t}},{key:"created",value:function(){this.item=this.$store.state.transItem}},{key:"submit",value:function(){this.item&&this.item.title.trim().length>0&&this.item.title.trim().length>0&&this.item.content.trim().length>0?(this.item.id>-1?this.$store.state.actionHelper.editData(this.item):this.$store.state.actionHelper.addData(this.item),this.close()):window.alert("内容不能为空!!!")}},{key:"close",value:function(){this.$store.commit("showInput")}}]),n}(u["c"]));K=Object(l["a"])([u["a"]],K);var J=K,E=J,A=(n("f173"),Object(y["a"])(E,F,P,!1,null,null,null)),V=A.exports,B=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(s["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);B=Object(l["a"])([Object(u["a"])({components:{toolbar:_,itemlist:N,inputbox:V}})],B);var Z=B,Y=Z,q=(n("61a2"),Object(y["a"])(Y,a,r,!1,null,"b3401ee2",null)),z=q.exports,G=n("2f62"),Q=(n("7db0"),n("c740"),n("d81d"),n("a434"),n("ade3")),R=function(){function t(e,n){Object(s["a"])(this,t),this.dataKey=e,this.primaryKey=n}return Object(v["a"])(t,[{key:"read",value:function(){var t=localStorage.getItem(this.dataKey),e=[];return null!==t&&(e=JSON.parse(t)),e}},{key:"save",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.dataKey,e)}},{key:"add",value:function(t){var e=this.read(),n=Object(Q["a"])({title:t.title,categoryId:t.categoryId,conten:t.content,createTime:t.createTime},this.primaryKey,e.length>0?e[e.length-1][this.primaryKey]+1:1),i=e.length>0?e[e.length-1][this.primaryKey]+1:1;return e.push(n),this.save(e),i}},{key:"remove",value:function(t){var e=this,n=this.read(),i=n.findIndex((function(n){return n[e.primaryKey]==t}));return i>-1&&(n.splice(i,1),this.save(n),!0)}}]),t}(),U=R,W=function(){function t(){Object(s["a"])(this,t),this.dataHelper=new U("demoData","id"),this.demoList=this.readData()}return Object(v["a"])(t,[{key:"readData",value:function(){var t=this.dataHelper.read(),e=t.map((function(t){var e=new m;return e.id=t.id,e.categoryId=t.categoryId,e.title=t.title,e.createTime=t.createTime,e.content=t.content,e}));return e}},{key:"addData",value:function(t){return this.demoList.push(t),t.id=this.dataHelper.add(t),t.id}},{key:"editData",value:function(t){var e=this.demoList.find((function(e){return t.id==e.id}));e&&(e.categoryId=t.categoryId,e.title=t.title,e.content=t.content,this.dataHelper.save(this.demoList))}},{key:"remove",value:function(t){var e=this.demoList.findIndex((function(e){return e.id===t}));e>-1&&(this.demoList.splice(e,1),this.dataHelper.save(this.demoList))}},{key:"getCategory",value:function(t){return["工作","生活","学习"][t]}}]),t}(),X=W;i["a"].use(G["a"]);var tt=new G["a"].Store({state:{showInput:!1,actionHelper:new X,transItem:null,filterId:-1},mutations:{showInput:function(t){t.showInput=!t.showInput},setTransItem:function(t,e){t.transItem=e,t.showInput=!0},setFilterId:function(t,e){t.filterId=e}}}),et=tt;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(z)},store:et}).$mount("#app")},e7f7:function(t,e,n){},f173:function(t,e,n){"use strict";var i=n("b42f"),a=n.n(i);a.a}});
//# sourceMappingURL=app.9434bd59.js.map