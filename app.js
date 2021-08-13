(function(e){function t(t){for(var s,i,a=t[0],u=t[1],l=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00b3":function(e,t,n){var s={"./en/index.js":"5cb2","./index.js":"f1ed","./zh-cn/index.js":"bf3c"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="00b3"},1:function(e,t){},"216f":function(e,t,n){},"25d7":function(e,t){e.exports="描述一下您期望这个新功能的 API 是如何使用的，并提供一些代码示例。请用 [Markdown](https://guides.github.com/features/mastering-markdown/) 格式化您的代码片段。\n"},"2a4f":function(e,t){e.exports="所谓『重现』，就是一段可以运行并展示一个 bug 如何发生的代码。\n\n##### 文字是不够的\n\n如果您遇到一个问题，但是只提供了一些文字描述，我们是不可能修复这个 bug 的。首先，文字在描述技术问题时的表达难度和不精确性；其次，问题的真实原因有很多可能，它完全有可能是一个您根本没有提及的因素导致的。重现是唯一能够可靠地让我们理解问题本质的方式。\n\n##### 重现必须是可运行的\n\n**截图和视频不是重现**。它们仅仅证明了 bug 的存在，但却不能提供关于 bug 是如何发生的信息。只有可运行的代码提供了完整的上下文，并让我们可以进行真正的 debug 而不是空想和猜测。当然，在提供的重现的前提下，视频或是 gif 动画可以帮助解释一些比较难用文字描述的交互行为。\n\n##### 重现应当尽量精简\n\n有些用户会直接给我们一整个项目的代码，然后希望我们帮忙找出问题所在。此类请求我们通常不予接受，因为：\n\n- 您对您的项目的代码结构可能已经非常熟悉，但我们并不是。阅读、运行、分析一个完全陌生的项目是极其耗费时间和精力的。\n\n- 由于涉及了大量业务代码，问题可能是您的代码错误，而不是 ECharts 的 bug 所导致的。\n\n一个最小化的重现意味着它精确地定位了 bug 本身 - 它应当只包含能够触发 bug 的**最少量**的代码。您应当尽可能地剔除任何跟该 bug 无关的部分。\n\n##### 如何提供一个重现\n\n如果是跟配置项有关的问题，我们建议在 [Gallery](http://gallery.echartsjs.com/editor.html) 中新建一个能够复现您问题的作品后发给我们。如果涉及到配置项外的一些问题，或者项目比较复杂无法在 Gallery 中呈现，我们建议使用诸如 [JSFiddle](https://jsfiddle.net/chrisvfritz/50wL7mdz/), [JSBin](https://jsbin.com) 或是 [Codepen](https://codepen.io) 这样的在线代码服务来提供重现。"},"44e9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("8e6e"),n("ac6a"),n("456d");var s=n("ade3"),r=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),o=n("2909"),i=(n("386d"),n("0e54")),a=n.n(i),u=n("f1ed"),l=n("4328"),c=n.n(l),d=function(e){e.mixin({beforeCreate:function(){if(this.$root===this){this.$locales=u["default"];var t=c.a.parse(window.location.search.slice(1));e.util.defineReactive(this,"$lang",t&&t.lang||"en")}}});var t=function(e,t){return'[i18n content not found for { lang: "'.concat(e,'", id: "').concat(t,'" }')};function n(){var e=this;Object(o["a"])(this.$el.querySelectorAll("a")).forEach((function(t){t.setAttribute("tabindex","-1");var n=t.getAttribute("href");n&&("#"!==n.charAt(0)?t.setAttribute("target","_blank"):t.addEventListener("click",(function(){e.$emit("click-".concat(n.slice(1)))})))}))}e.prototype.i18n=function(e){var n=this.$root,s=n.$locales,r=n.$lang,o=s[r];return o[e]||t(r,e)},e.component("i18n",{props:["id"],render:function(e){var n=this.$root,s=n.$locales,r=n.$lang,o=s[r],i=o[this.id];return e("div",{domProps:{innerHTML:i?a()(i.trim()):'<div style="color:red">'.concat(t(r,this.id),"</div>")}})},mounted:n,updated:n})},p=n("39f8"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("AppHeader",{attrs:{lang:e.$lang},on:{"change-lang":e.setLang}}),n("div",{staticClass:"container"},[n("form",{staticClass:"main-form",on:{submit:function(t){return t.preventDefault(),e.generate.apply(null,arguments)}}},[n("FormIntro"),n("div",{staticClass:"common-fields vue-ui-grid col-2 default-gap"},[n("VueFormField",{staticClass:"first-row",attrs:{title:e.i18n("type-title")}},[n("VueGroup",{staticClass:"extend",model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.types,(function(t){return n("VueGroupButton",{key:t.id,attrs:{value:t.id}},[e._v("\n              "+e._s(t.name)+"\n            ")])})),1)],1),n("VueFormField",{staticClass:"span-2",attrs:{title:e.i18n("title-title")}},[n("VueInput",{attrs:{required:"",autofocus:""},on:{blur:e.findIssues},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),n("template",{slot:"subtitle"},[e.issues.length?n("div",{staticClass:"similar-issues"},[e._v("\n              "+e._s(e.i18n("similar-issues"))+":\n\n              "),n("ul",e._l(e.issues,(function(t){return n("li",{key:t.id},[n("a",{staticClass:"issue",attrs:{href:t.html_url,target:"_blank",rel:"noreferrer",tabindex:"-1"}},[e._v("\n                    "+e._s(t.title)+"\n                  ")])])})),0),e.showIssueToggleControl?n("p",[e.showingAllIssues?n("span",{attrs:{role:"button"},on:{click:function(t){e.showingAllIssues=!1}}},[e._v("\n                  "+e._s(e.i18n("show-less"))+"\n                ")]):n("span",{attrs:{role:"button"},on:{click:function(t){e.showingAllIssues=!0}}},[e._v("\n                  "+e._s(e.i18n("show-more"))+"\n                ")])]):e._e()]):e._e()])],2)],1),n("keep-alive",[n(e.type,{ref:"content",tag:"component",attrs:{repo:e.repo}})],1),n("div",{staticClass:"form-actions"},[n("VueButton",{staticClass:"primary big",attrs:{type:"submit",label:e.i18n("preview")}})],1)],1),e.show?n("VueModal",{staticClass:"medium",attrs:{title:e.i18n("preview-title")},on:{close:function(t){e.show=!1}}},[n("Preview",{attrs:{generated:e.generated}}),n("div",{staticClass:"actions",attrs:{slot:"footer"},slot:"footer"},[n("VueButton",{staticClass:"primary big",attrs:{label:e.i18n("create")},on:{click:function(t){return e.create()}}})],1)],1):e._e()],1),e._m(0)],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app-footer"},[n("small",[e._v("\n      Forked from\n      "),n("a",{attrs:{href:"https://github.com/vuejs/vue-issue-helper"}},[e._v("vue-issue-helper")]),e._v("\n      to\n      "),n("a",{attrs:{href:"https://github.com/ecomfe/echarts-issue-helper"}},[e._v("echarts-issue-helper")])])])}],m=[{id:"en",name:"English"},{id:"zh-cn",name:"中文"}],b=(n("a481"),n("b54a"),n("f904")),g=n.n(b),v=n("1487"),w=n.n(v);function y(e){var t="".concat(e,"\n\n\x3c!-- This issue is generated by echarts-issue-helper. DO NOT REMOVE --\x3e");g()(t);var n=new a.a.Renderer({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1}),s=n.link;return n.link=function(e,t,r){var o=s.call(n,e,t,r);return o.replace(/^<a /,'<a target="_blank" rel="nofollow" ')},a.a.setOptions({highlight:function(e){return w.a.highlightAuto(e).value}}),{markdown:t,html:a()(e,{renderer:n})}}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){return c.a.parse(window.location.search.slice(1))}function k(e){var t=window.location.origin+window.location.pathname+"?"+c.a.stringify(A(A({},O()),e),{encode:!1});window.history.pushState({path:t},"",t)}function I(e,t){if(document.selection){e.focus();var n=document.selection.createRange();n.text=t,n.select()}else if(e.selectionStart||"0"==e.selectionStart){var s=e.selectionStart,r=e.selectionEnd,o=e.value.substring(0,s),i=e.value.substring(r,e.value.length);e.value=o+t+i,e.selectionStart=s+t.length,e.selectionEnd=s+t.length,e.focus()}else e.value+=t,e.focus();return e.value}n("c5f6"),n("6b54");function j(e){var t=e.lastIndexOf("."),n=e.substr(0,t),s=e.substr(t+1,e.length);return{name:n,hash:C(),suffix:s}}var C=function(){return Number(Math.random().toString().substr(2,5)+Date.now()).toString(36)},S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-intro"},[n("i18n",{staticClass:"intro bg-faded",attrs:{id:"intro"},on:{"click-modal":function(t){e.show=!0}}}),e.show?n("VueModal",{staticClass:"medium",attrs:{title:e.i18n("intro-modal-title")},on:{close:function(t){e.show=!1}}},[n("div",{staticClass:"default-body"},[n("i18n",{attrs:{id:"intro-modal"}})],1)]):e._e()],1)},E=[],V={data:function(){return{show:!1}}},P=V,F=(n("ed3e"),n("2877")),R=Object(F["a"])(P,S,E,!1,null,"0088e0ca",null),D=R.exports,q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"app-header"},[s("div",{staticClass:"container"},[s("a",{staticClass:"brand",attrs:{href:"#"}},[s("img",{staticClass:"logo",attrs:{src:n("9d64"),alt:"Vue's logo",height:"24"}}),e._v("\n      Issue Helper\n    ")])])])}],B={props:["lang"]},N=B,L=(n("640f"),Object(F["a"])(N,q,G,!1,null,"bc633fee",null)),T=L.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bug-report",staticStyle:{margin:"0"}},[n("div",{staticClass:"vue-ui-grid col-2 default-gap"},[n("VueFormField",{attrs:{title:e.i18n("version-title"),subtitle:e.i18n("version-subtitle")}},[n("VueTypeAhead",{attrs:{suggestions:e.suggestions,loading:e.loadingVersion,"show-all":"","show-max":"30",required:""},model:{value:e.attrs.version,callback:function(t){e.$set(e.attrs,"version",t)},expression:"attrs.version"}})],1),"vuejs/vue-devtools"===e.repo?n("VueFormField",{attrs:{title:e.i18n("browser-and-os-title")}},[n("VueInput",{attrs:{required:""},model:{value:e.attrs.browserAndOS,callback:function(t){e.$set(e.attrs,"browserAndOS",t)},expression:"attrs.browserAndOS"}}),n("i18n",{attrs:{slot:"subtitle",id:"browser-and-os-subtitle"},slot:"subtitle"})],1):[e.isCLI&&e.doesNotSupportVueInfo?n("VueFormField",{attrs:{title:e.i18n("node-and-os-title")}},[n("VueInput",{attrs:{required:""},model:{value:e.attrs.nodeAndOS,callback:function(t){e.$set(e.attrs,"nodeAndOS",t)},expression:"attrs.nodeAndOS"}}),n("i18n",{attrs:{slot:"subtitle",id:"node-and-os-subtitle"},slot:"subtitle"})],1):e.isCLI?n("VueFormField",{staticClass:"span-2",attrs:{title:e.i18n("cli-envinfo-title")}},[n("VueInput",{attrs:{type:"textarea",required:""},model:{value:e.attrs.cliEnvInfo,callback:function(t){e.$set(e.attrs,"cliEnvInfo",t)},expression:"attrs.cliEnvInfo"}}),n("i18n",{attrs:{slot:"subtitle",id:"cli-envinfo-subtitle"},slot:"subtitle"})],1):e._e(),n("VueFormField",{attrs:{title:e.i18n("repro-title")}},[n("VueInput",{attrs:{type:"url",disabled:e.isCLI&&e.reproNotAvailable},model:{value:e.attrs.reproduction,callback:function(t){e.$set(e.attrs,"reproduction",t)},expression:"attrs.reproduction"}}),n("template",{slot:"subtitle"},[n("i18n",{attrs:{id:e.isCLI?"cli-repro-subtitle":"repro-subtitle"},on:{"click-modal":function(t){e.show=!0}}}),e.isCLI?n("VueSwitch",{model:{value:e.reproNotAvailable,callback:function(t){e.reproNotAvailable=t},expression:"reproNotAvailable"}},[n("i18n",{attrs:{id:"cli-no-repro"}})],1):e._e()],1)],2)],n("VueFormField",{staticClass:"span-2",attrs:{title:e.i18n("steps-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:"",loadingRight:e.loading.steps},on:{focus:function(t){return e.saveInsertPos("steps",t)}},model:{value:e.attrs.steps,callback:function(t){e.$set(e.attrs,"steps",t)},expression:"attrs.steps"}}),n("i18n",{attrs:{slot:"subtitle",id:"steps-subtitle"},slot:"subtitle"})],1),n("VueFormField",{attrs:{title:e.i18n("expected-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:"",loadingRight:e.loading.expected},on:{focus:function(t){return e.saveInsertPos("expected",t)}},model:{value:e.attrs.expected,callback:function(t){e.$set(e.attrs,"expected",t)},expression:"attrs.expected"}})],1),n("VueFormField",{attrs:{title:e.i18n("actual-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:"",loadingRight:e.loading.actual},on:{focus:function(t){return e.saveInsertPos("actual",t)}},model:{value:e.attrs.actual,callback:function(t){e.$set(e.attrs,"actual",t)},expression:"attrs.actual"}})],1),n("VueFormField",{staticClass:"span-2",attrs:{title:e.i18n("extra-title"),subtitle:e.i18n("extra-subtitle")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",loadingRight:e.loading.extra},on:{focus:function(t){return e.saveInsertPos("extra",t)}},model:{value:e.attrs.extra,callback:function(t){e.$set(e.attrs,"extra",t)},expression:"attrs.extra"}})],1)],2),e.show?n("VueModal",{staticClass:"medium",attrs:{title:e.i18n("repro-modal-title")},on:{close:function(t){e.show=!1}}},[n("div",{staticClass:"default-body"},[n("i18n",{attrs:{id:"repro-modal"}})],1)]):e._e(),n("ImgUpload",{on:{putEnd:e.insertImg,putStart:e.uploadStart,error:function(){var t=e.insertedAttrs.shift(),n=t.attr;t.field;e.loading[n]=!1}}})],1)},M=[],_=(n("96cf"),n("1da1")),U=(n("55dd"),n("8d61")),W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{staticStyle:{display:"none"},attrs:{type:"file",accept:"imgae/*",id:"img-upload",multiple:""},on:{change:e.attachImg}}),n("label",{attrs:{for:"img-upload"}},[e._v("Attach image")])])},Z=[],H=(n("28a5"),n("7f7f"),n("bc3a")),Q=n.n(H),J={prop:["title"],data:function(){return{uploadUrl:"http://121.40.96.103:8100/upload",fileAsserts:[],owner:"tintinng",selectedRepos:"Imgs-bed",path:"echarts-helper-images/",imgUploadUrl:"",imgData:{message:"image put from echarts-issue-helper",branch:"main",content:"",commiter:{name:"tintinng",email:"906183742@qq.com"}},token:"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"}},methods:{attachImg:function(e){var t=this;this.fileAsserts.length=0;for(var n=e.target.files,s=0,r=n.length;s<r;s++){var o=new FileReader;/image/.test(n[s].type)&&function(){var e=j(n[s].name),r=e.name,i=e.hash,a=e.suffix,u="".concat(r,".").concat(i,".").concat(a),l="https://api.github.com/repos/".concat(t.owner,"/").concat(t.selectedRepos,"/contents/").concat(t.path).concat(u),c=Object.assign(t.imgData);o.onload=function(e){c.content="".concat(e.target.result.split(",")[1]),t.$emit("putStart",!0),Q.a.put(l,c,{headers:{"Content-Type":"application/json",Authorization:"token ".concat(t.token)}}).then((function(e){var n=e.data.content.download_url;t.fileAsserts.push(n),t.$emit("putEnd",[n])})).catch((function(e){t.$emit("error",e)}))},o.readAsDataURL(n[s])}()}},uploadImage:function(e){var t=this,n=new FormData,s={headers:{"Content-Type":"multipart/form-data"}};Array.prototype.forEach.call(e,(function(e){n.append("images",e)})),Q.a.post(this.uploadUrl,n,s).then((function(e){t.fileAsserts=e.data.fileAsserts,t.$emit("putEnd",t.fileAsserts)}))}}},X=J,K=(n("c794"),Object(F["a"])(X,W,Z,!1,null,"506e0bb3",null)),$=K.exports,Y={props:["repo"],components:{ImgUpload:$},data:function(){return{show:!1,attrs:{version:"",reproduction:"",steps:"",expected:"",actual:"",extra:"",browserAndOS:"",nodeAndOS:"",cliEnvInfo:""},focused:{field:{},attr:""},insertedAttrs:[],loading:{steps:!1,expected:!1,actual:!1,extra:!1},versions:[],loadingVersion:!1,reproNotAvailable:!1}},computed:{suggestions:function(){return this.versions.slice().sort((function(e,t){return Object(U["gt"])(e.value,t.value)?-1:1}))},isCLI:function(){return"vuejs/vue-cli"===this.repo},doesNotSupportVueInfo:function(){return this.attrs.version&&Object(U["lt"])(this.attrs.version,"3.2.0")}},watch:{repo:function(){this.versions=[],this.attrs.version="",this.fetchVersions()}},created:function(){this.fetchVersions()},methods:{fetchVersions:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var t,n,s,r,o,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,this.loadingVersion=!0,n=this.repo,e.next=5,fetch("https://api.github.com/repos/".concat(n,"/releases?page=").concat(t,"&per_page=100"));case 5:return s=e.sent,e.next=8,s.json();case 8:if(r=e.sent,this.repo===n){e.next=11;break}return e.abrupt("return");case 11:if(r&&r instanceof Array){e.next=13;break}return e.abrupt("return",!1);case 13:if(this.versions=this.versions.concat(r.map((function(e){return{value:/^v/.test(e.tag_name)?e.tag_name.substr(1):e.tag_name}}))),o=s.headers.get("Link"),!(o&&o.indexOf('rel="next"')>-1)){e.next=20;break}return e.next=18,this.fetchVersions(t+1);case 18:e.next=21;break;case 20:this.loadingVersion=!1;case 21:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),generate:function(){var e=this.attrs,t=e.version,n=e.reproduction,s=e.steps,r=e.expected,o=e.actual,i=e.extra,a=e.browserAndOS,u=e.nodeAndOS,l=e.cliEnvInfo;return y("\n### Version\n".concat(t,"\n\n").concat(n?"### Reproduction link\n[".concat(n,"](").concat(n,")"):"","\n\n").concat(a?"### Browser and OS info\n".concat(a):"","\n\n").concat(u?"### Node and OS info\n".concat(u):"","\n\n").concat(l?"### Environment info\n```\n".concat(l,"\n```\n"):"","\n\n### Steps to reproduce\n").concat(s,"\n\n### What is expected?\n").concat(r,"\n\n### What is actually happening?\n").concat(o,"\n\n").concat(i?"---\n".concat(i):"","\n  ").trim())},uploadStart:function(){this.insertedAttrs.push({attr:this.focused.attr,field:this.focused.field}),this.loading[this.focused.attr]=!0},insertImg:function(e){var t=this,n=this.insertedAttrs.shift(),s=n.attr,r=n.field;e.forEach((function(e){t.attrs[s]=I(r,"![](".concat(e,")\n")),t.loading[s]=!1}))},saveInsertPos:function(e,t){this.focused.attr=e,this.focused.field=t.target}}},ee=Y,te=Object(F["a"])(ee,z,M,!1,null,null,null),ne=te.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feature-request"},[n("div",{staticClass:"vue-ui-grid col-1 default-gap"},[n("VueFormField",{attrs:{title:e.i18n("rationale-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:"",loadingRight:e.loading.rationale},on:{focus:function(t){return e.saveInsertPos("rationale",t)}},model:{value:e.attrs.rationale,callback:function(t){e.$set(e.attrs,"rationale",t)},expression:"attrs.rationale"}}),n("i18n",{attrs:{slot:"subtitle",id:"rationale-subtitle"},slot:"subtitle"})],1),n("VueFormField",{attrs:{title:e.i18n("proposal-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:"",loadingRight:e.loading.proposal},on:{focus:function(t){return e.saveInsertPos("proposal",t)}},model:{value:e.attrs.proposal,callback:function(t){e.$set(e.attrs,"proposal",t)},expression:"attrs.proposal"}}),n("i18n",{attrs:{slot:"subtitle",id:"proposal-subtitle"},slot:"subtitle"})],1),n("ImgUpload",{on:{putEnd:e.insertImg,putStart:e.uploadStart,error:function(){var t=e.insertedAttrs.shift(),n=t.attr;t.field;e.loading[n]=!1}}})],1)])},re=[],oe={components:{ImgUpload:$},data:function(){return{attrs:{rationale:"",proposal:""},loading:{rationale:!1,proposal:!1},focused:{field:{},attr:""},insertedAttrs:[]}},methods:{generate:function(){var e=this.attrs,t=e.rationale,n=e.proposal;return y("\n### What problem does this feature solve?\n".concat(t,"\n\n### What does the proposed API look like?\n").concat(n,"\n  ").trim())},uploadStart:function(){this.insertedAttrs.push({attr:this.focused.attr,field:this.focused.field}),this.loading[this.focused.attr]=!0},insertImg:function(e){var t=this,n=this.insertedAttrs.shift(),s=n.attr,r=n.field;e.forEach((function(e){t.attrs[s]=I(r,"![](".concat(e,")\n")),t.loading[s]=!1}))},saveInsertPos:function(e,t){this.focused.attr=e,this.focused.field=t.target}}},ie=oe,ae=Object(F["a"])(ie,se,re,!1,null,null,null),ue=ae.exports,le="https://api.github.com/search/issues";function ce(e){return Array.isArray(e)?e:[e]}var de=5,pe={data:function(){return{_issues:[],showingAllIssues:!1}},computed:{issues:{get:function(){var e=this.$data._issues;return this.showingAllIssues?e:e.slice(0,de)},set:function(e){this.$data._issues=e}},showIssueToggleControl:function(){return this.$data._issues.length>de}},methods:{fetchIssues:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t,n){var s,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=Object.keys(n).map((function(e){return ce(n[e]).map((function(t){return"".concat(e,":").concat(t)})).join(" ")})).join(" ")+" "+t,e.prev=1,e.next=4,Q.a.get(le,{params:{q:s}});case 4:r=e.sent,o=r.items,this.$data._issues=o||[],e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(t,n){return e.apply(this,arguments)}return t}()}},he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-body markdown-body",domProps:{innerHTML:e._s(e.generated.html)}})},fe=[],me=(n("2c43"),{props:["generated"]}),be=me,ge=(n("659b"),Object(F["a"])(be,he,fe,!1,null,"6aeedbea",null)),ve=ge.exports,we={name:"App",mixins:[pe],components:{FormIntro:D,AppHeader:T,BugReport:ne,FeatureRequest:ue,Preview:ve},data(){return{title:"",generated:{markdown:"",html:""},show:!1,preview:!1,lang:"",langs:m,type:"bug-report",versions:{}}},computed:{types(){return this.$lang&&[{id:"bug-report",name:this.i18n("bug-report")},{id:"feature-request",name:this.i18n("feature-request")}]}},watch:{repo(e){k({repo:e})}},created(){this.repo=O().repo||"apache/incubator-echarts",this.lang=this.i18n("lang")},methods:{setLang(e){this.$lang=e,this.lang=e,k({lang:e})},findIssues(){this.issues=[],this.title&&this.fetchIssues(this.title,{is:"issue",repo:this.repo})},generate(){this.generated=this.$refs.content.generate(),this.show=!0},create(){const e=encodeURIComponent(this.title).replace(/%2B/gi,"+"),t="en"===this.lang?"\x3c!-- This issue is in English. DO NOT REMOVE --\x3e":"",n=encodeURIComponent(this.generated.markdown+"\n"+t).replace(/%2B/gi,"+").replace(/(%0A){3,}/gi,"%0A%0A"),s="feature-request"===this.type?"&labels=feature%20request":"";window.open(`https://github.com/${this.repo}/issues/new?title=${e}&body=${n}${s}`)}}},ye=we,xe=(n("cb34"),n("97d3"),n("e9ae"),Object(F["a"])(ye,h,f,!1,null,"952d15ae",null)),Ae=xe.exports;function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}r["a"].use(d),r["a"].use(p["a"]),window.addEventListener("dragover",(function(e){e.preventDefault()})),window.addEventListener("drop",(function(e){e.preventDefault(),alert(Ie.i18n("drop-warn"))}));var Ie=new r["a"](ke({el:"#app"},Ae))},"58bf":function(e,t,n){},"5cb2":function(e,t,n){"use strict";n.r(t),t["default"]={_label:"EN",intro:n("d3d1"),"intro-modal-title":"The reason behind our strict issue policy","intro-modal":n("b7e5"),lang:"en","lang-title":"I am opening an issue in","lang-subtitle":" ","type-title":"This is a","title-title":"Issue title","version-title":"Version","version-subtitle":"Check if the issue is reproducible with the latest stable version of ECharts.","repro-title":"Link to minimal reproduction (optional)","repro-subtitle":n("bf5d"),"repro-modal-title":"About Reproductions","repro-modal":n("811c"),"node-and-os-title":"Node, npm/yarn and OS info","node-and-os-subtitle":"Please specify node.js version, npm or yarn version, OS name & version. Example: Node 10.7.0 / yarn 1.7.0 / Windows 10","browser-and-os-title":"Browser and OS info","browser-and-os-subtitle":"Please specify browser name & version, OS name & version. Example: Chrome 62 / Windows 10","steps-title":"Steps to reproduce","steps-subtitle":n("9c53"),"expected-title":"What is expected?","actual-title":"What is actually happening?","extra-title":"Any additional comments? (optional)","extra-subtitle":"e.g. some background/context of how you ran into this bug.","rationale-title":"What problem does this feature solve?","rationale-subtitle":n("b4f5"),"proposal-title":"What does the proposed API look like?","proposal-subtitle":n("910f"),preview:"Preview","preview-title":"Issue Preview",create:"Create","bug-report":"Bug Report","feature-request":"Feature Request","similar-issues":"Similar issues","show-more":"Show more","show-less":"Show less","drop-warn":"Unfortunately, image drop/uploading is not supported due to GitHub API limitations. However, you can create the issue first (which will take you to GitHub) and then drop the images needed."}},6261:function(e,t,n){},"640f":function(e,t,n){"use strict";n("ae79")},"659b":function(e,t,n){"use strict";n("58bf")},"66f0":function(e,t){e.exports="打开重现后，我们需要执行哪些操作才能让 bug 出现？简洁清晰的重现步骤能够帮助我们更迅速地定位问题所在。支持使用 [Markdown](https://guides.github.com/features/mastering-markdown/) 来格式化列表或是代码片段。\n"},"811c":function(e,t){e.exports="A bug reproduction is a piece of code that can run and demonstrate how a bug can happen.\n\n##### Text is not enough\n\nIt's impossible to fix a bug from mere text descriptions. First, it's very difficult to precisely describe a technical problem while keeping it easy to follow; Second, the real cause may very well be something that you forgot to even mention. A reproduction is the only way that can reliably help us understand what is going on, so please provide one.\n\n##### A repro must be runnable\n\nScreenshots or videos are **NOT** reproductions! They only show that the bug exists, but do not provide enough information on why it happens. Only runnable code provides the most complete context and allows us to properly debug the scenario. That said, in some cases videos/gifs can help explain interaction issues that are hard to describe in text.\n\n##### A repro should be minimal\n\nSome users would give us a link to a real project and hope we can help them figure out what is wrong. We generally do not accept such requests because:\n\n- You are already familiar with your codebase, but we are not. It is extremely time-consuming to hunt a bug in a big and unfamiliar codebase.\n\n- The problematic behavior may very well be caused by your code rather than by a bug in ECharts.\n\nA **minimal** reproduction means it demonstrates the bug, and the bug only. It should only contain the bare minimum amount of code that can reliably cause the bug. Try your best to get rid of anything that aren't directly related to the problem.\n\n##### How to create a repro\n\nUnless your bug can only be reproduced with a built setup, we prefer reproductions made with online coding services like [JSFiddle](https://jsfiddle.net/chrisvfritz/50wL7mdz/), [JSBin](https://jsbin.com) or [Codepen](https://codepen.io).\n"},"910f":function(e,t){e.exports="Describe how you propose to solve the problem and provide code samples of how the API would work once implemented. Note that you can use [Markdown](https://guides.github.com/features/mastering-markdown/) to format your code blocks.\n"},"962d":function(e,t){e.exports="维护开源项目，尤其是流行的项目，是[非常辛苦的工作](https://nolanlawson.com/2017/03/05/what-it-feels-like-to-be-an-open-source-maintainer/)。随着 ECharts 在社区越来越受欢迎，我们每天都在收到越来越多的问题， bug 报告，功能需求和 Pull Requests。\n\n作为一个完全免费使用的开源项目，ECharts 的维护人手是有限的。这意味着想要让项目长期的可持续发展，我们必须：\n\n1. 给予更具体的工作更高的优先级（比如 bug 的修复和新功能的开发）；\n2. 提高 issue 处理的效率。\n\n针对 (1)，我们决定将 GitHub issue 列表严格地限制用于有具体目标和内容的工作。问题和讨论应当发送到更适合它们的场合。\n\n针对 (2)，我们发现影响 issue 处理效率的最大因素是用户在开 issue 时没有提供足够的信息。这导致我们需要花费大量的时间去跟用户来回沟通，只为了获得一些基本信息好让我们对 issue 进行真正的分析。这正是我们开发这个 app 的理由：我们要确保每个新 issue 都提供了必需的信息，这样能节省维护者和开发者双方的时间。\n\n最重要的是，请明白一件事：开源项目的用户和维护者之间并不是甲方和乙方的关系，issue 也不是客服。在开 issue 的时候，请抱着一种『一起合作来解决这个问题』的心态，不要期待我们单方面地为您服务。\n"},"97d3":function(e,t,n){"use strict";n("e6ae")},"995c":function(e,t){e.exports='如果是跟配置项有关的问题，我们建议在 [Gallery](http://gallery.echartsjs.com/editor.html) 中新建一个能够复现您问题的作品后发给我们。如果涉及到配置项外的一些问题，或者项目比较复杂无法在 Gallery 中呈现，我们建议使用诸如 [JSFiddle](https://jsfiddle.net/chrisvfritz/50wL7mdz/), [JSBin](https://jsbin.com) 或是 [Codepen](https://codepen.io) 这样的在线代码服务来提供重现。\n\n\x3c!-- [什么是*最小化重现*，为什么这是必需的？](#modal) --\x3e\n\n<span class="vue-text danger">请不要乱填一个链接，那只会让您的 issue 被直接关闭。</span>\n'},"9c53":function(e,t){e.exports="What do we need to do after opening your repro in order to make the bug happen? Clear and concise reproduction instructions are important for us to be\nable to triage your issue in a timely manner. Note that you can use\n[Markdown](https://guides.github.com/features/mastering-markdown/) to format lists and code.\n"},"9d64":function(e,t){e.exports="data:image/png;base64,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"},ae79:function(e,t,n){},b4f5:function(e,t){e.exports="Explain your use case, context, and rationale behind this feature request. More importantly, what is the **end user experience** you are trying to build that led to the need for this feature?\n\nAn important design goal of ECharts is keeping the API surface small and straightforward. In general, we only consider adding new features that solve a problem that cannot be easily dealt with using existing APIs (i.e. not just an alternative way of doing things that can already be done). The problem should also be common enough to justify the addition.\n"},b55d:function(e,t){e.exports="## 在您开始之前...\n\n首先，虽然我们为了中文用户的方便提供了中文的表单，但您仍然可以**在本页面的表单内使用英文填写**，并且这是我们强烈建议及感谢您使用的方式。加入 Apache 开源基金会后，ECharts 有了更多国外的用户。为了更多人可以帮助到您（英文的 issue 可能被更多想帮助您的人看懂），并且帮助更多其他人（日后其他用户可能在 issue 中搜索到该问题），再次建议在下面的表单中使用英文。\n\n其次，ECharts 的 issue 列表只接缺陷报告、改进建议或是新功能请求（feature requests）。这意味着**我们不接受在 issue 中提问基础的用法问题**。如果您开的 issue 不符合规定，它可能会被**关闭**。<br>[为什么要这么严格？](#modal)\n\n对于使用中遇到的问题，请使用以下资源：\n\n- 阅读和查找 [配置项文档](http://www.echartsjs.com/option.html)\n- 在 [官方示例](http://www.echartsjs.com/examples/) 或者 [Gallery](http://gallery.echartsjs.com) 中寻找需要的效果\n- 在 [SegmentFault](https://segmentfault.com/t/echarts) 或者 [StackOverflow](https://stackoverflow.com/questions/tagged/echarts) 提问（由社区成员互帮互助解决问题）\n\n最后，在开 issue 前，可以先**搜索一下以往的旧 issue** 以帮助您更快速地解决问题——您遇到的问题可能已经有人提了，也可能已经在最新版本中被修正。注意：如果您发现一个已经关闭的旧 issue 在最新版本中仍然存在，请不要在旧 issue 下面留言，而应该用下面的表单开一个新的 issue，并且引用先前的 issue。\n"},b7e5:function(e,t){e.exports="Maintaining open source projects, especially popular ones, is [hard work](https://nolanlawson.com/2017/03/05/what-it-feels-like-to-be-an-open-source-maintainer/). As ECharts's user base has grown, we are getting more and more usage questions, bug reports, feature requests and pull requests every single day.\n\nAs a free and open source project, ECharts also has limited maintainer bandwidth. That means the only way to ensure the project's sustainability is to:\n\n1. Prioritize more concrete work (bug fixes and new features);\n2. Improve issue triaging efficiency.\n\nFor (1), we have decided to use the GitHub issue lists exclusively for work that has well-defined, actionable goals. Questions and open ended discussions should be posted to mediums that are better suited for them.\n\nFor (2), we have found that issues that do not provide proper information upfront usually results in terribly inefficient back-and-forth communication just to extract the basic information needed for actual triaging. This is exactly why we have created this app: to ensure that every issue is created with the necessary information, and to save time on both sides.\n"},bf3c:function(e,t,n){"use strict";n.r(t),t["default"]={_label:"中文",intro:n("b55d"),"intro-modal-title":"为什么要有这么严格的 issue 规定","intro-modal":n("962d"),lang:"zh-cn","lang-title":"这个 issue 的内容是用以下语言写的","lang-subtitle":"表单是中文的，同样可以创建英文内容的 issue，并且我们强烈建议您这么做，这将使您的 issue 被更多人看懂","type-title":"这是一个","title-title":"Issue 标题","version-title":"版本","version-subtitle":"请检查问题是否存在于 ECharts 的最新版本中。","repro-title":"重现链接（可选）","repro-subtitle":n("995c"),"repro-modal-title":"关于重现","repro-modal":n("2a4f"),"node-and-os-title":"Node.js、npm/yarn 以及操作系统信息","node-and-os-subtitle":"请写明 Node.js 版本、npm/yarn 的版本、操作系统的名称以及版本，例如: Node 10.7.0 / yarn 1.7.0 / Windows 10","browser-and-os-title":"浏览器和操作系统信息","browser-and-os-subtitle":"请写明浏览器和操作系统的名称/版本，例如: Chrome 62 / Windows 10","steps-title":"重现步骤","steps-subtitle":n("66f0"),"expected-title":"期望的结果是什么？","actual-title":"实际的结果是什么？","extra-title":"补充说明（可选）","extra-subtitle":"比如：遇到这个 bug 的业务场景、上下文。","rationale-title":"这个功能解决了什么问题？","rationale-subtitle":n("bfdf"),"proposal-title":"您期望的 API 是怎样的？","proposal-subtitle":n("25d7"),preview:"预览","preview-title":"预览",create:"创建 Issue","bug-report":"错误报告","feature-request":"功能要求","similar-issues":"类似的 issue","show-more":"展开","show-less":"收起","drop-warn":"由于 GitHub API 的限制，这里不支持图片拖拽上传功能。但是您可以先创建 issue，然后在 GitHub 的界面中上传需要的图片。"}},bf5d:function(e,t){e.exports='If the reproduction does not need a build setup, please provide a link to a [JSFiddle](https://jsfiddle.net/cnBob/ndk8642w/2/), [JSBin](https://jsbin.com/) or [CodePen](https://codepen.io). If it requires a build setup, you can use [CodeSandbox](https://codesandbox.io/) or provide a GitHub repo.\n\n[What is a *minimal reproduction*, and why is it required?](#modal)\n\n<span class="vue-text danger">Please do not just fill in a random link. We will close your issue if you do that.</span>\n'},bfdf:function(e,t){e.exports="请尽可能详尽地说明这个需求的用例和场景。最重要的是：解释清楚是怎样的**用户体验需求**催生了这个功能上的需求。\n\nECharts 的一个重要设计原则是保持 API 的通用。通常来说，我们只考虑添加在现有的 API 下无法轻松实现的功能。新功能的用例也应当足够常见。\n"},c794:function(e,t,n){"use strict";n("e338")},cb34:function(e,t,n){"use strict";n("6261")},d3d1:function(e,t){e.exports="## Before You Start...\n\nThe issue list is reserved exclusively for bug reports and feature requests.\n\nFor usage questions, please use the following resources:\n\n- Read the [docs](http://echarts.apache.org/option.html)\n- Find in [examples](https://ecomfe.github.io/echarts-examples/public/index.html)\n- Look for / ask questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/echarts)\n\nFor non-technical support or general questions, you can email [dev@echarts.apache.org](mailto:dev@echarts.apache.org). And don't forget to subscribe our [mailing list](https://echarts.apache.org/en/maillist.html) to get updated with the project.\n\nAlso try to search for your issue - it may have already been answered or even fixed in the development branch. However, if you find that an old, closed issue still persists in the latest version, you should open a new issue using the form below instead of commenting on the old issue.\n"},e338:function(e,t,n){},e6ae:function(e,t,n){},e9ae:function(e,t,n){"use strict";n("216f")},ed3e:function(e,t,n){"use strict";n("44e9")},f1ed:function(e,t,n){"use strict";n.r(t);n("4917"),n("ac6a");var s=n("00b3"),r={};s.keys().forEach((function(e){var t=e.match(/^\.\/([\w-_$]+)\/index\.js$/);if(t){var n=t[1];r[n]=s(e).default}})),t["default"]=r}});
//# sourceMappingURL=app.js.map