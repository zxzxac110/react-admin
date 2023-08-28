import { parse } from 'qs'
function delay(data: Record<string, any>) {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 500);
  })
}

async function getMenuList() {
  const data = {
    "data": [{
      "id": 2,
      "menu_id": "",
      "path": "",
      "type": 1,
      "label": "详情页",
      "key": "details",
      "icon": "icon_edit",
      "sort": 3,
      "editable": true,
      create_time: "2023-08-01 11:45:04",
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
          "id": 51,
          "menu_id": 5,
          "type": 1,
          "label": "例子",
          "key": "setDome",
          "path": "/set/dome",
          "icon": "icon_menu",
          "sort": 1475,
          "keepAlive": true,
          "editable": true
        },
        {
          "id": 52,
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
          "id": 53,
          "menu_id": 5,
          "type": 1,
          "label": "权限管理",
          "key": "role",
          "path": "/set/role",
          "icon": "icon_menu",
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
          "icon": "icon_menu",
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
      ]
    },
    {
      "id": 6,
      "menu_id": "",
      "path": "/icons",
      "type": 1,
      "label": "本地图标",
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

async function getAdminGroup() {
  const res = await getMenuList()
  const menuList = res.data
  const menuList2 = JSON.parse(JSON.stringify(menuList))
  menuList2.splice(0, 1)
  const menuList3 = menuList.slice(0, -1)
  menuList3[3].children.splice(0, 2)
  const data = {
    "data": [
      {
        "id": 3,
        "name": "外部选品",
        "editable": true,
        "is_system_group": 0,
        "created_at": "2021-05-26 10:17:13",
        "updated_at": "2021-05-26 10:17:13",
        "menus": menuList2.slice(0, -1)
      },
      {
        "id": 6,
        "name": "选品运营",
        "editable": true,
        "is_system_group": 0,
        "created_at": "2021-06-08 13:53:27",
        "updated_at": "2021-06-08 13:53:27",
        "menus": menuList2
      },
      {
        "id": 2,
        "name": "运营",
        "editable": true,
        "is_system_group": 0,
        "created_at": "2021-05-08 10:15:03",
        "updated_at": "2021-05-08 10:15:03",
        "menus": menuList3
      },
      {
        "id": 1,
        "name": "超级管理员组",
        "editable": false,
        "is_system_group": 1,
        "created_at": "2021-04-29 16:31:26",
        "updated_at": "2021-04-29 16:31:26",
        "menus": menuList
      }
    ],
    "links": {
      "first": "https://o.com/admin_groups?page=1",
      "last": "https://o.com/admin_groups?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "path": "https://o.com/admin_groups",
      "per_page": "10",
      "to": 6,
      "total": 6
    }
  }
  return delay(data)
}

async function login() {
  const data = {
    "message": "未注册禁止登陆",
    "errors": [],
    "code": 422
  }
  return delay({
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcXVhbnRhLWFwaS5xaW5iYW93YW4uY24vbG9naW4iLCJpYXQiOjE2OTI5NDI1OTQsImV4cCI6MTc0NDc4MjU5NCwibmJmIjoxNjkyOTQyNTk0LCJqdGkiOiJmZzAxQ2FKU3pvbFZXa1ZJIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.DJktp-zAUbKeLfzZGYxC-0GREk6HvIHh3QXN6rTcC2c",
    "token_type": "bearer",
    "expires_in": 51840000
  })
}


async function getUserInfo() {
  const data = {
    "id": 12,
    "account": '账号',
    "type": '',
    "name": "自行车",
    "mobile": "188***32",
  }
  return delay(data)
}

function get(url: string) {
  const arr = url.split('?')

  console.log('请求数据', arr[0], parse(arr[1] || '{}'))
  if (url.indexOf('/menus') > -1) {
    return getMenuList()
  } else if (url.indexOf('/admin_groups') > -1) {
    return getAdminGroup()
  } else if (url.indexOf('show') > -1) {
    return getUserInfo()
  }
}

async function post(url: string, data: any = {}) {
  console.log('请求数据', url, data)
  if (url.indexOf('login') > -1) {
    return login()
  }
  return await delay({})
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
