webpackJsonp([1],{NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v(t._s(t.app_name))]),t._v(" "),r("h1",[t._v(t._s(t.name))]),t._v(" "),r("crypto-top100"),t._v(" "),r("hello-world"),t._v(" "),r("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")({name:"app",data:{app_name:"CryptoTrends"}},a,!1,function(t){r("zj65")},null,null).exports,_=r("/ocq"),o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("vue-router")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("vuex")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("vue-loader")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("awesome-vue")])])])}]};var v=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){r("pVZD")},"data-v-d14401cc",null).exports,l={data:function(){return{title:"Top 100 Cryptocurrencies",cryptos:[],timer:null}},props:["cryptos"],created:function(){var t=this;this.fetchCryptos(),this.timer=setInterval(function(){t.fetchCryptos()},12e4)},methods:{fetchCryptos:function(){var t=this;fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10").then(function(t){return t.json()}).then(function(e){t.cryptos=e})}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(t._s(t.title))]),t._v(" "),r("table",[t._m(0),t._v(" "),t._l(t.cryptos,function(e){return r("tr",[r("td",[t._v(t._s(e.rank))]),t._v(" "),r("td",[t._v(t._s(e.symbol))]),t._v(" "),r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.price_usd))]),t._v(" "),r("td",[t._v(t._s(e.market_cap_usd))]),t._v(" "),r("td",[t._v(t._s(e.available_supply)+" "+t._s(e.total_supply)+" "+t._s(e.max_supply))]),t._v(" "),r("td",[t._v(t._s(e.percent_change_1h)+" "+t._s(e.percent_change_24h)+" "+t._s(e.percent_change_7d))])])})],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("Rank")]),t._v(" "),r("th",[t._v("Symbol")]),t._v(" "),r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Price (USD)")]),t._v(" "),r("th",[t._v("Market Cap")]),t._v(" "),r("th",[t._v("Supply (Available/Total/Max)")]),t._v(" "),r("th",[t._v("Percent Change (1h/24h/7d)")])])}]},i=r("VU/8")(l,u,!1,null,null,null).exports;n.default.use(_.a);var c=new _.a({routes:[{path:"/",name:"HelloWorld",component:v},{path:"/derp",name:"CryptoTop100",component:i}]}),p=r("zL8q"),h=r.n(p);r("tvR6");n.default.config.productionTip=!1,n.default.use(h.a),new n.default({el:"#app",render:function(t){return t(s)},router:c,template:"<App/>",components:{App:s,"crypto-top100":i,"hello-world":v,Element:h.a},mounted:function(){}})},pVZD:function(t,e){},tvR6:function(t,e){},zj65:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a27fc69696f700ffcc96.js.map