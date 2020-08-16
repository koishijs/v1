(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{396:function(t,s,a){"use strict";a.r(s);var o=a(25),c=Object(o.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),a("p",[t._v("如果你是一位插件开发者，比起让机器人真正运行起来，你或许会更希望使用"),a("strong",[t._v("单元测试")]),t._v("，因为它具有许多前者所不具有的优点：")]),t._v(" "),a("ul",[a("li",[t._v("可以在无网络的情况下运行")]),t._v(" "),a("li",[t._v("可以模拟出多用户交互等复杂情况")]),t._v(" "),a("li",[t._v("可以在内存中模拟你想要的数据库")]),t._v(" "),a("li",[t._v("能够有效避免腾讯风控代理的损失")]),t._v(" "),a("li",[t._v("便于调试与错误定位")])]),t._v(" "),a("p",[t._v("本章将介绍官方库 "),a("code",[t._v("koishi-test-utils")]),t._v("。它一个基于 "),a("a",{attrs:{href:"https://jestjs.io/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest"),a("OutboundLink")],1),t._v(" 的单元测试工具集，你可以用它来快速检验你编写的 Koishi 插件和数据库实现。")]),t._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("p",[t._v("安装最新版本的 Jest 和 koishi-test-utils：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("npm i jest koishi-test-utils -D")]),t._v("\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("# 或者")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("yarn add jest koishi-test-utils -D")])])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("你可以在 "),a("RouterLink",{attrs:{to:"/api/test-utils.html"}},[t._v("这里")]),t._v(" 看到完整的接口列表和所需的最低版本。")],1)]),t._v(" "),a("h3",{attrs:{id:"使用-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-typescript"}},[t._v("#")]),t._v(" 使用 TypeScript")]),t._v(" "),a("p",[t._v("如果你使用 TypeScript 进行开发，你可能还需要下面这些依赖（当然你可能已经安装了它们）：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("npm i typescript @types/node @types/jest ts-jest -D")]),t._v("\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("# 或者")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("yarn add typescript @types/node @types/jest ts-jest -D")])])])]),a("p",[t._v("接着编辑你的 "),a("code",[t._v("jest.config.js")]),t._v(" 文件：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("module")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(".")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("exports")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  preset: ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'ts-jest'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  testEnvironment: ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'node'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  moduleFileExtensions: [")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'ts'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'js'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'json'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("],")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("}")])])])]),a("h2",{attrs:{id:"模拟事件上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟事件上报"}},[t._v("#")]),t._v(" 模拟事件上报")]),t._v(" "),a("p",[t._v("当你不希望真正用服务器却希望测试 App 对某个事件上报的响应时，你可以使用 MockedApp 来模拟一次事件上报：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { MockedApp } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-test-utils'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 这里的 MockedApp 是 App 的一个子类，因此你仍然可以像过去那样编写代码")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("new")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("MockedApp")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 这是一个简单的中间件例子，下面将测试这个中间件")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("middleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(({ ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("message")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" }, ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'天王盖地虎'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'宝塔镇河妖'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")]),t._v("\n\n"),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("test")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'example'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("async")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" () ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 尝试接收一个 message 事件")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("receiveMessage")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'user'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'天王盖地虎'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("123")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 判断 app 应该最终发送了这个请求")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 这里的请求名相当于 sender 中对应的接口名，不用写 async")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 请求参数与 sender 相一致")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("shouldHaveLastRequest")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'send_private_msg'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    userId: ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("123")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    message: ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'宝塔镇河妖'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(",")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  })")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 再次尝试接收一个 message 事件")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("receiveMessage")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'user'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'宫廷玉液酒'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("123")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 判断 app 应该最终没有发送任何请求")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("shouldHaveNoRequests")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("h2",{attrs:{id:"模拟会话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟会话"}},[t._v("#")]),t._v(" 模拟会话")]),t._v(" "),a("p",[t._v("Koishi 本身不需要会话的概念，因为 Meta 对象本身就具有 "),a("RouterLink",{attrs:{to:"/guide/receive-and-send.html#快捷操作"}},[t._v("快捷操作")]),t._v(" 功能。但是在单元测试中，我们可能经常需要让一个用户多次向机器人发送信息，这时一个会话系统就变得非常有用了。")],1),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { MockedApp } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-test-utils'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 创建一个无服务端的 App 实例")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("new")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("MockedApp")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 创建一个 QQ 号为 123 的私聊会话")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" session ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("createSession")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'user'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("123")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 还是刚刚那个例子")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("middleware")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(({ ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("message")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" }, ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (message ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'天王盖地虎'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("$send")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'宝塔镇河妖'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("return")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("next")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")]),t._v("\n\n"),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("test")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'example'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", () ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 将 foo 发送给机器人将会获得 bar 的回复")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" session.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("shouldHaveResponse")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'天王盖地虎'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'宝塔镇河妖'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 将 foo 发送给机器人将会获得某些回复")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" session.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("shouldHaveResponse")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'天王盖地虎'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 将 foo 发送给机器人后将会获得与快照一致的回复")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" session.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("shouldMatchSnapshot")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'天王盖地虎'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 将 foo 发送给机器人将不会获得任何回复")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" session.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("shouldHaveNoResponse")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'宫廷玉液酒'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("h2",{attrs:{id:"模拟服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟服务器"}},[t._v("#")]),t._v(" 模拟服务器")]),t._v(" "),a("p",[t._v("如果你想使用真正的 HTTP / WebSocket 服务器来测试，Koishi 也提供了相应的办法：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { createHttpServer } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-test-utils'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("test")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'example'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("async")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" () ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 创建一个真正的 CQHTTP 服务端")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" server ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("createHttpServer")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(token)")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 创建一个与之关联的 App")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" server.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("createBoundApp")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 运行 Koishi 应用")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("start")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 服务端向 Koishi 上报事件")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" server.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("post")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(meta)")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 设置客户端请求的结果")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  server.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("setResponse")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(method, data)")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 判断上一次请求的内容")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  server.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("shouldHaveLastRequest")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(method, params)")]),t._v("\n\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 关闭服务端和所有关联的 App")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("await")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" server.")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("close")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("h2",{attrs:{id:"模拟工具函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟工具函数"}},[t._v("#")]),t._v(" 模拟工具函数")]),t._v(" "),a("p",[t._v("如果我们编写的插件中含有延时或者随机效果，测试工作会变得困难不少——因为我们希望所有测试的行为都能在短时间内符合预期地完成。这个时候，koishi-test-utils 也提供了一种解决方式。")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#75715E"}},[t._v("// 这里的 utils 相当于 koishi-utils 的一个副本")]),t._v("\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 在此基础上额外提供了测试时进行控制的方法")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { utils } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-test-utils'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 此后插件中的 randomPick() 调用将永远返回数组的第一个元素")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("utils.randomPick.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("mockIndex")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 此后插件中的 randomInt() 调用将永远返回 3")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("utils.randomInt.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("mockReturnValue")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("3")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 此后插件中的 sleep() 调用将不等待直接返回 Promise.resolve()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("utils.sleep.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("mockResolvedValue")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")])])])]),a("p",[t._v("这些函数也有对应的 once 版本，它们将只生效一次：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#75715E"}},[t._v("// 下一次插件中的 randomPick() 调用将返回数组的第一个元素")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("utils.randomPick.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("mockIndexOnce")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("0")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 下一次插件中的 randomInt() 调用将返回 3")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("utils.randomInt.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("mockReturnValueOnce")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#AE81FF"}},[t._v("3")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 下一次插件中的 sleep() 调用将不等待直接返回 Promise.resolve()")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("utils.sleep.")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("mockResolvedValueOnce")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")])])])]),a("h2",{attrs:{id:"模拟数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟数据库"}},[t._v("#")]),t._v(" 模拟数据库")]),t._v(" "),a("p",[t._v("koishi-database-memory 是 Koishi 的一个数据库实现，只不过它将所有数据都留在内存中，方便调试：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { App } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-core'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-database-memory'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 使用内存数据库")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("new")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("App")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("({")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  database: { memory: {} },")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("p",[t._v("当然你也可以和上面的 MockedApp 结合起来使用：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { MockedApp } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-test-utils'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-database-memory'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 使用内存数据库")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("new")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("MockedApp")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("({")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  database: { memory: {} },")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("h2",{attrs:{id:"测试数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试数据库"}},[t._v("#")]),t._v(" 测试数据库")]),t._v(" "),a("p",[t._v("你可以使用 "),a("code",[t._v("testDatabase()")]),t._v(" 方法测试你编写的数据库。下面是一个简单的例子，它测试了我们刚刚介绍的内存数据库：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { testDatabase } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-test-utils'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-database-memory'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("testDatabase")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("({ memory: {} })")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 传入两个参数")]),t._v("\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 第一个参数是 App 的构造选项中的 database 参数")]),t._v("\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 第二个参数是每个测试阶段要执行的钩子函数，这些函数将用于手动清理数据库")]),t._v("\n"),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("testDatabase")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("({ memory: {} }, {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("beforeEachUser")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(": ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("app")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.database.memory.store.user ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" [],")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("beforeEachGroup")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(": ")]),a("span",{staticStyle:{color:"#FD971F"}},[t._v("app")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.database.memory.store.group ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" [],")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])]),a("p",[t._v("这个函数将测试所有 "),a("RouterLink",{attrs:{to:"/api/database.html"}},[t._v("内置的数据库方法")]),t._v(" 是否已经被实现。")],1),t._v(" "),a("p",[t._v("除此以外，你还可以测试你扩展的数据库接口，就像这样：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { testDatabase } ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-test-utils'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n\n"),a("span",{staticStyle:{color:"#75715E"}},[t._v("// 返回一个 App 实例")]),t._v("\n"),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app ")]),a("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("testDatabase")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(options, hooks)")]),t._v("\n\n"),a("span",{staticStyle:{color:"#A6E22E"}},[t._v("test")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),a("span",{staticStyle:{color:"#E6DB74"}},[t._v("'other methods'")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", () ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),a("span",{staticStyle:{color:"#75715E"}},[t._v("// do something with `app`")]),t._v("\n"),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])])],1)}),[],!1,null,null,null);s.default=c.exports}}]);