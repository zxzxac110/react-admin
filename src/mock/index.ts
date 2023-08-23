import dayjs from "dayjs";
import { message } from "antd";
import { formatMenu } from "@/utils";

type MockDataType = {
  "/getmenu": MenuResponse
  "/getpower": PowerApi
  "/login": LoginApi
  "/addmenu": ResponseData
  "/addmessage": ResponseData
  "/getmessage": MessageAPi
  "/delmenu": ResponseData
  "/getmenuinfo": ResponseData & { data: MenuItem | null }
  "/editmenuinfo": ResponseData
  "/getvisitordata": ResponseData
  [key: string]: ResponseData | MenuList | PowerApi | LoginApi | MenuInfoApi | MenuResponse
}

function delay(data: Record<string, any>) {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 500);
  })
}

async function getMenuList() {
  const data = {
    "data": [
      {
        "id": 50,
        "menu_id": 0,
        "type": 1,
        "label": "用户运营",
        "name": "userManage",

        "icon": "user",

        "sort": 0,
        "editable": true,
        "created_at": "2021-12-06 17:22:47",
        "updated_at": "2021-12-06 17:22:47",
        "menus": [
          {
            "id": 51,
            "menu_id": 50,
            "type": 1,
            "label": "用户管理",
            "name": "userManage",

            "icon": "user",

            "sort": 0,
            "editable": true,
            "created_at": "2021-12-06 17:23:01",
            "updated_at": "2021-12-06 17:23:01"
          },
          {
            "id": 52,
            "menu_id": 50,
            "type": 1,
            "label": "会员管理",
            "name": "vip",

            "icon": "user",

            "sort": 0,
            "editable": true,
            "created_at": "2021-12-06 17:32:59",
            "updated_at": "2021-12-06 17:32:59"
          }
        ]
      },
      {
        "id": 72,
        "menu_id": 0,
        "type": 1,
        "label": "个人号运营",
        "name": "userManage",

        "icon": "user",

        "sort": 0,
        "editable": true,
        "created_at": "2022-01-04 15:03:46",
        "updated_at": "2022-01-04 15:03:46",
        "menus": [
          {
            "id": 73,
            "menu_id": 72,
            "type": 1,
            "label": "个人号管理",
            "name": "personageManage",

            "icon": "user",

            "sort": 0,
            "editable": true,
            "created_at": "2022-01-04 15:04:27",
            "updated_at": "2022-01-04 15:04:27"
          }
        ]
      },
      {
        "id": 68,
        "menu_id": 0,
        "type": 1,
        "label": "社群运营",
        "name": "communityManagement",
        "sort": 2,
        "editable": true,
        "created_at": "2022-01-04 14:51:24",
        "updated_at": "2022-01-04 15:05:58",
        "menus": [
          {
            "id": 69,
            "menu_id": 68,
            "type": 1,
            "label": "社群管理",
            "name": "communityManagement",

            "icon": "user",

            "sort": 0,
            "editable": true,
            "created_at": "2022-01-04 14:57:06",
            "updated_at": "2022-01-04 15:00:15"
          },
          {
            "id": 70,
            "menu_id": 68,
            "type": 1,
            "label": "群发管理",
            "name": "chatMessageTasksGroup",

            "icon": "user",

            "sort": 0,
            "editable": true,
            "created_at": "2022-01-04 14:57:42",
            "updated_at": "2022-01-04 14:59:39"
          },
          {
            "id": 71,
            "menu_id": 68,
            "type": 1,
            "label": "社群设置",
            "name": "groupAnnouncement",

            "icon": "user",

            "sort": 0,
            "editable": true,
            "created_at": "2022-01-04 14:58:04",
            "updated_at": "2022-01-04 14:58:04"
          }
        ]
      },
      {
        "id": 37,
        "menu_id": 0,
        "type": 1,
        "label": "商城管理",
        "name": "template",
        "sort": 4,
        "editable": true,
        "created_at": "2021-12-06 11:33:33",
        "updated_at": "2021-12-06 11:33:33",
        "menus": [
          {
            "id": 41,
            "menu_id": 37,
            "type": 1,
            "label": "售后管理",
            "name": "afterSale",

            "icon": "user",

            "sort": 4,
            "editable": true,
            "created_at": "2021-12-06 11:33:33",
            "updated_at": "2021-12-06 11:33:33"
          },
          {
            "id": 40,
            "menu_id": 37,
            "type": 1,
            "label": "订单管理",
            "name": "orderManage",

            "icon": "user",

            "sort": 3,
            "editable": true,
            "created_at": "2021-12-06 11:33:33",
            "updated_at": "2021-12-06 11:33:33"
          },
          {
            "id": 39,
            "menu_id": 37,
            "type": 1,
            "label": "商品管理",
            "name": "shop",

            "icon": "user",

            "sort": 2,
            "editable": true,
            "created_at": "2021-12-06 11:33:33",
            "updated_at": "2021-12-06 11:33:33"
          },
          {
            "id": 38,
            "menu_id": 37,
            "type": 1,
            "label": "模板页",
            "name": "template",

            "icon": "user",

            "sort": 1,
            "editable": true,
            "created_at": "2021-12-06 11:33:33",
            "updated_at": "2021-12-06 11:33:33"
          },
          {
            "id": 43,
            "menu_id": 37,
            "type": 1,
            "label": "分组管理",
            "name": "groupManage",

            "icon": "user",

            "sort": 0,
            "editable": true,
            "created_at": "2021-12-06 11:33:33",
            "updated_at": "2021-12-06 11:33:33"
          },
          {
            "id": 44,
            "menu_id": 37,
            "type": 1,
            "label": "素材管理",
            "name": "materials",

            "icon": "user",

            "sort": 0,
            "editable": true,
            "created_at": "2021-12-06 11:33:33",
            "updated_at": "2021-12-06 11:33:33"
          }
        ]
      },
      {
        "id": 45,
        "menu_id": 0,
        "type": 1,
        "label": "系统设置",
        "name": "setTag",

        "icon": "user",

        "sort": 7,
        "editable": true,
        "created_at": "2021-12-06 11:33:40",
        "updated_at": "2021-12-06 11:33:40",
        "menus": [
          {
            "id": 47,
            "menu_id": 45,
            "type": 1,
            "label": "管理员",
            "name": "rightsProfile",

            "icon": "user",

            "sort": 4,
            "editable": false,
            "created_at": "2021-12-06 11:33:40",
            "updated_at": "2021-12-06 11:33:40"
          },
          {
            "id": 46,
            "menu_id": 45,
            "type": 1,
            "label": "管理员组",
            "name": "roleManagement",

            "icon": 'user',

            "sort": 3,
            "editable": false,
            "created_at": "2021-12-06 11:33:40",
            "updated_at": "2021-12-06 11:33:40"
          },
          {
            "id": 49,
            "menu_id": 45,
            "type": 1,
            "label": "店铺管理",
            "name": "storeManagement",

            "icon": 'user',

            "sort": 2,
            "editable": false,
            "created_at": "2021-12-06 11:41:05",
            "updated_at": "2021-12-06 11:52:09"
          }
        ]
      }
    ],
    "links": {
      "first": "https://api.jukexiao.cn/admins/menus?page=1",
      "last": "https://api.jukexiao.cn/admins/menus?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "path": "https://api.jukexiao.cn/admins/menus",
      "per_page": 15,
      "to": 5,
      "total": 5
    }
  }
  return await delay(data)
}
async function getMenu() {
  return await delay([{ "menu_id": 3, "title": "403", "path": "/403", "key": "error403", "parentKey": "result", "icon": "icon_locking", "keepAlive": "false", "order": 0 }, { "menu_id": 4, "title": "404", "path": "/404", "key": "error404", "parentKey": "result", "icon": "icon_close", "keepAlive": "false", "order": 1 }, { "menu_id": 30, "title": "反馈统计", "path": "/feedback", "key": "feedback", "parentKey": "statistics", "icon": "icon_feeding", "keepAlive": "true", "order": 1 }, { "menu_id": 18, "title": "访客统计", "path": "/visitor", "key": "visitor", "parentKey": "statistics", "icon": "icon_addresslist", "keepAlive": "true", "order": 1 }, { "menu_id": 299, "title": "个人中心", "path": "/person", "key": "detailsPerson", "parentKey": "details", "icon": "icon_github", "keepAlive": "true", "order": 1 }, { "menu_id": 7, "title": "表单页", "path": "/form", "key": "from", "parentKey": "", "icon": "icon_form", "keepAlive": "false", "order": 3 }, { "menu_id": 1, "title": "详情页", "path": "/details", "key": "details", "parentKey": "", "icon": "icon_edit", "keepAlive": "false", "order": 3 }, { "menu_id": 16, "title": "结果页", "path": "/result", "key": "result", "parentKey": "", "icon": "icon_voiceprint", "keepAlive": "false", "order": 4 }, { "menu_id": 17, "title": "统计", "path": "/statistics", "key": "statistics", "parentKey": "", "icon": "icon_MTR", "keepAlive": "true", "order": 5 }, { "menu_id": 12, "title": "系统设置", "path": "/power", "key": "power", "parentKey": "", "icon": "icon_set", "keepAlive": "false", "order": 9 }, { "menu_id": 13, "title": "菜单管理", "path": "/menu", "key": "powerMenu", "parentKey": "power", "icon": "icon_menu", "keepAlive": "true", "order": 1475 }, { "menu_id": 15, "title": "用户管理", "path": "/user", "key": "powerUser", "parentKey": "power", "icon": "icon_infopersonal", "keepAlive": "true", "order": 1593 }, { "menu_id": 5, "title": "500", "path": "/500", "key": "error500", "parentKey": "result", "icon": "icon_privacy_closed", "keepAlive": "false", "order": 4568 }, { "menu_id": 10, "title": "卡片列表", "path": "/card", "key": "listCard", "parentKey": "list", "icon": "", "keepAlive": "false", "order": 5485 }, { "menu_id": 11, "title": "查询列表", "path": "/search", "key": "listSearch", "parentKey": "list", "icon": "", "keepAlive": "false", "order": 9588 }, { "menu_id": 6, "title": "基础表单", "path": "/index", "key": "formIndex", "parentKey": "from", "icon": "", "keepAlive": "false", "order": 9654 }, { "menu_id": 77, "title": "本地图标", "path": "/icons", "key": "icons", "parentKey": "", "icon": "icon_pen", "keepAlive": "true", "order": 9999 }, { "menu_id": 78, "title": "权限管理", "path": "/type", "key": "powerType", "parentKey": "power", "icon": "icon_setting", "keepAlive": "true", "order": 9999 }])
}

async function login() {
  const data = {
    "msg": "登录成功",
    "status": 0,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IuW8oOWQjOWtpiIsImFjY291bnQiOiJhZG1pbiIsInR5cGVfaWQiOjEsImlhdCI6MTY5MjM1NDE5MSwiZXhwIjoxNjkzNjUwMTkxfQ.3HIzoOSG-kMG5hWW64u-G7S7_teNZOtt5exbRyzRUg8",
    "data": {
      "user_id": 1,
      "username": "张同学",
      "account": "admin",
      "type_id": 1
    }
  }
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 500);
  })
}


let menu: MenuList = [
  {
    menu_id: 9,
    title: "列表页",
    path: "/list",
    key: "list",
    parentKey: "",
    icon: "icon_list",
    keepAlive: "false",
    order: 1,
  },
  {
    menu_id: 10,
    title: "卡片列表",
    path: "/card",
    key: "listCard",
    parentKey: "list",
    icon: "",
    keepAlive: "false",
    order: 5485,
  },
  {
    menu_id: 11,
    title: "查询列表",
    path: "/search",
    key: "listSearch",
    parentKey: "list",
    icon: "",
    keepAlive: "false",
    order: 9588,
  },
  {
    menu_id: 7,
    title: "表单页",
    path: "/form",
    key: "from",
    parentKey: "",
    icon: "icon_form",
    keepAlive: "false",
    order: 3,
  },
  {
    menu_id: 6,
    title: "基础表单",
    path: "/index",
    key: "formIndex",
    parentKey: "from",
    icon: "",
    keepAlive: "false",
    order: 9654,
  },
  {
    menu_id: 1,
    title: "详情页",
    path: "/details",
    key: "details",
    parentKey: "",
    icon: "icon_edit",
    keepAlive: "false",
    order: 3,
  },
  {
    menu_id: 2,
    title: "个人中心",
    path: "/person",
    key: "detailsPerson",
    parentKey: "details",
    icon: "icon_infopersonal",
    keepAlive: "false",
    order: 9998,
  },
  {
    menu_id: 16,
    title: "结果页",
    path: "/result",
    key: "result",
    parentKey: "",
    icon: "icon_voiceprint",
    keepAlive: "false",
    order: 4,
  },
  {
    menu_id: 3,
    title: "403",
    path: "/403",
    key: "error403",
    parentKey: "result",
    icon: "icon_locking",
    keepAlive: "false",
    order: 0,
  },
  {
    menu_id: 4,
    title: "404",
    path: "/404",
    key: "error404",
    parentKey: "result",
    icon: "icon_close",
    keepAlive: "false",
    order: 1,
  },
  {
    menu_id: 5,
    title: "500",
    path: "/500",
    key: "error500",
    parentKey: "result",
    icon: "icon_privacy_closed",
    keepAlive: "false",
    order: 4568,
  },
  {
    menu_id: 17,
    title: "统计",
    path: "/statistics",
    key: "statistics",
    parentKey: "",
    icon: "icon_MTR",
    keepAlive: "true",
    order: 5,
  },
  {
    menu_id: 18,
    title: "访客统计",
    path: "/visitor",
    key: "visitor",
    parentKey: "statistics",
    icon: "icon_addresslist",
    keepAlive: "true",
    order: 1,
  },
  {
    menu_id: 12,
    title: "权限管理",
    path: "/power",
    key: "power",
    parentKey: "",
    icon: "icon_set",
    keepAlive: "false",
    order: 9,
  },
  {
    menu_id: 14,
    title: "权限类别",
    path: "/type",
    key: "powerType",
    parentKey: "power",
    icon: "icon_safety",
    keepAlive: "true",
    order: 12,
  },
  {
    menu_id: 13,
    title: "菜单管理",
    path: "/menu",
    key: "powerMenu",
    parentKey: "power",
    icon: "icon_menu",
    keepAlive: "true",
    order: 1475,
  },
  {
    menu_id: 15,
    title: "用户管理",
    path: "/user",
    key: "powerUser",
    parentKey: "power",
    icon: "icon_infopersonal",
    keepAlive: "true",
    order: 1593,
  },
  {
    menu_id: 8,
    title: "图标库",
    path: "/icons",
    key: "icons",
    parentKey: "",
    icon: "icon_pen",
    keepAlive: "true",
    order: 10,
  },
];
const typeList = [
  {
    type_id: 1,
    name: "超级管理员",
    menu_id: "2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,1",
  },
  { type_id: 2, name: "用户", menu_id: "1,9,10,11,2,7,6,17,18,16,3,4,5,8" },
  { type_id: 3, name: "游客", menu_id: "9,1,10,11,2,7,6,17,18,12" },
  { type_id: 4, name: "低权游客", menu_id: "9,10" },
];
const power = {
  status: 0,
  data: typeList,
  mapKey: [
    { title: "权限id", dataIndex: "type_id", key: "type_id" },
    { title: "权限简称", dataIndex: "name", key: "name" },
    { title: "显示菜单列表id", dataIndex: "menu_id", key: "menu_id" },
  ],
  menu: formatMenu(menu),
};

const userInfo = {
  msg: "登录成功",
  status: 0,
  token: "12323",
  data: { user_id: 1, username: "超级管理员", account: "admin", type: "0", isLogin: true },
};

const addMenu = {
  msg: "添加成功,菜单栏需要关闭页面重新打开即可生效！",
  status: 0,
};
const addMsg = { msg: "添加成功", status: 0 };

const msgList: MessageList = [
  {
    m_id: 1,
    name: "第一条消息",
    description: "我创建的第一天消息",
    creator: "超级管理员",
    add_time: "2021-04-20 17:01:09",
  },
  {
    m_id: 2,
    name: "RegExp",
    description:
      "RegExp 对象表示正则表达式,它是对字符串执行模式匹配的强大工具。 ",
    creator: "超级管理员",
    add_time: "2021-04-20 17:48:42",
  },
  {
    m_id: 3,
    name: "Ant Design",
    description:
      "antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。",
    creator: "超级管理员",
    add_time: "2021-04-20 17:46:44",
  },
  {
    m_id: 4,
    name: "react-ant-admin",
    description:
      "此框架使用与二次开发，前端框架使用react，UI框架使用ant-design，全局数据状态管理使用redux，ajax使用库为axios。用于快速搭建中后台页面。",
    creator: "超级管理员",
    add_time: "2021-04-20 17:28:45",
  },
];
const msg: MessageAPi = {
  status: 0,
  data: {
    mapKey: [
      { title: "消息id", dataIndex: "m_id", key: "m_id" },
      { title: "消息名称", dataIndex: "name", key: "name" },
      { title: "消息描述词", dataIndex: "description", key: "description" },
      { title: "创建人", dataIndex: "creator", key: "creator" },
      { title: "创建时间", dataIndex: "add_time", key: "add_time" },
    ],
    list: msgList,
    total: 4,
  },

  msg: "",
};
const delMenu = { msg: "操作成功", status: 0 };

const MockData: MockDataType = {
  "/getmenu": formatMenu(menu),
  "/getpower": power,
  "/login": userInfo,
  "/addmenu": addMenu,
  "/addmessage": addMsg,
  "/getmessage": msg,
  "/delmenu": delMenu,
  "/getmenuinfo": { status: 0, msg: '', data: null },
  "/editmenuinfo": { status: 0, msg: "修改成功！" },
  "/getvisitordata": { status: 1, msg: "暂无" },
};
type UrlType = keyof MockDataType
function get(url: UrlType) {
  console.log('请求数据', url)
  if (url.indexOf('/menus') > -1) {
    return getMenuList()
  }
  return getMenu()
}



function post(url: UrlType, data: any = {}) {
  console.log('请求数据', url, data)
  return new Promise((res) => {
    setTimeout(() => {
      switch (url) {
        case "/login":
          userInfo.data.account = data.account;
          if (data.account.indexOf("admin") === -1) {
            userInfo.data.type = "1";
            userInfo.data.username = "普通用户";
          }
          return res(userInfo);
        case "/addmenu":
          menu.push(data);
          return res(MockData[url]);
        case "/addmessage":
          msgList.push({
            ...data,
            m_id: Math.random(),
            creator: userInfo.data.username,
            add_time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          });
          if (msg.data) {
            msg.data.total = msgList.length;
          }
          return res(MockData[url]);
        case "/delmenu":
          const newMenu: MenuItem[] = menu.filter((i) => i.key !== data.key);
          menu = newMenu.filter((i) => i.parentKey !== data.key);
          return res(MockData[url]);
        case "/getmenuinfo": {
          const findInfo = menu.find((i) => i.key === data.key);
          if (findInfo) {
            MockData[url].data = findInfo;
          }
          return res(MockData[url]);
        }
        case "/editmenuinfo":
          menu = menu.map((item) => {
            if (item.key === data.key) {
              return data;
            }
            return item;
          });
          return res(MockData[url]);
        case "/getmessage":
          let list: MessageItem[] = [...msgList];
          if (data.name) {
            list = list.filter((i) => i.name.includes(data.name));
          }
          if (data.description) {
            list = list.filter((i) => i.description.includes(data.description));
          }

          if (msg.data) {
            msg.data.total = list.length;
            msg.data.list = list;
          }
          return res(msg);
        default:
          res({});
          break;
      }
    }, 1000);
  }).then((res: any) => {
    return res
  });
}

async function put(data: any, data2: any) {
  console.log('请求数据', data, data2)
  return await delay({})
}
async function del(data: any) {
  console.log('请求数据', data)
  return await delay({})
}

const mock = {
  get,
  post,
  delete: del,
  put: put
};

export default mock;
