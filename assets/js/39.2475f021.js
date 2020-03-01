(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{258:function(t,a,s){"use strict";s.r(a);var r=s(17),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"springboot事务管理学习总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot事务管理学习总结"}},[t._v("#")]),t._v(" springboot事务管理学习总结")]),t._v(" "),s("h2",{attrs:{id:"一、查看自己数据表是否支持事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、查看自己数据表是否支持事务"}},[t._v("#")]),t._v(" 一、查看自己数据表是否支持事务")]),t._v(" "),s("p",[t._v("sqlserver：默认支持事务\nMySQL：默认的存储引擎为MyISAM不支持事务，需要改成InnoDB才能支持事务\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190515213526424.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("h2",{attrs:{id:"二、在spring-boot入口函数添加-enabletransactionmanagement注解是否有必要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、在spring-boot入口函数添加-enabletransactionmanagement注解是否有必要"}},[t._v("#")]),t._v(" 二、在spring boot入口函数添加@EnableTransactionManagement注解是否有必要??")]),t._v(" "),s("h4",{attrs:{id:"_2-1百度了很多都说要在springboot启动加上-enabletransactionmanagement才能生效，但是实际操作中发现springboot是默认开启的，所以不用加此注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1百度了很多都说要在springboot启动加上-enabletransactionmanagement才能生效，但是实际操作中发现springboot是默认开启的，所以不用加此注解"}},[t._v("#")]),t._v(" 2.1百度了很多都说要在springboot启动加上@EnableTransactionManagement才能生效，但是实际操作中发现springboot是默认开启的，所以不用加此注解")]),t._v(" "),s("p",[t._v("如下图：springboot启动时就开启了事务配置\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190515215007933.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190515215223631.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("h2",{attrs:{id:"三、事务回滚的方法如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、事务回滚的方法如下"}},[t._v("#")]),t._v(" 三、事务回滚的方法如下:")]),t._v(" "),s("h4",{attrs:{id:"_3-1-基于controller-service-dao三层来写代码，从入口开始，controller层的方法对应的是某个url，面向的是应用人员，应该返回他们能读懂的信息，所以controller必须做异常处理，一般来说会有统一的异常处理方法；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-基于controller-service-dao三层来写代码，从入口开始，controller层的方法对应的是某个url，面向的是应用人员，应该返回他们能读懂的信息，所以controller必须做异常处理，一般来说会有统一的异常处理方法；"}},[t._v("#")]),t._v(" 3.1  基于controller-service-dao三层来写代码，从入口开始，controller层的方法对应的是某个url，面向的是应用人员，应该返回他们能读懂的信息，所以controller必须做异常处理，一般来说会有统一的异常处理方法；")]),t._v(" "),s("h4",{attrs:{id:"_3-2-service层面向的是controller，service层中的某些方法，必须保证其事务，所以在service层进行事务控制是相当必要的，对于多条sql进行事务控制，如果某个sql执行失败，那么应当对已经执行的sql语句进行回滚；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-service层面向的是controller，service层中的某些方法，必须保证其事务，所以在service层进行事务控制是相当必要的，对于多条sql进行事务控制，如果某个sql执行失败，那么应当对已经执行的sql语句进行回滚；"}},[t._v("#")]),t._v(" 3.2  service层面向的是controller，service层中的某些方法，必须保证其事务，所以在service层进行事务控制是相当必要的，对于多条sql进行事务控制，如果某个sql执行失败，那么应当对已经执行的sql语句进行回滚；")]),t._v(" "),s("h4",{attrs:{id:"_3-3-dao层更多是单一的sql语句，没有必要进行事务控制，因为事务开销并不便宜（官方原话）；"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-dao层更多是单一的sql语句，没有必要进行事务控制，因为事务开销并不便宜（官方原话）；"}},[t._v("#")]),t._v(" 3.3  dao层更多是单一的sql语句，没有必要进行事务控制，因为事务开销并不便宜（官方原话）；")]),t._v(" "),s("p",[t._v("基于以上三点，一般情况应该把异常网上抛，一直抛到最终处理的那一层，所以对于dao层和service其实是没有必要进行try-catch的，直接往上抛异常就可以。")]),t._v(" "),s("p",[t._v("与之对应的，是spring的事务配置，默认情况下，spring只对运行时异常进行回滚，如果在dao层处理了异常，那么需要进行额外的配置，spring才会对异常进行回滚，常用的配置是@Transactional(rollbackFor=Exception.class)\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019051522033043.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n如果需要在service使用try-catch，则需要手动抛出异常并，设置手动回滚，因为\nSpring的AOP即声明式事务管理默认是针对unchecked exception回滚。也就是默认对RuntimeException()异常或是其子类进行事务回滚；checked异常,即Exception可try{}捕获的不会回滚\nTransactionAspectSupport.currentTransactionStatus().setRollbackOnly()\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190515220808514.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("\t方法A调用方法B事务生效总结\n\t\n\t备注:有事务Transactional用√    没有事务用×\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("方法A")]),t._v(" "),s("th",[t._v("方法B")]),t._v(" "),s("th",[t._v("是否事务生效")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("√")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("此时事务生效")])]),t._v(" "),s("tr",[s("td",[t._v("√")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("此时事务生效")])]),t._v(" "),s("tr",[s("td",[t._v("×")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("此时事务不生效")])]),t._v(" "),s("tr",[s("td",[t._v("×")]),t._v(" "),s("td",[t._v("√")]),t._v(" "),s("td",[t._v("×")]),t._v(" "),s("td",[t._v("此时事务不生效")])])])]),t._v(" "),s("h2",{attrs:{id:"四、用第三方数据源事务配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、用第三方数据源事务配置"}},[t._v("#")]),t._v(" 四、用第三方数据源事务配置")]),t._v(" "),s("h4",{attrs:{id:"_4-1-想让事务生效，需要在第三方数据源配置类（druidconfig）中添加如下代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-想让事务生效，需要在第三方数据源配置类（druidconfig）中添加如下代码"}},[t._v("#")]),t._v(" 4.1 想让事务生效，需要在第三方数据源配置类（DruidConfig）中添加如下代码")]),t._v(" "),s("p",[t._v("// 创建第三方数据源事务管理器\n@Bean\npublic DataSourceTransactionManager  txManager(DataSource dataSource) {\nreturn new DataSourceTransactionManager(dataSource);\n}")]),t._v(" "),s("p",[t._v("yml配置说明如下（必须指定第三方数据源的type）\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190516100558518.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\nDruidConfig部分代码如下\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/201905161008380.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190516100924747.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n其余用法同第三点")]),t._v(" "),s("p",[t._v("参考:https://4876391520.iteye.com/blog/2300772\nhttps://blog.csdn.net/f641385712/article/details/80445912")])])}),[],!1,null,null,null);a.default=e.exports}}]);