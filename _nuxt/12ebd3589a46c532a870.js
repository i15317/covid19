(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{382:function(t,e,n){var content=n(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("d879f088",content,!1,{sourceMap:!1})},385:function(t,e,n){"use strict";var o=n(382);n.n(o).a},386:function(t,e,n){(e=n(10)(!1)).push([t.i,".TextCard{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px}.TextCard-Heading{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px}.TextCard-Heading a{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;color:#006ca8 !important;text-decoration:none}.TextCard-Heading a:hover{text-decoration:underline}.TextCard-ExternalLinkIcon{margin-left:2px;color:#707070 !important}.TextCard-Body *{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.TextCard-Body a{word-break:break-all;color:#006ca8;text-decoration:none}.TextCard-Body a:hover{text-decoration:underline}",""]),t.exports=e},387:function(t,e,n){"use strict";var o=n(2).default.extend({props:{title:{type:String,default:""},body:{type:String,default:""},link:{type:String,default:""}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)}}}),r=(n(385),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextCard"},[t.title?n("h3",{staticClass:"TextCard-Heading"},[t.link?n("div",[n("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.isInternalLink(t.link)?t._e():n("v-icon",{staticClass:"TextCard-ExternalLinkIcon",attrs:{size:"20"}},[t._v("\n        mdi-open-in-new\n      ")])],1):[t._v("\n      "+t._s(t.title)+"\n    ")]],2):t._e(),t._v(" "),t.body?n("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?n("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.a=component.exports},389:function(t,e,n){var content=n(442);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("3ff323c4",content,!1,{sourceMap:!1})},441:function(t,e,n){"use strict";var o=n(389);n.n(o).a},442:function(t,e,n){(e=n(10)(!1)).push([t.i,".About-Heading{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}.About .About-Browser-List{list-style:none;padding:12px 0}",""]),t.exports=e},524:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(387),l=o.default.extend({components:{TextCard:r.a},head:function(){return{title:"当サイトについて"}}}),_=(n(441),n(4)),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"About"},[n("h2",{staticClass:"About-Heading"},[t._v("\n    "+t._s(t.$t("当サイトについて"))+"\n  ")]),t._v(" "),n("TextCard",[t._v("\n    "+t._s(t.$t("香川県民向けに当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するため、東京都のHPをベースに開設しました。"))),n("br"),t._v(" "),n("br"),t._v("\n    "+t._s(t.$t("香川県による公式情報と客観的な数値をわかりやすく伝えることで、香川県にお住まいの方や、香川県内に拠点を持つ企業の方、香川県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。"))+"\n  ")]),t._v(" "),n("TextCard",{attrs:{title:t.$t("ブラウザ環境について")}},[t._v("\n    "+t._s(t.$t("当サイトは以下の環境でご覧いただくことを推奨いたします。"))),n("br"),t._v(" "),n("br"),t._v(" "),n("ul",{staticClass:"About-Browser-List"},[n("li",[t._v(t._s(t.$t("Microsoft Edge 最新版")))]),t._v(" "),n("li",[t._v(t._s(t.$t("Mozilla Firefox 最新版")))]),t._v(" "),n("li",[t._v(t._s(t.$t("Google Chrome 最新版（Windows 10以上）")))]),t._v(" "),n("li",[t._v(t._s(t.$t("Apple Safari (macOS) 最新版")))]),t._v(" "),n("li",[t._v(t._s(t.$t("Opera Software ASA Opera 最新版")))])]),t._v("\n    "+t._s(t.$t("※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。"))+"\n  ")]),t._v(" "),n("TextCard",{attrs:{title:t.$t("当サイトへのリンクについて")}},[t._v("\n    "+t._s(t.$t("当サイトへのリンクは自由です。"))+"\n  ")]),t._v(" "),n("TextCard",{attrs:{title:t.$t("JavaScriptについて")}},[t._v("\n    "+t._s(t.$t("当サイトではJavaScriptを使用しております。"))),n("br"),t._v("\n    "+t._s(t.$t("JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。"))),n("br"),t._v("\n    "+t._s(t.$t("当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。"))+"\n  ")]),t._v(" "),n("TextCard",{attrs:{title:t.$t("クッキー (Cookie) について")}},[t._v("\n    "+t._s(t.$t("当サイトの一部ではクッキーを使用しています。"))),n("br"),t._v("\n    "+t._s(t.$t("クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。"))),n("br"),t._v(" "),n("br"),t._v("\n    "+t._s(t.$t("ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。"))),n("br"),t._v(" "),n("br"),t._v("\n    "+t._s(t.$t("ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。"))+"\n  ")]),t._v(" "),n("TextCard",{attrs:{title:t.$t("Google Analyticsの利用について")}},[t._v("\n    "+t._s(t.$t("当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。"))),n("br"),t._v("\n    "+t._s(t.$t("Google Analyticsは、当サイトが発行するクッキー (Cookie) を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。クッキー (Cookie) の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。"))),n("br"),t._v("\n    "+t._s(t.$t("取得したデータは Webサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。"))),n("br"),t._v("\n    "+t._s(t.$t("Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。"))),n("br"),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://marketingplatform.google.com/about/analytics/terms/jp",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("Google Analytics利用規約"))+"\n        ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://policies.google.com/privacy?hl=ja",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("Googleのプライバシーポリシー"))+"\n        ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://support.google.com/analytics/answer/6004245",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("Google Analyticsに関する詳細情報"))+"\n        ")])])])]),t._v(" "),n("TextCard",{attrs:{title:t.$t("免責事項")}},[t._v("\n    "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、東京都は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))),n("br"),t._v(" "),n("br"),t._v("\n    "+t._s(t.$t("また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。"))),n("br"),t._v(" "),n("br"),t._v("\n    "+t._s(t.$t("当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。"))+"\n  ")]),t._v(" "),n("TextCard",{attrs:{title:t.$t("データについて")}},[n("i18n",{attrs:{tag:"p",path:"本サイトで公表しているデータは、{catalogWebsite}より誰でも自由にダウンロードが可能です。（データは順次追加予定です）"}},[n("a",{attrs:{href:"https://portal.data.metro.tokyo.lg.jp/",target:"_blank",rel:"noopener",place:"catalogWebsite"}},[t._v("\n        "+t._s(t.$t("東京都オープンデータカタログサイト"))+"\n      ")])])],1),t._v(" "),n("TextCard",{attrs:{title:t.$t("ソースコードについて")}},[t._v("\n    "+t._s(t.$t("当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。"))+"\n    "),n("i18n",{attrs:{path:"詳しくは、{githubRepo}をご確認ください。"}},[n("a",{attrs:{href:"https://github.com/tokyo-metropolitan-gov/covid19",target:"_blank",rel:"noopener",place:"githubRepo"}},[t._v("\n        "+t._s(t.$t("GitHub リポジトリ"))+"\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);