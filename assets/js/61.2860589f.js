(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{276:function(t,s,a){"use strict";a.r(s);var v=a(17),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fhir如何入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fhir如何入门"}},[t._v("#")]),t._v(" FHIR如何入门")]),t._v(" "),a("h2",{attrs:{id:"fhir概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fhir概述"}},[t._v("#")]),t._v(" FHIR概述")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("概述")]),t._v(" "),a("p",[t._v("欢迎使用 FHIR 标准，它是卫生保健信息电子化交换的一种标准。这部分是对标准\n的概述，作为一个路线图，希望能帮助初次接触的读者更快上手。")])]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("背景")]),t._v(" "),a("ul",[a("li",[a("blockquote",[a("p",[t._v("1、 医疗保健记录越来越多的被数字化。当病人在整个医疗系统中转诊的时候，要求他\n们的病历能够获得、能够找到和能够理解。更深层次的，\n能够支撑自动化地临床决策支持和其他机器处理，要求数据是结构化的 并且是标\n准化的。")])])]),t._v(" "),a("li",[a("blockquote",[a("p",[t._v("2、HL7在过去20多年里，一直致力于构建卫生保健数据交换和信息模型标准来解决这\n些难题。FHIR是一种新标准，采用了其他行业的通用技术，\n同时借鉴了在定义和实现 HL7V2，V3,RIM 和 CDA 标准过程中所获得成功、失败\n的教训。FHIR可以单独作为数据交换标准来使用，也可以和其他广泛应用的标准一\n起来使用。")])])]),t._v(" "),a("li",[a("blockquote",[a("p",[t._v("3、FHIR旨在不牺牲信息完整性的前提下，简化开发和实现。它利用了现有的逻辑和理\n论模型，为不同的应用程序间交换数据提供了一种一致的、易于实现的、健壮的机\n制。FHIR的内在机制使得其能够追溯到 HL7 RIM 和其他内容模型，这就保证了与\nHL7之前定义的模式，最佳实践间的保持一致，毋须开发人员充分了解 RIM 和\nHL7 V3 的其他衍生制品。")])])])])]),t._v(" "),a("h2",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),a("p",[t._v("FHIR 中最基本的组件叫做资源.所有可交换的内容都被定义成一个个资源。所有资源都拥有如下特征：")]),t._v(" "),a("ul",[a("li",[t._v("通用的定义、表达它们以及从数据类型(最基本的可重用元素)构建它们的方式")]),t._v(" "),a("li",[t._v("通用的元数据集合")]),t._v(" "),a("li",[t._v("供人可读的部分")])]),t._v(" "),a("h2",{attrs:{id:"方法论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法论"}},[t._v("#")]),t._v(" 方法论")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("方法论")]),t._v(" "),a("blockquote",[a("p",[t._v("FHIR 的理念在于定义一个资源的基础集合，要么直接使用它们，要么相互组合来\n满足大多数常见的应用场景的需求。\nFHIR资源旨在定义绝大多数开发实现中通用的核心信息集合的信息内容和结构。如\n果需要的话，有内在的扩展机制来满足剩下的需求。")])]),t._v(" "),a("blockquote",[a("p",[t._v("FHIR 的建模采用了一种组合式的方法论。相比而言，HL7 V3 建模是基于“model\nby constranit”(参考FHIR与其他HL7标准的比较) 。对于 FHIR，特殊的应用场景通\n常是通过利用资源引用整合资源来实现的。尽管对于一个特定场景，单独一个资源\n可能是存在价值的，更多的是对资源互相整合和裁剪来满足特定的需求。用来描述资源如何整合使用的两类特殊资源：")])]),t._v(" "),a("ul",[a("li",[t._v("一致性声明——描述一种实现中所暴露的交换数据的接口")]),t._v(" "),a("li",[t._v("StructureDefinition——描述具体实现中所使用的资源中定义的用以约束基\n数、可选性、术语、数据类型和扩展的其他规则。")])])]),t._v(" "),a("h2",{attrs:{id:"标准规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准规范"}},[t._v("#")]),t._v(" 标准规范")]),t._v(" "),a("h4",{attrs:{id:"基本上，fhir标准分为三大块："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本上，fhir标准分为三大块："}},[t._v("#")]),t._v(" 基本上，FHIR标准分为三大块：")]),t._v(" "),a("ul",[a("li",[t._v("基础文档部分——描述了资源是如何定义的，数据类型、代码编码的定义和XML 、JSON格式的相关背景信息。")]),t._v(" "),a("li",[t._v("开发实现部分——描述在REST 、消息、文档和SOA中使用资源。")]),t._v(" "),a("li",[t._v("资源列表——resourcelist.htmlFHIR中定义的所有资源的列表。其中又分为临床类、 行政管理类 和基础架构类三大类。")])]),t._v(" "),a("p",[t._v("资源有多种用途，从最基本的护理计划和诊断报告等临床内容到如消息头、一致性\n声明等基础架构。虽然它们具有共同的技术特性，但却以完全不同的方式来使用。\n注意毋须为了使用资源而必须使用REST。")]),t._v(" "),a("h2",{attrs:{id:"如何入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何入门"}},[t._v("#")]),t._v(" 如何入门")]),t._v(" "),a("p",[t._v("最好是快速浏览一下资源列表，对已经有了哪些资源有个感性认识，然后看一下患者的定义来看看资源的定义是什么样的，")]),t._v(" "),a("ul",[a("li",[t._v("资源的定义——资源是如何定义的")]),t._v(" "),a("li",[t._v("所有资源都有的叙述性文本，以及资源之间如何互相引用")]),t._v(" "),a("li",[t._v("格式：XML 、JSON")]),t._v(" "),a("li",[t._v("扩展相关——标准能够保持简单的关键")]),t._v(" "),a("li",[t._v("如果你之前了解 HL7 标准(V2 V3 CDA)的话，FHIR 与其他 HL7 标准的比较也值得一看。")])])])}),[],!1,null,null,null);s.default=_.exports}}]);