(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{295:function(s,a,e){"use strict";e.r(a);var t=e(17),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"go-swagger安装及使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#go-swagger安装及使用"}},[s._v("#")]),s._v(" go-swagger安装及使用")]),s._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[s._v("go-swagger介绍")]),s._v(" "),e("p",[s._v("go-swagger 为社区带来了一套完整的，功能齐全的高性能API组件，可与Swagger API一起使用：服务器，客户端和数据模型。")]),s._v(" "),e("ul",[e("li",[s._v("根据标准规范生成服务器")]),s._v(" "),e("li",[s._v("从摇摇欲坠的规范生成客户端")]),s._v(" "),e("li",[s._v("支持jsonschema和swagger提供的大多数功能，包括多态")]),s._v(" "),e("li",[s._v("从带注释的go代码中生成标准规范")]),s._v(" "),e("li",[s._v("配合规范使用的其他工具")]),s._v(" "),e("li",[s._v("强大的定制功能，带有供应商扩展和可定制的模板")]),s._v(" "),e("li",[s._v("我们在代码生成方面的重点是生成惯用的,快速执行的代码,该代码可与golint,go vet等配合使用")])])]),s._v(" "),e("h2",{attrs:{id:"_1-代码下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码下载"}},[s._v("#")]),s._v(" 1 代码下载")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/go-swagger/go-swagger",target:"_blank",rel:"noopener noreferrer"}},[s._v("go-swagger源码地址下载"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("go get github.com/go-swagger/go-swagger\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-安装swagger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装swagger"}},[s._v("#")]),s._v(" 2 安装swagger")]),s._v(" "),e("blockquote",[e("p",[s._v("安装go-swagger，移动到下载的go-swagger包目录（应该是GOPATH/src/pkg/github.com/go-swagger,理解这个意思就好，路径不一定对）。")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("go "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ./cmd/swagger\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-生成swagger-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-生成swagger-json"}},[s._v("#")]),s._v(" 3 生成swagger.json")]),s._v(" "),e("blockquote",[e("p",[s._v("进入自己项目的根目录,根据swagger规范,创建 "),e("code",[s._v("swagger.json")]),s._v("规范文档")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("swagger generate spec -o ./swagger.json  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("解释：generate生成，spec指规格的意思 -o，这个字母o的意思是：-output即输出 。")]),s._v(" "),e("li",[s._v("总的命令意思就是：swagger 生成 规格 -输出 输出的路径和文件。")])]),s._v(" "),e("h2",{attrs:{id:"_4-启动swagger服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动swagger服务"}},[s._v("#")]),s._v(" 4 启动swagger服务")]),s._v(" "),e("p",[s._v("启动一个"),e("code",[s._v("http")]),s._v("服务同时将"),e("code",[s._v("json")]),s._v("文档放入"),e("a",{attrs:{href:"http://petstore.swagger.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://petstore.swagger.io"),e("OutboundLink")],1),s._v(" 执行")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("swagger serve -F"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("swagger D:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("go_project"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("src"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("kratos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("docs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("api.swagger.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("a",{attrs:{"data-fancybox":"",title:"启动swagger服务",href:"/img/goImage/swagger-run.png"}},[e("img",{attrs:{src:"/img/goImage/swagger-run.png",alt:"启动swagger服务"}})])]),s._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"swagger服务页面",href:"/img/goImage/swagger-login.png"}},[e("img",{attrs:{src:"/img/goImage/swagger-login.png",alt:"swagger服务页面"}})])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://goswagger.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多go-swagger使用请参考官网"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);