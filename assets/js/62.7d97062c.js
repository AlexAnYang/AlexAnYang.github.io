(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{278:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开发人员接口说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发人员接口说明"}},[t._v("#")]),t._v(" 开发人员接口说明")]),t._v(" "),a("h2",{attrs:{id:"fhir概述-开发人员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fhir概述-开发人员"}},[t._v("#")]),t._v(" FHIR概述-开发人员")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("FHIR概述")]),t._v(" "),a("ul",[a("li",[t._v("FHIR(Fast Health Interoperability Resources)旨在实现能够支撑医疗领域多种流程的数据交换。")]),t._v(" "),a("li",[t._v("该标准基于 Restful 的最佳实践，能够实现跨专业的医疗系统的集成。")]),t._v(" "),a("li",[t._v("FHIR 所支持的范围很广泛，包括人、兽医、临床、公共卫生、临床试验、管理和财务等方面。全球通用且支持多种架构和场景。")])])]),t._v(" "),a("h2",{attrs:{id:"框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框架"}},[t._v("#")]),t._v(" 框架")]),t._v(" "),a("p",[t._v("FHIR 是基于 资源 这一通用组件. 每个资源都有如下通用特征:")]),t._v(" "),a("ul",[a("li",[t._v("用URL来标识")]),t._v(" "),a("li",[t._v("通用的元数据")]),t._v(" "),a("li",[t._v("供人可读的XHTML概述")]),t._v(" "),a("li",[t._v("通用的数据元集合")]),t._v(" "),a("li",[t._v("扩展的框架以支持医疗中的多样性")])]),t._v(" "),a("p",[t._v("资源要么是 XML ，要么是 JSON格式的. 目前已经定义了99种资源类型")]),t._v(" "),a("h2",{attrs:{id:"patien-t示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patien-t示例"}},[t._v("#")]),t._v(" Patien t示例")]),t._v(" "),a("p",[t._v("如何用JSON来表示patient。 标准中也定义了XML的表达方式")]),t._v(" "),a("div",{staticClass:"language-JSON line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resourceType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Patient"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23434"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"versionId"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2014-08-18T01:43:30Z"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"generated"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\x3c!-- Snipped for Brevity --\x3e"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extension"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.org/consent#trials"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"valueCode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"renal"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"identifier"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"use"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"usual"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MRN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"system"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.goodhealth.org/identifiers/mrn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"family"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Levin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"given"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Henry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"suffix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The 7th"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gender"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Male"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"birthDate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1932-09-24"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("每个资源包括如下内容")]),t._v(" "),a("ul",[a("li",[t._v("resourceType (line 2) - 必须要有: FHIR 中定义了多种资源类型，详细列表请查看the full index")]),t._v(" "),a("li",[t._v("id (line 3) - 资源自身的id(而非资源中数据的ID 相当于资源在数据库中的主键). 一般而言都是要有的，除了在新建时之外。")]),t._v(" "),a("li",[t._v("meta (lines 4 - 7) - 通常要由 : 所有资源都会有的属性(这里和其他地方对元数据的定义略有偏差，参考"),a("a",{attrs:{href:"https://github.com/memect/hao/issues/296",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/memect"),a("OutboundLink")],1),t._v(")受基础架构控制. 如果没有元数据可以为空")]),t._v(" "),a("li",[t._v("text (lines 8 - 11) - 推荐使用: XHTML 包含了资源中 供人可读的部分")]),t._v(" "),a("li",[t._v("extension (lines 12 - 17) - 可选: Extensions由扩展框架所定义")]),t._v(" "),a("li",[t._v("data (lines 18 - 38) - 可选: 每种资源所定义的数据项。")])])]),t._v(" "),a("p",[t._v("备注 尽管标准中总是以所定义的顺序来显示JSON中数据的顺序，但很多JSON库有其他排序标准。")]),t._v(" "),a("h2",{attrs:{id:"交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交互"}},[t._v("#")]),t._v(" 交互")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("为了操作数据,FHIR 定义了REST API")]),t._v(" "),a("ul",[a("li",[t._v("Create = POST "),a("a",{attrs:{href:"https://example.com/path/%7BresourceType%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://example.com/path/{resourceType}"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Read = GET "),a("a",{attrs:{href:"https://example.com/path/%7BresourceType%7D/%7Bid%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://example.com/path/{resourceType}/{id}"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Update = PUT "),a("a",{attrs:{href:"https://example.com/path/%7BresourceType%7D/%7Bid%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://example.com/path/{resourceType}/{id}"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Delete = DELETE "),a("a",{attrs:{href:"https://example.com/path/%7BresourceType%7D/%7Bid%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://example.com/path/{resourceType}/{id}"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Search = GET "),a("a",{attrs:{href:"https://example.com/path/%7BresourceType%7D?search",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://example.com/path/{resourceType}?searchParameters…"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("History = GET "),a("a",{attrs:{href:"https://example.com/path/%7BresourceType%7D/%7Bid%7D/_history",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://example.com/path/{resourceType}/{id}/_history"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Transaction = POST "),a("a",{attrs:{href:"https://example.com/path/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://example.com/path/"),a("OutboundLink")],1),t._v(" (将传输包发布到系统)")]),t._v(" "),a("li",[t._v("Operation = GET "),a("a",{attrs:{href:"https://example.com/path/%7BresourceType%7D/%7Bid%7D/$%7Bopname%7D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://example.com/path/{resourceType}/{id}/${opname}"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("除了RESTful API之外,FHIR 中还定义了其他的数据交换方式，包括 文档,消息和其他类型的服务.")]),t._v(" "),a("h2",{attrs:{id:"对多样性的管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对多样性的管理"}},[t._v("#")]),t._v(" 对多样性的管理")]),t._v(" "),a("blockquote",[a("p",[t._v("医疗行业的一大特点就是不同地区和细分行业都存在很大的差异性,并不存在一个\n集中式的权威机构来定义通用的行业规范。鉴于此,\nFHIR 中定义了通用扩展框架和\n管理多样性的框架.")])]),t._v(" "),a("h2",{attrs:{id:"新增一个资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增一个资源"}},[t._v("#")]),t._v(" 新增一个资源")]),t._v(" "),a("p",[t._v("为了新增一个资源, 需要发送一个 HTTP 的 POST 请求到某个资源节点(也就是某个URL).")]),t._v(" "),a("div",{staticClass:"language-http request line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("POST https://example.com/path/{resourceType}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如下所示")]),t._v(" "),a("div",{staticClass:"language-http request line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("POST {some base path}/Patient HTTP/1.1\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Authorization:")]),t._v(" Bearer 37CC0B0E-C15B-4578-9AC1-D83DCED2B2F9\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Accept:")]),t._v(" application/json+fhir\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/json+fhir\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Length:")]),t._v(' 1198\n`{` "resourceType": "Patient",\n...\n}'),a("span",{pre:!0,attrs:{class:"token application-json"}},[t._v("\n\n")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("向服务器提交一条患者记录, 服务器可以根据自己的情况分配ID来存储该患者记录。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("备注")]),t._v(" "),a("ul",[a("li",[t._v("/Patient (line 1) - 处理所有患者的节点- 这里使用资源类型的名称")]),t._v(" "),a("li",[t._v("Authorization (line 2) - 参考 Security for FHIR")]),t._v(" "),a("li",[t._v("Accept, Content-Type (lines 3-4) - 如果资源的数据是JSON格式，content\ntype需要设置成这样application/json+fhir (XML的话设置成\napplication/xml+fhir). 数据的编码始终是UTF-8")]),t._v(" "),a("li",[t._v("id (line 7) - 待新建的记录中并没有id，由服务器来分配")]),t._v(" "),a("li",[t._v("Resource Content, lines 7+ - 这时候也没有任何元数据。资源的其他部分同上述示例")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);