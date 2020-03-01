(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{262:function(t,a,s){"use strict";s.r(a);var e=s(17),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"gitblit的安装及使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitblit的安装及使用"}},[t._v("#")]),t._v(" GitBlit的安装及使用")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("安装说明")]),t._v(" "),s("p",[t._v("本文是基于Windows系统环境,安装和测试GitBlit,从而在Windows平台下搭建Git服务器。需要如下软件")]),t._v(" "),s("ul",[s("li",[t._v("jdk-8u181-windows-x64")]),t._v(" "),s("li",[t._v("gitblit-1.8.0.zip")])])]),t._v(" "),s("h2",{attrs:{id:"_1-软件下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-软件下载"}},[t._v("#")]),t._v(" 1 软件下载")]),t._v(" "),s("p",[t._v("官网下载速度有点慢，个人推荐"),s("a",{attrs:{href:"https://pan.baidu.com/s/1NF-YSPiw6VXPbywCItqdMg",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度网盘下载"),s("OutboundLink")],1),t._v(",提取码：u8dw")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html#javasejdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("jdk-8u181-windows-x64"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.gitblit.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitblit-1.8.0.zip"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_2-搭建jdk环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-搭建jdk环境"}},[t._v("#")]),t._v(" 2 搭建jdk环境")]),t._v(" "),s("blockquote",[s("p",[t._v("安装"),s("code",[t._v("GitBlit")]),t._v("，是需要"),s("code",[t._v("jdk")]),t._v("环境的。")])]),t._v(" "),s("h3",{attrs:{id:"_2-1-安装jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装jdk"}},[t._v("#")]),t._v(" 2.1 安装jdk")]),t._v(" "),s("p",[t._v("双击安装文件一直下一步即可")]),t._v(" "),s("h3",{attrs:{id:"_2-2配置java环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2配置java环境变量"}},[t._v("#")]),t._v(" 2.2配置java环境变量")]),t._v(" "),s("h4",{attrs:{id:"新建环境变量java-home"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建环境变量java-home"}},[t._v("#")]),t._v(" 新建环境变量JAVA_HOME")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("变量名：JAVA_HOME\n变量值：C:\\Program Files\\Java\\jdk1.8.0_181【要根据jdk安装路径进行配置】\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"jdk8",href:"/img/blogImage/jdk8.png"}},[s("img",{attrs:{src:"/img/blogImage/jdk8.png",alt:"jdk8"}})]),t._v(" "),s("a",{attrs:{"data-fancybox":"",title:"jdk9",href:"/img/blogImage/jdk9.png"}},[s("img",{attrs:{src:"/img/blogImage/jdk9.png",alt:"jdk9"}})])]),t._v(" "),s("h4",{attrs:{id:"新建环境变量classpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建环境变量classpath"}},[t._v("#")]),t._v(" 新建环境变量CLASSPATH")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("变量名：CLASSPATH\n变量值：.;%JAVA_HOME%\\lib;%JAVA_HOME%\\lib\\tools.jar;%JAVA_HOME%\\lib\\dt.jar\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"jdk10",href:"/img/blogImage/jdk10.png"}},[s("img",{attrs:{src:"/img/blogImage/jdk10.png",alt:"jdk10"}})])]),t._v(" "),s("h4",{attrs:{id:"编辑环境变量path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑环境变量path"}},[t._v("#")]),t._v(" 编辑环境变量PATH")]),t._v(" "),s("blockquote",[s("p",[t._v("找到PATH变量，选择编辑。把"),s("code",[t._v("%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin")]),t._v("添加到”变量值”的结尾处。")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"jdk11",href:"/img/blogImage/jdk11.png"}},[s("img",{attrs:{src:"/img/blogImage/jdk11.png",alt:"jdk11"}})])]),t._v(" "),s("h3",{attrs:{id:"_2-3-验证jdk是否安装成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-验证jdk是否安装成功"}},[t._v("#")]),t._v(" 2.3 验证jdk是否安装成功")]),t._v(" "),s("blockquote",[s("p",[t._v("打开命令提示符 按组合快捷键“win+ R”打开运行 输入cmd。\n输入"),s("code",[t._v("java -version")]),t._v(" 如图即为成功")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"jdk12",href:"/img/blogImage/jdk12.png"}},[s("img",{attrs:{src:"/img/blogImage/jdk12.png",alt:"jdk12"}})])]),t._v(" "),s("h2",{attrs:{id:"_3-安装gitblit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装gitblit"}},[t._v("#")]),t._v(" 3 安装GitBlit")]),t._v(" "),s("h3",{attrs:{id:"_3-1-解压安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-解压安装"}},[t._v("#")]),t._v(" 3.1 解压安装")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("GitBlit")]),t._v("不要安装，秩序解压缩下载的压缩包即可，请不要放在系统盘")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-创建用于存储资料的文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-创建用于存储资料的文件夹"}},[t._v("#")]),t._v(" 3.2 创建用于存储资料的文件夹")]),t._v(" "),s("blockquote",[s("p",[t._v("创建存储资料的文件夹，请在非系统盘创建，否则会有权限bug")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit1",href:"/img/blogImage/gitblit1.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit1.png",alt:"gitblit1"}})])]),t._v(" "),s("h2",{attrs:{id:"_4-gitblit配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-gitblit配置"}},[t._v("#")]),t._v(" 4 GitBlit配置")]),t._v(" "),s("h3",{attrs:{id:"_4-1-修改defaults-properties文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-修改defaults-properties文件"}},[t._v("#")]),t._v(" 4.1 修改defaults.properties文件")]),t._v(" "),s("blockquote",[s("p",[t._v("找到GitBlit解压目录下的data文件下的defaults.properties文件，并打开，需要修改以下内容")])]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("git.repositoriesFolder")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(" 赋值为创建好的文件目录D:\\Program Files\\GitRepository")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server.httpPort")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(" 设定http协议的端口号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server.httpBindInterface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("设定服务器的IP地址。这里就设定你的服务器IP")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server.httpsBindInterface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("设定为localhost")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit6",href:"/img/blogImage/gitblit6.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit6.png",alt:"gitblit6"}})])]),t._v(" "),s("h4",{attrs:{id:"_4-1-1-修改gitblit安装目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-修改gitblit安装目录"}},[t._v("#")]),t._v(" 4.1.1 修改GitBlit安装目录")]),t._v(" "),s("blockquote",[s("p",[t._v("在"),s("code",[t._v("defaults.properties")]),t._v("文件中找到"),s("code",[t._v("git.repositoriesFolder")]),t._v("，赋值为创建好的文件目录"),s("code",[t._v("D:\\Program Files\\GitRepository")])])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit2",href:"/img/blogImage/gitblit2.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit2.png",alt:"gitblit2"}})])]),t._v(" "),s("h4",{attrs:{id:"_4-1-2-修改http协议的端口号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-修改http协议的端口号"}},[t._v("#")]),t._v(" 4.1.2 修改http协议的端口号")]),t._v(" "),s("blockquote",[s("p",[t._v("在"),s("code",[t._v("defaults.properties")]),t._v("文件中找到"),s("code",[t._v("server.httpPort")]),t._v("，设定http协议的端口号")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit3",href:"/img/blogImage/gitblit3.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit3.png",alt:"gitblit3"}})])]),t._v(" "),s("h4",{attrs:{id:"_4-1-3-修改服务器的ip地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-修改服务器的ip地址"}},[t._v("#")]),t._v(" 4.1.3 修改服务器的IP地址")]),t._v(" "),s("blockquote",[s("p",[t._v("在"),s("code",[t._v("defaults.properties")]),t._v("文件中找到"),s("code",[t._v("server.httpBindInterface")]),t._v("，设定服务器的IP地址。这里就设定你的服务器IP")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit4",href:"/img/blogImage/gitblit4.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit4.png",alt:"gitblit4"}})])]),t._v(" "),s("h4",{attrs:{id:"_4-1-4-修改http连接接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-4-修改http连接接口"}},[t._v("#")]),t._v(" 4.1.4 修改HTTP连接接口")]),t._v(" "),s("blockquote",[s("p",[t._v("在"),s("code",[t._v("defaults.properties")]),t._v("文件中找到"),s("code",[t._v("server.httpsBindInterface")]),t._v("，设定为"),s("code",[t._v("localhost")])])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit4",href:"/img/blogImage/gitblit4.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit4.png",alt:"gitblit4"}})])]),t._v(" "),s("h3",{attrs:{id:"_4-2-修改installservice-cmd文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-修改installservice-cmd文件"}},[t._v("#")]),t._v(" 4.2 修改installService.cmd文件")]),t._v(" "),s("blockquote",[s("p",[t._v("修改内容如下")])]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("a.修改")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ARCH")]),t._v("\n 　　32位系统：SET ARCH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("x86\n 　　64位系统：SET ARCH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("amd64\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("b.添加")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("CD 为程序目录")]),t._v("\n 　　SET CD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("F"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\gitblit\\gitblit-1.8.0(gitblit所在目录)\nc.修改StartParams里的启动参数为空。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit5",href:"/img/blogImage/gitblit5.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit5.png",alt:"gitblit5"}})])]),t._v(" "),s("h3",{attrs:{id:"_4-3-查看登录用户名密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-查看登录用户名密码"}},[t._v("#")]),t._v(" 4.3 查看登录用户名密码")]),t._v(" "),s("blockquote",[s("p",[t._v("找到GitBlit解压目录下的data文件下的users.conf查看管理员用户名初始密码")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit7",href:"/img/blogImage/gitblit7.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit7.png",alt:"gitblit7"}})])]),t._v(" "),s("h2",{attrs:{id:"_5-启动gitblit服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动gitblit服务"}},[t._v("#")]),t._v(" 5 启动GitBlit服务")]),t._v(" "),s("blockquote",[s("p",[t._v("待所有配置文件修改完成后，以管理员身份运行installService.cmd ，会将GitBlit安装到Windows系统服务中。\n在【计算机--右键】--服务,在其中可以找到gitblit服务，启动即可")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit8",href:"/img/blogImage/gitblit8.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit8.png",alt:"gitblit8"}})])]),t._v(" "),s("h2",{attrs:{id:"_6-访问gitblit和简单操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-访问gitblit和简单操作"}},[t._v("#")]),t._v(" 6 访问GitBlit和简单操作")]),t._v(" "),s("blockquote",[s("p",[t._v("在浏览器中打开,"),s("a",{attrs:{href:"http://192.168.0.5:10123",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.0.5:10123"),s("OutboundLink")],1),t._v("【这个地址是在上面配置文件中配置的】。用户名"),s("code",[t._v("admin")]),t._v("和密码"),s("code",[t._v("admin")]),t._v("【默认配置位置在 "),s("code",[t._v("data/users.conf")]),t._v("中】")])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit9",href:"/img/blogImage/gitblit9.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit9.png",alt:"gitblit9"}})])]),t._v(" "),s("h3",{attrs:{id:"_6-1-gitblit功能简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-gitblit功能简介"}},[t._v("#")]),t._v(" 6.1 GitBlit功能简介")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit10",href:"/img/blogImage/gitblit10.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit10.png",alt:"gitblit10"}})])]),t._v(" "),s("h3",{attrs:{id:"_6-2-创建版本库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-创建版本库"}},[t._v("#")]),t._v(" 6.2 创建版本库")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit11",href:"/img/blogImage/gitblit11.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit11.png",alt:"gitblit11"}})])]),t._v(" "),s("h3",{attrs:{id:"_6-3-git克隆地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-git克隆地址"}},[t._v("#")]),t._v(" 6.3 Git克隆地址")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"gitblit12",href:"/img/blogImage/gitblit12.png"}},[s("img",{attrs:{src:"/img/blogImage/gitblit12.png",alt:"gitblit12"}})])]),t._v(" "),s("h3",{attrs:{id:"_6-4-更多操作说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-更多操作说明"}},[t._v("#")]),t._v(" 6.4 更多操作说明")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.gitblit.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitBlit官网操作说明"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=i.exports}}]);