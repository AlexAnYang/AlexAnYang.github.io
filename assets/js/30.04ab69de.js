(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{251:function(s,a,t){"use strict";t.r(a);var n=t(17),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos7安装logstash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装logstash"}},[s._v("#")]),s._v(" CentOS7安装LogStash")]),s._v(" "),t("p",[s._v("Logstash是一个开源的服务器端数据处理管道，可以同时从多个数据源获取数据，并对其进行转换，然后将其发送到你最喜欢的“存储”。（当然，我们最喜欢的是Elasticsearch）\n"),t("img",{attrs:{src:"/img/blogImage/logstash%E7%AE%80%E4%BB%8B.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"_1-下载logstash和mysql驱动包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载logstash和mysql驱动包"}},[s._v("#")]),s._v(" 1 "),t("strong",[s._v("下载logstash和mysql驱动包")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://pan.baidu.com/s/1RL5mfK3LMndi09uFqoBe-g",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载地址"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_2-拷贝到指定目录，并解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-拷贝到指定目录，并解压"}},[s._v("#")]),s._v(" 2 拷贝到指定目录，并解压")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf logstash-6.4.3.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3-安装-jdbc-和-elasticsearch-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-jdbc-和-elasticsearch-插件"}},[s._v("#")]),s._v(" 3 "),t("strong",[s._v("安装 jdbc 和 elasticsearch 插件")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入到logstash的bin目录下面执行安装插件 执行成功如下图")]),s._v("\n./logstash-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" logstash-input-jdbc\n./logstash-plugin "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" logstash-output-elasticsearch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"/img/blogImage/%E5%AE%89%E8%A3%85logstash%E6%8F%92%E4%BB%B6%E6%88%90%E5%8A%9F.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"_4-简单测试logstash-6-4-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-简单测试logstash-6-4-3"}},[s._v("#")]),s._v(" 4 简单测试logstash-6.4.3")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入到logstash的bin 命令行启动测试 启动成功如下图")]),s._v("\n./logstash -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input{stdin{}}output{stdout{codec=>rubydebug}}'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#接着屏幕就等着你输入了，比如输入一个Hello World，会出现以下的提示语句。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"/img/blogImage/logstash%E6%B5%8B%E8%AF%95%E6%88%90%E5%8A%9F.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h2",{attrs:{id:"_5-拷贝mysql包到config目录下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-拷贝mysql包到config目录下"}},[s._v("#")]),s._v(" 5 拷贝mysql包到config目录下")]),s._v(" "),t("p",[s._v("由于logstash是ruby开发的，所以这里要下载mysql的连接库jar包，将下载好的mysql-connector-java-5.1.48.jar，放至logstash/config/目录下。")]),s._v(" "),t("h2",{attrs:{id:"_6-创建mysql配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-创建mysql配置文件"}},[s._v("#")]),s._v(" 6 创建mysql配置文件")]),s._v(" "),t("p",[s._v("在config目录下，创建配置文件（logstash-mysql-es.conf）：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("input "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  jdbc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql相关jdbc配置")]),s._v("\n    jdbc_connection_string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jdbc:mysql://10.112.76.30:3306/jack_test?useUnicode=true&characterEncoding=utf-8&useSSL=false"')]),s._v("\n    jdbc_user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n    jdbc_password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jdbc连接mysql驱动的文件目录，可去官网下载:https://dev.mysql.com/downloads/connector/j/")]),s._v("\n    jdbc_driver_library "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./config/mysql-connector-java-5.1.48.jar"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql的驱动类名称")]),s._v("\n    jdbc_driver_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"com.mysql.jdbc.Driver"')]),s._v("\n    jdbc_paging_enabled "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    jdbc_page_size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"50000"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认的时区")]),s._v("\n    jdbc_default_timezone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Asia/Shanghai"')]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql文件, 也可以直接写SQL语句在此处，如下：")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# statement => "select * from t_order where update_time >= :sql_last_value;"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 专门写sql语句的文件 配置时请注意路径 注：statement和statement_filepath不能同时放开")]),s._v("\n    statement_filepath "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./config/jdbc.sql"')]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里类似crontab,可以定制定时操作，比如每分钟执行一次同步(分 时 天 月 年)")]),s._v("\n    schedule "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"* * * * *"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#type => "jdbc"')]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否记录上次执行结果, 如果为真,将会把上次执行到的 tracking_column 字段的值记录下来,保存到 last_run_metadata_path 指定的文件中")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#record_last_run => true")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否需要记录某个column 的值,如果record_last_run为真,可以自定义我们需要 track 的 column 名称，此时该参数就要为 true. 否则默认 track 的是 timestamp 的值.")]),s._v("\n    use_column_value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果 use_column_value 为真,需配置此参数. track 的数据库 column 名,该 column 必须是递增的. 一般是mysql主键")]),s._v("\n    tracking_column "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update_time"')]),s._v("\n    \n    tracking_column_type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timestamp"')]),s._v("\n\n    last_run_metadata_path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./logstash_capital_bill_last_id"')]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否清除 last_run_metadata_path 的记录,如果为真那么每次都相当于从头开始查询所有的数据库记录")]),s._v("\n    clean_run "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#是否将 字段(column) 名称转小写")]),s._v("\n    lowercase_column_names "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hosts--\x3eelasticsearch的主机地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#index--\x3e索引名称， document_id文档ID，一般对应mysql数据表的主键id字段")]),s._v("\n\noutput "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  elasticsearch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    hosts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.0.100:9200"')]),s._v("\n    index "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql_order"')]),s._v("\n    document_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%{id}"')]),s._v("\n    template_overwrite "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里输出调试，正式运行时可以注释掉")]),s._v("\n  stdout "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      codec "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" json_lines\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br")])]),t("h2",{attrs:{id:"_7-配置文件注意项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-配置文件注意项"}},[s._v("#")]),s._v(" 7 配置文件注意项")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("这里有几个注意点：\n（1）jdbc_driver_library\n    mysql-connector-java-5.1.48.jar的存放目录，这个一定要配置正确，支持全路径和相对路径。如果配置不对，将会报“can ”错误。\n（2）sql_last_value\n    标志目前logstash同步的位置信息（类似offset）。比如id、updatetime。logstash通过这个标志，可以判断目前同步到哪一条数据。\n（3）statement、statement_filepath\n    statement：执行同步的sql语句，可以同步部分数据。\n    statement_filepath：存储执行同步的sql语句。不和statement同时使用。\n（4）schedule\n     定时器，表示每隔多长时间同步一次数据。格式类似crontab。\n（5）tracking_column、tracking_column_type\n    tracking_column：表示表中哪一列用于判断logstash同步的位置信息。与sql_last_value比较判断是否需要同步这条数据。\n    tracking_column_type：racking_column指定列的类型。支持两种类型：numeric（默认）、timestamp。注意：如果列是时间字段（比如updateTime），一定要指定这个类型为timestamp。我就踩了这个大坑。。。一直同步不成功！！！\n（6）last_run_metadata_path\n     存储sql_last_value值的文件名称及位置。\n（7）document_id\n     生成elasticsearch的文档值，尽量使用同步的数据中已有的唯一标识。比如同步订单数据，可以使用订单号。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"_8-启动logstash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-启动logstash"}},[s._v("#")]),s._v(" 8 启动logstash")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在根目录下，执行命令：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" bin/logstash -f config/logstash-mysql-es.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" logs/logstash.out "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);