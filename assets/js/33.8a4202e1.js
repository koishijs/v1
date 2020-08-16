(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{399:function(t,o,s){"use strict";s.r(o);var a=s(25),c=Object(a.a)({},(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"输出与日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出与日志"}},[t._v("#")]),t._v(" 输出与日志 "),s("Badge",{attrs:{text:"1.3.0+"}})],1),t._v(" "),s("p",[t._v("本章主要介绍如何控制 Koishi 命令行工具的输出。")]),t._v(" "),s("h2",{attrs:{id:"设置输出等级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置输出等级"}},[t._v("#")]),t._v(" 设置输出等级")]),t._v(" "),s("p",[s("strong",[t._v("输出等级")]),t._v("控制了所有输出到命令行的内容的重要性。在 Koishi 内置的输出系统中，所有信息被分为了 3 种不同的等级：")]),t._v(" "),s("ol",[s("li",[t._v("error / success")]),t._v(" "),s("li",[t._v("warning / info")]),t._v(" "),s("li",[t._v("debug")])]),t._v(" "),s("p",[t._v("相应地，当设置输出等级为 x 时，Koishi 只会输出重要性小于等于 x 的信息。当输出等级被设置为 0 时，Koishi 将不产生任何输出；而当输出等级被设置为 3 时，Koishi 产生的全部信息都会被显示在屏幕上（当然下面还会介绍过滤器，你可以通过手动设置过滤器减少输出。）")]),t._v(" "),s("p",[t._v("需要注意的是，运行时产生的错误（如请求失败，数据库访问失败等）都属于 warning，只有在创建阶段和连接阶段抛出的错误才会通过 error 输出（参见 "),s("RouterLink",{attrs:{to:"/guide/plugin-and-context.html#生命周期"}},[t._v("生命周期")]),t._v("）。")],1),t._v(" "),s("p",[t._v("默认情况下 Koishi 的输出等级为 2。")]),t._v(" "),s("h3",{attrs:{id:"在-cli-中控制输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-cli-中控制输出"}},[t._v("#")]),t._v(" 在 CLI 中控制输出")]),t._v(" "),s("p",[t._v("在使用 "),s("code",[t._v("koishi run")]),t._v(" 指令时，你可以加入一个 "),s("code",[t._v("--log-level")]),t._v(" 选项，它的值可以是 0~3 之间的一个整数，表示不同的输出等级。特别地，你还可以用 "),s("code",[t._v("--silent")]),t._v(" 表示 "),s("code",[t._v("--log-level=0")]),t._v("，用 "),s("code",[t._v("--debug")]),t._v(" 代替 "),s("code",[t._v("--log-level=3")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"在配置文件中控制输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在配置文件中控制输出"}},[t._v("#")]),t._v(" 在配置文件中控制输出")]),t._v(" "),s("p",[t._v("你也可以在配置文件中控制输出等级：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:"koishi.config.js"}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  logLevel: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("3")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),s("p",[t._v("上述两种方法的功能类似，但是 CLI 选项控制的范围更大，例如在配置文件解析完成之前 "),s("code",[t._v("koishi.config.js")]),t._v(" 中的配置是不生效的。除此以外，如果同时使用 CLI 选项和配置选项，则实际的运行时输出等级为两者的最小值。")]),t._v(" "),s("h2",{attrs:{id:"使用-logger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-logger"}},[t._v("#")]),t._v(" 使用 logger")]),t._v(" "),s("p",[t._v("如果你是插件开发者，你也可以主动调用 Koishi 内置的 Logger API 来输出调试信息，这样用户就可以用上述的方法来控制你的插件的输出等级了。具体使用方法是这样的：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:"my-plugin.js"}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("ctx")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 生成一个 Logger 对象")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" logger ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("logger")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("doSomething")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 调用 logger 方法来产生输出")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    .")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("then")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(() ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" logger.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("success")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'hello'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("))")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    .")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("catch")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(() ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" logger.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("warn")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'failed'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("))")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),s("p",[t._v("上面的这个 Logger 对象有下面的方法，它们的函数签名与 "),s("code",[t._v("console.log")]),t._v(" 一致：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#F92672"}},[t._v("export")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("interface")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("Logger")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("warn")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("format")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("...")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("param")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("void")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("info")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("format")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("...")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("param")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("void")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("debug")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("format")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("...")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("param")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("void")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("success")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("format")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("...")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("param")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("void")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("error")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("format")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("...")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("param")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("any")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),s("span",{staticStyle:{color:"#F92672"}},[t._v(":")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("void")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),s("h3",{attrs:{id:"过滤输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤输出"}},[t._v("#")]),t._v(" 过滤输出")]),t._v(" "),s("p",[t._v("你还可以通过在 "),s("code",[t._v("ctx.logger()")]),t._v(" 方法中传入一个 scope 参数来实现指定你输出的范围，就像这样：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:"plugin-foo.js"}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("ctx")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" logger ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("logger")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'foo'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 执行其他代码并使用 logger 产生输出")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),s("p",[t._v("然后，用户可以通过设置 "),s("code",[t._v("logFilter")]),t._v(" 这个配置项指定所有由 foo 插件产生的输出的等级，就像这样：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:"koishi.config.js"}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  logLevel: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("3")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  logFilter: {")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    ")]),s("span",{staticStyle:{color:"#75715E"}},[t._v("// 由 foo 产生的输出等级为 2")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    foo: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("2")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  },")]),t._v("\n"),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),s("p",[t._v("当同时设置了 "),s("code",[t._v("logLevel")]),t._v(" 和 "),s("code",[t._v("logFilter")]),t._v(" 时，后者在 foo 插件的范围会覆盖前者，再用覆盖后的值与命令行取最小值，得到的就是 foo 插件的最终输出等级。")]),t._v(" "),s("h3",{attrs:{id:"使用-debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-debug"}},[t._v("#")]),t._v(" 使用 debug")]),t._v(" "),s("p",[t._v("Koishi 内部使用 "),s("a",{attrs:{href:"https://github.com/visionmedia/debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("debug"),s("OutboundLink")],1),t._v(" 处理 logger 产生的信息。你可以通过设置环境变量的方式来输出 debug 信息：")]),t._v(" "),s("Terminal",{attrs:{content:[{content:[{text:"# 对于 linux 和 macOS",class:"hint"}]},{content:["DEBUG=koishi:*; ",{text:"koishi",class:"input"}," start"]},{content:[]},{content:[{text:"# 对于 Windows",class:"hint"}]},{content:["$env:DEBUG=koishi:*; ",{text:"koishi",class:"input"}," start"]},{content:[]},{content:[{text:"# 使用 cross-env",class:"hint"}]},{content:[{text:"cross-env",class:"input"}," DEBUG=koishi:*; ",{text:"koishi",class:"input"}," start"]}],static:""}}),t._v(" "),s("h3",{attrs:{id:"内置的输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置的输出"}},[t._v("#")]),t._v(" 内置的输出")]),t._v(" "),s("p",[t._v("koishi-core 自身只会产生两种 logger 输出：")]),t._v(" "),s("ul",[s("li",[t._v("Koishi 会以 app/server/receiver/sender/command 五种 scope 输出 debug 信息")]),t._v(" "),s("li",[t._v("当 Koishi 内置的 error 事件被触发时，会被自动触发无 scope 的 logger/warning 事件")])]),t._v(" "),s("p",[t._v("利用上面的方法，你可以借助 koishi-core 的输出对你的机器人进行调试。")])],1)}),[],!1,null,null,null);o.default=c.exports}}]);