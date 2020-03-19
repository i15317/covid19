(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{478:function(t,e,n){var content=n(481);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("088dc89c",content,!0,{sourceMap:!1})},480:function(t,e,n){"use strict";var o=n(478);n.n(o).a},481:function(t,e,n){(e=n(11)(!1)).push([t.i,".TextCard{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px}.TextCard-Heading{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px}.TextCard-Heading a{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;color:#006ca8 !important;text-decoration:none}.TextCard-Heading a:hover{text-decoration:underline}.TextCard-ExternalLinkIcon{margin-left:2px;color:#707070 !important}.TextCard-Body *{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.TextCard-Body a{word-break:break-all;color:#006ca8;text-decoration:none}.TextCard-Body a:hover{text-decoration:underline}",""]),t.exports=e},482:function(t,e,n){"use strict";var o=n(1).a.extend({props:{title:{type:String,default:""},body:{type:String,default:""},link:{type:String,default:""}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)}}}),r=(n(480),n(8)),d=n(47),l=n.n(d),c=n(142),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextCard"},[t.title?n("h3",{staticClass:"TextCard-Heading"},[t.link?n("div",[n("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.isInternalLink(t.link)?t._e():n("v-icon",{staticClass:"TextCard-ExternalLinkIcon",attrs:{size:"20"}},[t._v("\n        mdi-open-in-new\n      ")])],1):[t._v("\n      "+t._s(t.title)+"\n    ")]],2):t._e(),t._v(" "),t.body?n("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?n("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.a=component.exports;l()(component,{VIcon:c.a})},512:function(t,e,n){var content=n(591);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("09c049c8",content,!0,{sourceMap:!1})},590:function(t,e,n){"use strict";var o=n(512);n.n(o).a},591:function(t,e,n){(e=n(11)(!1)).push([t.i,".Parent-Heading{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}",""]),t.exports=e},661:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(482),d=o.a.extend({components:{TextCard:r.a},data:function(){return{items:[{title:"1. ".concat(this.$t("感染予防・健康管理")),body:[this.$t("不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。"),this.$t("手洗い、咳エチケット等により、感染予防に努めてください。"),'<a href="https://tokyodouga.jp/lViN9C_BS-0.html" target="_blank" rel="noopener">'+this.$t("【参考】東京都が公開した感染症予防のための正しい手洗い方法です（動画）")+"</a>",this.$t("規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。")].join("<br />")},{title:"2. ".concat(this.$t("感染症を疑う場合の対応")),body:[this.$t("各保健所にご相談ください"),'<a href="https://www.pref.kagawa.lg.jp/content/etc/subsite/kansenshoujouhou/kansen/sr5cfn200127213457.shtml" target="_blank" rel="noopener">'+this.$t("「新型コロナウイルス感染症にかかる相談窓口について」（香川県）")+"</a>"].join("<br />")},{title:"3. ".concat(this.$t("その他")),body:this.$t("詳細は、各学校からのお知らせ等をご確認ください。")}]}},head:function(){return{title:"お子様をお持ちの皆様へ"}}}),l=(n(590),n(8)),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Parent"},[e("h2",{staticClass:"Parent-Heading"},[this._v("\n    "+this._s(this.$t("臨時休校中の新型コロナウイルス感染症対応についてのお願い"))+"\n  ")]),this._v(" "),this._l(this.items,(function(t,i){return e("div",{key:i},[e("TextCard",{attrs:{title:t.title,body:t.body}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);