(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{386:function(t,e,a){"use strict";a.r(e);var s=a(25),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"下棋"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下棋"}},[t._v("#")]),t._v(" 下棋 (chess)")]),t._v(" "),a("p",[t._v("koishi-plugin-chess 提供了下棋功能。目前支持的规则有：")]),t._v(" "),a("ul",[a("li",[t._v("五子棋")]),t._v(" "),a("li",[t._v("围棋（禁全同，暂时不支持点目）")]),t._v(" "),a("li",[t._v("黑白棋")])]),t._v(" "),a("p",[t._v("下面是一个简单的示例：")]),t._v(" "),a("panel-view",{attrs:{title:"聊天记录"}},[a("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[t._v("黑白棋")]),t._v(" "),a("chat-message",{staticClass:"no-padding",attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a("img",{attrs:{src:"/chess/othello-1.svg",width:"240"}})]),t._v(" "),a("chat-message",{attrs:{nickname:"Bob",color:"#00994d"}},[t._v("落子 E6")]),t._v(" "),a("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[t._v("Bob 加入了游戏并落子于 E6，下一手轮到 "),a("strong",[t._v("@Alice")]),t._v("。")]),t._v(" "),a("chat-message",{staticClass:"no-padding",attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a("img",{attrs:{src:"/chess/othello-2.svg",width:"240"}})]),t._v(" "),a("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[t._v("落子 F6")]),t._v(" "),a("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[t._v("Alice 落子于 E6，下一手轮到 "),a("strong",[t._v("@Bob")]),t._v("。")]),t._v(" "),a("chat-message",{staticClass:"no-padding",attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a("img",{attrs:{src:"/chess/othello-3.svg",width:"240"}})])],1),t._v(" "),a("h2",{attrs:{id:"基本功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本功能"}},[t._v("#")]),t._v(" 基本功能")]),t._v(" "),a("h3",{attrs:{id:"开始和停止棋局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始和停止棋局"}},[t._v("#")]),t._v(" 开始和停止棋局")]),t._v(" "),a("p",[t._v("使用 chess 指令开始一个棋局：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",[a("code",[t._v("chess --rule <rule> [--size <size>]\n")])])]),a("p",[t._v("或者直接使用已经注册号的快捷调用：“围棋”，“五子棋”，“黑白棋”，也可以开始一个棋局。")]),t._v(" "),a("p",[t._v("其中目前支持的棋局规则以及它们对应的规则名和默认棋盘大小为：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("快捷名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("规则名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认大小")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("围棋")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("go")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("19")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("五子棋")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("gomoku")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("15")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("黑白棋 / 奥赛罗")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("othello")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")])])])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("chess --stop")]),t._v(" 或者 "),a("code",[t._v("停止下棋")]),t._v(" 可以停止一个正在进行的棋局。")]),t._v(" "),a("h3",{attrs:{id:"落子，悔棋和跳过"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#落子，悔棋和跳过"}},[t._v("#")]),t._v(" 落子，悔棋和跳过")]),t._v(" "),a("p",[t._v("当棋局开始时，默认发起人是后手，而第一个响应这个棋局者是先手。输入 "),a("code",[t._v("chess position")]),t._v(" 或者 "),a("code",[t._v("落子 position")]),t._v(" 就可以加入这个棋局，此时棋局正式形成，其他人无法继续加入游戏。而参与游戏的两人可以依次使用“落子”指令进行游戏。")]),t._v(" "),a("p",[t._v("输入 "),a("code",[t._v("chess --repent")]),t._v(" 或者 "),a("code",[t._v("悔棋")]),t._v(" 进行悔棋，游戏会向前倒退一步。")]),t._v(" "),a("p",[t._v("输入 "),a("code",[t._v("chess --skip")]),t._v(" 或者 "),a("code",[t._v("跳过回合")]),t._v(" 可以跳过一个回合。")]),t._v(" "),a("h2",{attrs:{id:"扩展规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展规则"}},[t._v("#")]),t._v(" 扩展规则 "),a("Badge",{attrs:{text:"todo",type:"warn"}})],1),t._v(" "),a("h2",{attrs:{id:"配置-ai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-ai"}},[t._v("#")]),t._v(" 配置 AI "),a("Badge",{attrs:{text:"todo",type:"warn"}})],1)],1)}),[],!1,null,null,null);e.default=v.exports}}]);