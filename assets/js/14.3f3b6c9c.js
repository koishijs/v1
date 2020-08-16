(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{417:function(v,_,e){"use strict";e.r(_);var s=e(25),t=Object(s.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[v._v("#")]),v._v(" 数据库 (Database)")]),v._v(" "),e("p",[v._v("一个数据库对象代理了 Koishi 上下文绑定的应用实例有关的所有数据库访问。同时它具有注入特性，任何插件都可以自己定义数据库上的方法。本章主要介绍数据库的官方接口。注意："),e("strong",[v._v("它们并不由 Koishi 自身实现，而是由每个数据库分别实现的")]),v._v("。Koishi 只是提供了一套标准。")]),v._v(" "),e("h2",{attrs:{id:"db-getuser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-getuser"}},[v._v("#")]),v._v(" db.getUser(userId, defaultAuthority?, fields?)")]),v._v(" "),e("p",[v._v("向数据库请求用户数据。其中的后两个参数可以写任意一个，都可以识别。如果对应的用户不存在，且默认权限非负，则立即生成一个用户对象返回；如果默认权限为正数，则将生成的用户对象写入数据库。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("userId:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 用户 ID")]),v._v(" "),e("li",[e("strong",[v._v("defaultAuthority:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 默认权限，默认值为 "),e("code",[v._v("0")])]),v._v(" "),e("li",[e("strong",[v._v("fields:")]),v._v(" "),e("code",[v._v("UserField[]")]),v._v(" 请求的字段，默认为全部字段")]),v._v(" "),e("li",[v._v("返回值: "),e("code",[v._v("Promise<Partial<UserData>>")]),v._v(" 用户数据")])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),e("p",[v._v("尽管这里我们提供了 "),e("code",[v._v("fields")]),v._v(" 参数用于对特定的数据库进行优化，但是如果你是数据库开发者，也完全可以忽略这个参数。只需要保证返回的数据满足用户数据格式，且包含在 "),e("code",[v._v("fields")]),v._v(" 中的字段都存在即可。")])]),v._v(" "),e("h2",{attrs:{id:"db-observeuser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-observeuser"}},[v._v("#")]),v._v(" db.observeUser(userId, defaultAuthority?, fields?)")]),v._v(" "),e("p",[v._v("上一个方法的监视器版本。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("userId:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 用户 ID")]),v._v(" "),e("li",[e("strong",[v._v("defaultAuthority:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 默认权限，默认值为 "),e("code",[v._v("0")])]),v._v(" "),e("li",[e("strong",[v._v("fields:")]),v._v(" "),e("code",[v._v("UserField[]")]),v._v(" 请求的字段，默认为全部字段")]),v._v(" "),e("li",[v._v("返回值: "),e("code",[v._v("Promise<Partial<User>>")]),v._v(" 用户数据")])]),v._v(" "),e("h2",{attrs:{id:"db-getusers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-getusers"}},[v._v("#")]),v._v(" db.getUsers(ids?, fields?)")]),v._v(" "),e("p",[v._v("向数据库请求多位用户数据。如果数据不存在，则不会在返回的列表中。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("ids:")]),v._v(" "),e("code",[v._v("number[]")]),v._v(" 用户 ID 列表，默认为全部用户")]),v._v(" "),e("li",[e("strong",[v._v("fields:")]),v._v(" "),e("code",[v._v("UserField[]")]),v._v(" 请求的字段，默认为全部字段")]),v._v(" "),e("li",[v._v("返回值: "),e("code",[v._v("Promise<Partial<UserData>[]>")]),v._v(" 用户数据列表")])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),e("p",[v._v("这里的两个参数可以写任意一个，都可以识别。虽然这两个参数都是数组类型，但是可以利用 "),e("code",[v._v("ids")]),v._v(" 中的元素一定是数字而 "),e("code",[v._v("fields")]),v._v(" 中的元素一定是字符串进行判断。")])]),v._v(" "),e("h2",{attrs:{id:"db-setuser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-setuser"}},[v._v("#")]),v._v(" db.setUser(id, data)")]),v._v(" "),e("p",[v._v("向数据库写入用户数据。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("id:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 用户 ID")]),v._v(" "),e("li",[e("strong",[v._v("data:")]),v._v(" "),e("code",[v._v("Partial<UserData>")]),v._v(" 要修改的数据")]),v._v(" "),e("li",[v._v("返回值: "),e("code",[v._v("Promise<any>")])])]),v._v(" "),e("h2",{attrs:{id:"db-getusercount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-getusercount"}},[v._v("#")]),v._v(" db.getUserCount()")]),v._v(" "),e("p",[v._v("向数据库请求用户总数。")]),v._v(" "),e("ul",[e("li",[v._v("返回值: "),e("code",[v._v("Promise<number>")])])]),v._v(" "),e("h2",{attrs:{id:"db-getgroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-getgroup"}},[v._v("#")]),v._v(" db.getGroup(groupId, assignee?, fields?)")]),v._v(" "),e("p",[v._v("向数据库请求群数据。其中的后两个参数可以写任意一个，都可以识别。如果对应的群不存在，则立即生成一个群对象返回；且如果默认代理者为正数，则将生成的群对象写回数据库。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("groupId:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 群 ID")]),v._v(" "),e("li",[e("strong",[v._v("assignee:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 默认代理者，默认为 "),e("code",[v._v("0")])]),v._v(" "),e("li",[e("strong",[v._v("fields:")]),v._v(" "),e("code",[v._v("GroupField[]")]),v._v(" 请求的字段，默认为全部字段")]),v._v(" "),e("li",[v._v("返回值: "),e("code",[v._v("Promise<Partial<GroupData>>")]),v._v(" 群数据")])]),v._v(" "),e("h2",{attrs:{id:"db-observegroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-observegroup"}},[v._v("#")]),v._v(" db.observeGroup(groupId, assignee?, fields?)")]),v._v(" "),e("p",[v._v("上一个方法的监视器版本。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("groupId:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 群 ID")]),v._v(" "),e("li",[e("strong",[v._v("assignee:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 默认代理者，默认为 "),e("code",[v._v("0")])]),v._v(" "),e("li",[e("strong",[v._v("fields:")]),v._v(" "),e("code",[v._v("GroupField[]")]),v._v(" 请求的字段，默认为全部字段")]),v._v(" "),e("li",[v._v("返回值: "),e("code",[v._v("Promise<Partial<Group>>")]),v._v(" 群数据")])]),v._v(" "),e("h2",{attrs:{id:"db-getallgroups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-getallgroups"}},[v._v("#")]),v._v(" db.getAllGroups(fields?, assignees?)")]),v._v(" "),e("p",[v._v("向数据库请求被特定机器人管理的所有群数据。这里的两个参数可以写任意一个，都可以识别。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("fields:")]),v._v(" "),e("code",[v._v("GroupField[]")]),v._v(" 请求的字段，默认为全部字段")]),v._v(" "),e("li",[e("strong",[v._v("assignees:")]),v._v(" "),e("code",[v._v("number[]")]),v._v(" 机器人 ID 列表，默认为当前进程全部机器人")]),v._v(" "),e("li",[v._v("返回值: "),e("code",[v._v("Promise<Partial<GroupData>[]>")]),v._v(" 群数据列表")])]),v._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),e("p",[v._v("请注意这个方法和上面的 "),e("code",[v._v("db.getUsers")]),v._v(" 方法的区别。除了名字不同以外，这个方法的 "),e("code",[v._v("fields")]),v._v(" 是第一个参数，且 "),e("code",[v._v("assignees")]),v._v(" 代表的是机器人 ID 列表；而上面的 "),e("code",[v._v("db.getUsers()")]),v._v(" 方法的第一个参数是 "),e("code",[v._v("ids")]),v._v("，且代表的是用户 ID 列表。")])]),v._v(" "),e("h2",{attrs:{id:"db-setgroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-setgroup"}},[v._v("#")]),v._v(" db.setGroup(id, data)")]),v._v(" "),e("p",[v._v("向数据库写入群数据。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("id:")]),v._v(" "),e("code",[v._v("number")]),v._v(" 群 ID")]),v._v(" "),e("li",[e("strong",[v._v("data:")]),v._v(" "),e("code",[v._v("Partial<GroupData>")]),v._v(" 要修改的数据")]),v._v(" "),e("li",[v._v("返回值: "),e("code",[v._v("Promise<any>")])])]),v._v(" "),e("h2",{attrs:{id:"db-getgroupcount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#db-getgroupcount"}},[v._v("#")]),v._v(" db.getGroupCount()")]),v._v(" "),e("p",[v._v("向数据库请求群总数。")]),v._v(" "),e("ul",[e("li",[v._v("返回值: "),e("code",[v._v("Promise<number>")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);