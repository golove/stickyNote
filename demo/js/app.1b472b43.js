(function(t){function e(e){for(var i,o,c=e[0],s=e[1],u=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},3658:function(t,e,n){"use strict";var i=n("5a9f"),r=n.n(i);r.a},"5a9f":function(t,e,n){},"674a":function(t,e,n){},"6b5e":function(t,e,n){"use strict";var i=n("674a"),r=n.n(i);r.a},"85ec":function(t,e,n){},"885d":function(t,e,n){"use strict";var i=n("e7f7"),r=n.n(i);r.a},b42f:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("toolbar"),n("itemlist"),t.$store.state.showInput?n("inputbox"):t._e()],1)},a=[],o=n("d4ec"),c=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar"},[n("h2",[t._v("toolbar")]),n("div",{staticClass:"btn"},[n("button",{on:{click:t.showInput}},[t._v("新增")]),n("ul",[n("li",{on:{click:function(e){return t.$store.commit("setFilterId",-1)}}},[t._v(" 全部 "),n("span",[t._v(t._s(t.doFliter(-1)))])]),n("li",{on:{click:function(e){return t.$store.commit("setFilterId",0)}}},[t._v(" 工作 "),n("span",[t._v(t._s(t.doFliter(0)))])]),n("li",{on:{click:function(e){return t.$store.commit("setFilterId",1)}}},[t._v(" 生活 "),n("span",[t._v(t._s(t.doFliter(1)))])]),n("li",{on:{click:function(e){return t.$store.commit("setFilterId",2)}}},[t._v(" 学习 "),n("span",[t._v(t._s(t.doFliter(2)))])])])])])},f=[],m=(n("4de4"),n("bee2")),v=(n("99af"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(o["a"])(this,t),this.id=e,this.categoryId=n,this.title=i,this.content=r,this.createTime=this.timeToString(Date.now())}return Object(m["a"])(t,[{key:"timeToString",value:function(t){var e=new Date(t),n="".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes());return n}}]),t}()),p=v,h=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(m["a"])(n,[{key:"showInput",value:function(){this.$store.commit("setTransItem",new p(-1,0))}},{key:"doFliter",value:function(t){return-1==t?this.$store.state.actionHelper.demoList.length:this.$store.state.actionHelper.demoList.filter((function(e){return e.categoryId===t})).length}}]),n}(l["c"]);h=Object(u["a"])([l["a"]],h);var b=h,y=b,g=(n("3658"),n("2877")),O=Object(g["a"])(y,d,f,!1,null,null,null),j=O.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"itemlist"},t._l(t.filterData(),(function(t){return n("item",{key:t.id,attrs:{item:t}})})),1)},I=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("span",[t._v(t._s(t.item.title))]),n("p",[t._v(t._s(t.item.content))]),n("span",[t._v("分类:"+t._s(t.$store.state.actionHelper.getCategory(t.item.categoryId)))]),n("button",{on:{click:t.remove}},[t._v("删除")]),n("button",{on:{click:function(e){return t.editData(t.item)}}},[t._v("修改")])])},w=[],$=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(m["a"])(n,[{key:"editData",value:function(t){var e=JSON.parse(JSON.stringify(this.item));this.$store.commit("setTransItem",e)}},{key:"remove",value:function(){confirm("确认要删除<".concat(this.item.title,">的笔记吗？"))&&this.$store.state.actionHelper.remove(this.item.id)}}]),n}(l["c"]);Object(u["a"])([Object(l["b"])()],$.prototype,"item",void 0),$=Object(u["a"])([l["a"]],$);var x=$,H=x,D=(n("6b5e"),Object(g["a"])(H,k,w,!1,null,null,null)),S=D.exports,T=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.demoArr=t.$store.state.actionHelper.demoList,t}return Object(m["a"])(n,[{key:"filterData",value:function(){var t=this;return-1==this.$store.state.filterId?this.demoArr:this.$store.state.actionHelper.demoList.filter((function(e){return e.categoryId===t.$store.state.filterId}))}}]),n}(l["c"]);T=Object(u["a"])([Object(l["a"])({components:{item:S}})],T);var F=T,L=F,P=(n("885d"),Object(g["a"])(L,_,I,!1,null,null,null)),C=P.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inputbox"},[n("form",[n("span",[t._v("分类:"+t._s(t.$store.state.actionHelper.getCategory(t.item.categoryId)))]),n("ul",[n("li",{on:{click:function(e){t.item.categoryId=0}}},[t._v("工作")]),n("li",{on:{click:function(e){t.item.categoryId=1}}},[t._v("生活")]),n("li",{on:{click:function(e){t.item.categoryId=2}}},[t._v("学习")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],attrs:{type:"text",placeholder:"title"},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.content,expression:"item.content"}],attrs:{type:"text"},domProps:{value:t.item.content},on:{input:function(e){e.target.composing||t.$set(t.item,"content",e.target.value)}}})]),n("button",{on:{click:t.submit}},[t._v("提交")]),n("button",{on:{click:t.close}},[t._v("关闭")])])},J=[],M=(n("498a"),function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.call(this),t.item=new p(-1,0),t}return Object(m["a"])(n,[{key:"created",value:function(){this.item=this.$store.state.transItem}},{key:"submit",value:function(){this.item&&this.item.title.trim().length>0&&this.item.title.trim().length>0&&this.item.content.trim().length>0?(this.item.id>-1?this.$store.state.actionHelper.editData(this.item):this.$store.state.actionHelper.addData(this.item),this.close()):window.alert("内容不能为空!!!")}},{key:"close",value:function(){this.$store.commit("showInput")}}]),n}(l["c"]));M=Object(u["a"])([l["a"]],M);var N=M,E=N,A=(n("f173"),Object(g["a"])(E,K,J,!1,null,null,null)),Y=A.exports,q=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);q=Object(u["a"])([Object(l["a"])({components:{toolbar:j,itemlist:C,inputbox:Y}})],q);var z=q,B=z,G=(n("034f"),Object(g["a"])(B,r,a,!1,null,null,null)),Q=G.exports,R=n("2f62"),U=(n("7db0"),n("c740"),n("d81d"),n("a434"),n("ade3")),V=function(){function t(e,n){Object(o["a"])(this,t),this.dataKey=e,this.primaryKey=n}return Object(m["a"])(t,[{key:"read",value:function(){var t=localStorage.getItem(this.dataKey),e=[];return null!==t&&(e=JSON.parse(t)),e}},{key:"save",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.dataKey,e)}},{key:"add",value:function(t){var e=this.read(),n=Object(U["a"])({title:t.title,categoryId:t.categoryId,conten:t.content,createTime:t.createTime},this.primaryKey,e.length>0?e[e.length-1][this.primaryKey]+1:1),i=e.length>0?e[e.length-1][this.primaryKey]+1:1;return e.push(n),this.save(e),i}},{key:"remove",value:function(t){var e=this,n=this.read(),i=n.findIndex((function(n){return n[e.primaryKey]==t}));return i>-1&&(n.splice(i,1),this.save(n),!0)}}]),t}(),W=V,X=function(){function t(){Object(o["a"])(this,t),this.dataHelper=new W("demoData","id"),this.demoList=this.readData()}return Object(m["a"])(t,[{key:"readData",value:function(){var t=this.dataHelper.read(),e=t.map((function(t){var e=new p;return e.id=t.id,e.categoryId=t.categoryId,e.title=t.title,e.createTime=t.createTime,e.content=t.content,e}));return e}},{key:"addData",value:function(t){return this.demoList.push(t),t.id=this.dataHelper.add(t),t.id}},{key:"editData",value:function(t){var e=this.demoList.find((function(e){return t.id==e.id}));e&&(e.categoryId=t.categoryId,e.title=t.title,e.content=t.content,this.dataHelper.save(this.demoList))}},{key:"remove",value:function(t){var e=this.demoList.findIndex((function(e){return e.id===t}));e>-1&&(this.demoList.splice(e,1),this.dataHelper.save(this.demoList))}},{key:"getCategory",value:function(t){return["工作","生活","学习"][t]}}]),t}(),Z=X;i["a"].use(R["a"]);var tt=new R["a"].Store({state:{showInput:!1,actionHelper:new Z,transItem:null,filterId:-1},mutations:{showInput:function(t){t.showInput=!t.showInput},setTransItem:function(t,e){t.transItem=e,t.showInput=!0},setFilterId:function(t,e){t.filterId=e}}}),et=tt;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Q)},store:et}).$mount("#app")},e7f7:function(t,e,n){},f173:function(t,e,n){"use strict";var i=n("b42f"),r=n.n(i);r.a}});
//# sourceMappingURL=app.1b472b43.js.map