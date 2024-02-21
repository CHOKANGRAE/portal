import { getComponent } from "@/apps/common/funs"

// for router
interface Menu {
    name: string
    title: string
    path: string
    component: any
}

class MenuList {
    static readonly home: Menu = { name: "home", title: "home", path: "/", component: getComponent("Home") }
    static readonly event: Menu = { name: "event", title: "event", path: "/event", component: getComponent("Event") }
    static readonly eventlast: Menu = { name: "eventlast", title: "eventlast", path: "/eventlast", component: getComponent("EventLast") }
    static readonly eventcontent: Menu = { name: "eventcontent", title: "eventcontent", path: "/eventcontent", component: getComponent("EventContent") }
    static readonly membership: Menu = { name: "membership", title: "membership", path: "/membership", component: getComponent("Membership") }
    static readonly support: Menu = { name: "support", title: "support", path: "/support", component: getComponent("Support") }
    static readonly use: Menu = { name: "use", title: "use", path: "/use", component: getComponent("Use") }
    static readonly login: Menu = { name: "login", title: "login", path: "/login", component: getComponent("Login") }
    static readonly user: Menu = { name: "user", title: "user", path: "/user", component: getComponent("User") }
    static readonly content: Menu = { name: "content", title: "content", path: "/content", component: getComponent("Content") }
}

export default MenuList
