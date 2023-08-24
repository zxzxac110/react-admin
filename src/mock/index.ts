import dayjs from "dayjs";
import { message } from "antd";
import { formatMenu } from "@/utils";
import { parse } from 'qs'
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
        "id": 1,
        "menu_id": "",
        "path": "",
        "type": 1,
        "label": "表单页",
        "key": "from",
        "icon": "icon_form",
        "sort": 3,
        "editable": true,
        "children": [
          {
            "id": 11,
            "menu_id": 1,
            "path": "/from/index",
            "type": 1,
            "label": "基础表单",
            "key": "formIndex",
            "icon": "",
            "sort": 9654,
            "editable": true
          }
        ],
        create_time: "2023-08-01 11:45:04",
      },
      {
        "id": 2,
        "menu_id": "",
        "path": "",
        "type": 1,
        "label": "详情页",
        "key": "details",
        "icon": "icon_edit",
        "sort": 3,
        "editable": true,
        "children": [
          {
            "id": 299,
            "menu_id": 2,
            "path": "/details/person",
            "type": 1,
            "label": "个人中心",
            "key": "detailsPerson",
            "icon": "icon_github",
            "sort": 1,
            "editable": true
          }
        ]
      },
      {
        "id": 3,
        "menu_id": "",
        "type": 1,
        "label": "结果页",
        "key": "result",
        "icon": "icon_voiceprint",
        "sort": 4,
        "editable": true,
        "children": [
          {
            "id": 33,
            "menu_id": 3,
            "path": "/result/403",
            "type": 1,
            "label": "403",
            "key": "error403",
            "icon": "icon_locking",
            "sort": 0,
            "editable": true
          },
          {
            "id": 34,
            "menu_id": 3,
            "path": "/result/404",
            "type": 1,
            "label": "404",
            "key": "error404",
            "icon": "icon_close",
            "sort": 1,
            "editable": true
          },
          {
            "id": 35,
            "menu_id": 3,
            "path": "/result/500",
            "type": 1,
            "label": "500",
            "key": "error500",
            "icon": "icon_privacy_closed",
            "sort": 4568,
            "editable": true
          }
        ]
      },
      {
        "id": 4,
        "menu_id": "",
        "type": 1,
        "label": "统计",
        "key": "statistics",
        "icon": "icon_MTR",
        "sort": 5,
        "editable": true,
        "children": [
          {
            "id": 40,
            "menu_id": 4,
            "path": "/statistics/feedback",
            "type": 1,
            "label": "反馈统计",
            "key": "feedback",
            "icon": "icon_feeding",
            "sort": 1,
            "editable": true
          },
          {
            "id": 48,
            "menu_id": 4,
            "path": "/statistics/visitor",
            "type": 1,
            "label": "访客统计",
            "key": "visitor",
            "icon": "icon_addresslist",
            "sort": 1,
            "editable": true
          }
        ]
      },
      {
        "id": 5,
        "menu_id": "",
        "type": 1,
        "label": "系统设置",
        "key": "power",
        "icon": "icon_set",
        "sort": 9,
        "editable": true,
        "children": [
          {
            "id": 53,
            "menu_id": 5,
            "type": 1,
            "label": "例子",
            "key": "setDome",
            "path": "/set/dome",
            "icon": "icon_menu",
            "sort": 1475,
            "editable": true
          },
          {
            "id": 53,
            "menu_id": 5,
            "type": 1,
            "label": "菜单管理",
            "key": "powerMenu",
            "path": "/set/menu",
            "icon": "icon_menu",
            "sort": 1475,
            "editable": true
          },
          {
            "id": 55,
            "menu_id": 5,
            "type": 1,
            "label": "用户管理",
            "key": "powerUser",
            "path": "/power/menu",
            "icon": "icon_infopersonal",
            "sort": 1593,
            "editable": true
          },
          {
            "id": 555,
            "menu_id": 5,
            "path": "/list/card",
            "type": 1,
            "label": "卡片列表",
            "key": "listCard",
            "icon": "",
            "sort": 5485,
            "editable": true,
            "children": [
              {
                "id": 55555,
                "menu_id": 555,
                "path": "/power/type",
                "type": 1,
                "label": "权限管理",
                "key": "powerType",
                "icon": "icon_setting",
                "sort": 9999,
                "editable": true
              }
            ]
          },
          {
            "id": 5555,
            "menu_id": 5,
            "path": "/list/search",
            "type": 1,
            "label": "查询列表",
            "key": "listSearch",
            "icon": "",
            "sort": 9588,
            "editable": true
          }
        ]
      },
      {
        "id": 6,
        "menu_id": "",
        "path": "/icons",
        "type": 1,
        "label": "本地图标666",
        "key": "icons",
        "icon": "icon_pen",
        "sort": 9999,
        "editable": true
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
    },
    "maps": {
      "types": [
        "红色",
        "蓝色"
      ],
      "mode": {
        "qq": "QQ",
        "weixin": "微信"
      },
    }
  }
  return await delay(data)
}
async function getMenu() {
  return await delay([])
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

let menu = []
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
function get(url: string) {
  const arr = url.split('?')

  console.log('请求数据', arr[0], parse(arr[1] || '{}'))
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
