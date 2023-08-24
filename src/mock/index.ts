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

async function getAdminGroup() {
  const data = {
    "data": [
      {
        "id": 6,
        "name": "选品运营",
        "editable": true,
        "is_system_group": 0,
        "created_at": "2021-06-08 13:53:27",
        "updated_at": "2021-06-08 13:53:27",
        "menus": [
          {
            "id": 14,
            "menu_id": 0,
            "label": "发单管理",
            "name": "Robots",
            "configure": {
              "icon": "robot"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:15:06",
            "updated_at": "2021-04-16 10:20:42",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 14,
              "created_at": "2021-06-08 13:53:27",
              "updated_at": "2021-06-08 13:53:27"
            }
          },
          {
            "id": 17,
            "menu_id": 14,
            "label": "商品列表",
            "name": "Products",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-03-26 03:53:35",
            "updated_at": "2021-05-07 09:55:55",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 17,
              "created_at": "2021-06-08 13:53:27",
              "updated_at": "2021-06-08 13:53:27"
            }
          },
          {
            "id": 18,
            "menu_id": 14,
            "label": "活动列表",
            "name": "Activities",
            "configure": {
              "icon": ""
            },
            "sort": 2,
            "editable": true,
            "created_at": "2021-03-26 03:55:09",
            "updated_at": "2021-05-07 09:56:20",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 18,
              "created_at": "2021-06-08 13:53:27",
              "updated_at": "2021-06-08 13:53:27"
            }
          },
          {
            "id": 19,
            "menu_id": 14,
            "label": "群发管理",
            "name": "ChatMessageTasks",
            "configure": {
              "icon": ""
            },
            "sort": 4,
            "editable": true,
            "created_at": "2021-03-27 00:26:59",
            "updated_at": "2021-05-07 18:33:16",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 19,
              "created_at": "2021-06-08 13:53:27",
              "updated_at": "2021-06-08 13:53:27"
            }
          },
          {
            "id": 36,
            "menu_id": 14,
            "label": "素材列表",
            "name": "Materials",
            "configure": {
              "icon": ""
            },
            "sort": 5,
            "editable": true,
            "created_at": "2021-04-21 17:27:51",
            "updated_at": "2021-05-08 16:53:36",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 36,
              "created_at": "2021-06-08 13:53:27",
              "updated_at": "2021-06-08 13:53:27"
            }
          },
          {
            "id": 52,
            "menu_id": 14,
            "label": "群发组管理",
            "name": "ChatMessageTaskGroups",
            "configure": {
              "icon": ""
            },
            "sort": 4,
            "editable": true,
            "created_at": "2021-06-04 20:00:55",
            "updated_at": "2021-06-04 20:01:04",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 52,
              "created_at": "2021-06-08 13:53:28",
              "updated_at": "2021-06-08 13:53:28"
            }
          },
          {
            "id": 37,
            "menu_id": 0,
            "label": "营销管理",
            "name": "ActivitySets",
            "configure": {
              "icon": "activity-sets"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-25 15:17:09",
            "updated_at": "2021-05-20 15:57:43",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 37,
              "created_at": "2021-06-11 14:00:48",
              "updated_at": "2021-06-11 14:00:48"
            }
          },
          {
            "id": 38,
            "menu_id": 37,
            "label": "广告位管理",
            "name": "ActivitySets",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-25 15:18:14",
            "updated_at": "2021-04-26 15:57:47",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 38,
              "created_at": "2021-06-11 14:00:48",
              "updated_at": "2021-06-11 14:00:48"
            }
          },
          {
            "id": 41,
            "menu_id": 45,
            "label": "热门搜索",
            "name": "HotWords",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-12 20:52:35",
            "updated_at": "2021-05-19 22:25:12",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 41,
              "created_at": "2021-06-11 14:00:48",
              "updated_at": "2021-06-11 14:00:48"
            }
          },
          {
            "id": 43,
            "menu_id": 45,
            "label": "同义词管理",
            "name": "Synonyms",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-17 11:55:18",
            "updated_at": "2021-05-19 22:25:04",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 43,
              "created_at": "2021-06-11 14:00:48",
              "updated_at": "2021-06-11 14:00:48"
            }
          },
          {
            "id": 45,
            "menu_id": 0,
            "label": "搜索管理",
            "name": "Search",
            "configure": {
              "icon": "search"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-19 22:22:54",
            "updated_at": "2021-05-20 15:57:08",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 45,
              "created_at": "2021-06-11 14:00:48",
              "updated_at": "2021-06-11 14:00:48"
            }
          },
          {
            "id": 46,
            "menu_id": 45,
            "label": "停用词管理",
            "name": "Stopwords",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-19 22:27:14",
            "updated_at": "2021-05-19 22:27:14",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 46,
              "created_at": "2021-06-11 14:00:48",
              "updated_at": "2021-06-11 14:00:48"
            }
          },
          {
            "id": 47,
            "menu_id": 37,
            "label": "朋友圈素材",
            "name": "Moments",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-21 19:16:25",
            "updated_at": "2021-05-21 19:16:25",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 47,
              "created_at": "2021-06-11 14:00:48",
              "updated_at": "2021-06-11 14:00:48"
            }
          },
          {
            "id": 48,
            "menu_id": 37,
            "label": "品牌评分",
            "name": "BrandAwareness",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-21 19:17:07",
            "updated_at": "2021-05-21 19:17:07",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 48,
              "created_at": "2021-06-11 14:00:48",
              "updated_at": "2021-06-11 14:00:48"
            }
          },
          {
            "id": 30,
            "menu_id": 14,
            "label": "机器人管理",
            "name": "Robots",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-04-16 10:25:09",
            "updated_at": "2021-05-08 16:53:15",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 30,
              "created_at": "2021-06-11 14:08:01",
              "updated_at": "2021-06-11 14:08:01"
            }
          },
          {
            "id": 51,
            "menu_id": 14,
            "label": "二维码管理",
            "name": "Qrcodes",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-06-01 21:31:06",
            "updated_at": "2021-06-01 21:31:06",
            "pivot": {
              "admin_group_id": 6,
              "menu_id": 51,
              "created_at": "2021-06-11 14:08:01",
              "updated_at": "2021-06-11 14:08:01"
            }
          }
        ]
      },
      {
        "id": 5,
        "name": "群运营",
        "editable": true,
        "is_system_group": 0,
        "created_at": "2021-06-02 16:39:09",
        "updated_at": "2021-06-02 16:39:09",
        "menus": [
          {
            "id": 11,
            "menu_id": 0,
            "label": "微信",
            "name": "ChatRooms",
            "configure": {
              "icon": "chat"
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-03-26 02:12:46",
            "updated_at": "2021-04-16 10:14:56",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 11,
              "created_at": "2021-06-02 16:39:09",
              "updated_at": "2021-06-02 16:39:09"
            }
          },
          {
            "id": 12,
            "menu_id": 11,
            "label": "群列表",
            "name": "ChatRooms",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:14:12",
            "updated_at": "2021-04-16 10:02:53",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 12,
              "created_at": "2021-06-02 16:39:09",
              "updated_at": "2021-06-02 16:39:09"
            }
          },
          {
            "id": 13,
            "menu_id": 11,
            "label": "群成员",
            "name": "ChatRoomFriends",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:14:24",
            "updated_at": "2021-04-16 10:03:04",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 13,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 14,
            "menu_id": 0,
            "label": "发单管理",
            "name": "Robots",
            "configure": {
              "icon": "robot"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:15:06",
            "updated_at": "2021-04-16 10:20:42",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 14,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 17,
            "menu_id": 14,
            "label": "商品列表",
            "name": "Products",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-03-26 03:53:35",
            "updated_at": "2021-05-07 09:55:55",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 17,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 18,
            "menu_id": 14,
            "label": "活动列表",
            "name": "Activities",
            "configure": {
              "icon": ""
            },
            "sort": 2,
            "editable": true,
            "created_at": "2021-03-26 03:55:09",
            "updated_at": "2021-05-07 09:56:20",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 18,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 19,
            "menu_id": 14,
            "label": "群发管理",
            "name": "ChatMessageTasks",
            "configure": {
              "icon": ""
            },
            "sort": 4,
            "editable": true,
            "created_at": "2021-03-27 00:26:59",
            "updated_at": "2021-05-07 18:33:16",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 19,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 21,
            "menu_id": 0,
            "label": "订单列表",
            "name": "Orders",
            "configure": {
              "icon": "order"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-29 19:56:14",
            "updated_at": "2021-04-15 23:43:21",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 21,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 22,
            "menu_id": 21,
            "label": "售后列表",
            "name": "AfterSales",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-14 14:04:50",
            "updated_at": "2021-04-16 10:27:37",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 22,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 24,
            "menu_id": 11,
            "label": "消息",
            "name": "Wechat",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-15 10:20:02",
            "updated_at": "2021-04-16 10:32:27",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 24,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 28,
            "menu_id": 11,
            "label": "踢人记录",
            "name": "KickLogs",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-15 18:05:44",
            "updated_at": "2021-04-16 10:27:13",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 28,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 30,
            "menu_id": 14,
            "label": "机器人管理",
            "name": "Robots",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-04-16 10:25:09",
            "updated_at": "2021-05-08 16:53:15",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 30,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 31,
            "menu_id": 21,
            "label": "订单列表",
            "name": "Orders",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-16 10:25:54",
            "updated_at": "2021-04-16 10:25:54",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 31,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 36,
            "menu_id": 14,
            "label": "素材列表",
            "name": "Materials",
            "configure": {
              "icon": ""
            },
            "sort": 5,
            "editable": true,
            "created_at": "2021-04-21 17:27:51",
            "updated_at": "2021-05-08 16:53:36",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 36,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 39,
            "menu_id": 11,
            "label": "聊天好友",
            "name": "ChatFriends",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-11 10:52:04",
            "updated_at": "2021-05-11 10:52:04",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 39,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 44,
            "menu_id": 21,
            "label": "运费宝列表",
            "name": "Otms",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-18 20:29:10",
            "updated_at": "2021-05-18 20:29:10",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 44,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 51,
            "menu_id": 14,
            "label": "二维码管理",
            "name": "Qrcodes",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-06-01 21:31:06",
            "updated_at": "2021-06-01 21:31:06",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 51,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          },
          {
            "id": 52,
            "menu_id": 14,
            "label": "群发组管理",
            "name": "ChatMessageTaskGroups",
            "configure": {
              "icon": ""
            },
            "sort": 4,
            "editable": true,
            "created_at": "2021-06-04 20:00:55",
            "updated_at": "2021-06-04 20:01:04",
            "pivot": {
              "admin_group_id": 5,
              "menu_id": 52,
              "created_at": "2021-06-11 14:09:00",
              "updated_at": "2021-06-11 14:09:00"
            }
          }
        ]
      },
      {
        "id": 4,
        "name": "营销运营",
        "editable": true,
        "is_system_group": 0,
        "created_at": "2021-05-27 10:55:02",
        "updated_at": "2021-06-02 16:40:22",
        "menus": [
          {
            "id": 14,
            "menu_id": 0,
            "label": "发单管理",
            "name": "Robots",
            "configure": {
              "icon": "robot"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:15:06",
            "updated_at": "2021-04-16 10:20:42",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 14,
              "created_at": "2021-05-27 10:55:02",
              "updated_at": "2021-05-27 10:55:02"
            }
          },
          {
            "id": 17,
            "menu_id": 14,
            "label": "商品列表",
            "name": "Products",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-03-26 03:53:35",
            "updated_at": "2021-05-07 09:55:55",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 17,
              "created_at": "2021-05-27 10:55:02",
              "updated_at": "2021-05-27 10:55:02"
            }
          },
          {
            "id": 18,
            "menu_id": 14,
            "label": "活动列表",
            "name": "Activities",
            "configure": {
              "icon": ""
            },
            "sort": 2,
            "editable": true,
            "created_at": "2021-03-26 03:55:09",
            "updated_at": "2021-05-07 09:56:20",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 18,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 19,
            "menu_id": 14,
            "label": "群发管理",
            "name": "ChatMessageTasks",
            "configure": {
              "icon": ""
            },
            "sort": 4,
            "editable": true,
            "created_at": "2021-03-27 00:26:59",
            "updated_at": "2021-05-07 18:33:16",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 19,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 30,
            "menu_id": 14,
            "label": "机器人管理",
            "name": "Robots",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-04-16 10:25:09",
            "updated_at": "2021-05-08 16:53:15",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 30,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 36,
            "menu_id": 14,
            "label": "素材列表",
            "name": "Materials",
            "configure": {
              "icon": ""
            },
            "sort": 5,
            "editable": true,
            "created_at": "2021-04-21 17:27:51",
            "updated_at": "2021-05-08 16:53:36",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 36,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 37,
            "menu_id": 0,
            "label": "营销管理",
            "name": "ActivitySets",
            "configure": {
              "icon": "activity-sets"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-25 15:17:09",
            "updated_at": "2021-05-20 15:57:43",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 37,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 38,
            "menu_id": 37,
            "label": "广告位管理",
            "name": "ActivitySets",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-25 15:18:14",
            "updated_at": "2021-04-26 15:57:47",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 38,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 41,
            "menu_id": 45,
            "label": "热门搜索",
            "name": "HotWords",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-12 20:52:35",
            "updated_at": "2021-05-19 22:25:12",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 41,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 43,
            "menu_id": 45,
            "label": "同义词管理",
            "name": "Synonyms",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-17 11:55:18",
            "updated_at": "2021-05-19 22:25:04",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 43,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 45,
            "menu_id": 0,
            "label": "搜索管理",
            "name": "Search",
            "configure": {
              "icon": "search"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-19 22:22:54",
            "updated_at": "2021-05-20 15:57:08",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 45,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 46,
            "menu_id": 45,
            "label": "停用词管理",
            "name": "Stopwords",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-19 22:27:14",
            "updated_at": "2021-05-19 22:27:14",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 46,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 47,
            "menu_id": 37,
            "label": "朋友圈素材",
            "name": "Moments",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-21 19:16:25",
            "updated_at": "2021-05-21 19:16:25",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 47,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 48,
            "menu_id": 37,
            "label": "品牌评分",
            "name": "BrandAwareness",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-21 19:17:07",
            "updated_at": "2021-05-21 19:17:07",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 48,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 51,
            "menu_id": 14,
            "label": "二维码管理",
            "name": "Qrcodes",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-06-01 21:31:06",
            "updated_at": "2021-06-01 21:31:06",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 51,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 52,
            "menu_id": 14,
            "label": "群发组管理",
            "name": "ChatMessageTaskGroups",
            "configure": {
              "icon": ""
            },
            "sort": 4,
            "editable": true,
            "created_at": "2021-06-04 20:00:55",
            "updated_at": "2021-06-04 20:01:04",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 52,
              "created_at": "2021-06-11 14:10:45",
              "updated_at": "2021-06-11 14:10:45"
            }
          },
          {
            "id": 21,
            "menu_id": 0,
            "label": "订单列表",
            "name": "Orders",
            "configure": {
              "icon": "order"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-29 19:56:14",
            "updated_at": "2021-04-15 23:43:21",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 21,
              "created_at": "2021-06-11 15:09:36",
              "updated_at": "2021-06-11 15:09:36"
            }
          },
          {
            "id": 22,
            "menu_id": 21,
            "label": "售后列表",
            "name": "AfterSales",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-14 14:04:50",
            "updated_at": "2021-04-16 10:27:37",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 22,
              "created_at": "2021-06-11 15:09:36",
              "updated_at": "2021-06-11 15:09:36"
            }
          },
          {
            "id": 31,
            "menu_id": 21,
            "label": "订单列表",
            "name": "Orders",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-16 10:25:54",
            "updated_at": "2021-04-16 10:25:54",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 31,
              "created_at": "2021-06-11 15:09:36",
              "updated_at": "2021-06-11 15:09:36"
            }
          },
          {
            "id": 44,
            "menu_id": 21,
            "label": "运费宝列表",
            "name": "Otms",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-18 20:29:10",
            "updated_at": "2021-05-18 20:29:10",
            "pivot": {
              "admin_group_id": 4,
              "menu_id": 44,
              "created_at": "2021-06-11 15:09:36",
              "updated_at": "2021-06-11 15:09:36"
            }
          }
        ]
      },
      {
        "id": 3,
        "name": "外部选品",
        "editable": true,
        "is_system_group": 0,
        "created_at": "2021-05-26 10:17:13",
        "updated_at": "2021-05-26 10:17:13",
        "menus": [
          {
            "id": 14,
            "menu_id": 0,
            "label": "发单管理",
            "name": "Robots",
            "configure": {
              "icon": "robot"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:15:06",
            "updated_at": "2021-04-16 10:20:42",
            "pivot": {
              "admin_group_id": 3,
              "menu_id": 14,
              "created_at": "2021-05-26 10:17:13",
              "updated_at": "2021-05-26 10:17:13"
            }
          },
          {
            "id": 17,
            "menu_id": 14,
            "label": "商品列表",
            "name": "Products",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-03-26 03:53:35",
            "updated_at": "2021-05-07 09:55:55",
            "pivot": {
              "admin_group_id": 3,
              "menu_id": 17,
              "created_at": "2021-05-26 10:17:13",
              "updated_at": "2021-05-26 10:17:13"
            }
          },
          {
            "id": 18,
            "menu_id": 14,
            "label": "活动列表",
            "name": "Activities",
            "configure": {
              "icon": ""
            },
            "sort": 2,
            "editable": true,
            "created_at": "2021-03-26 03:55:09",
            "updated_at": "2021-05-07 09:56:20",
            "pivot": {
              "admin_group_id": 3,
              "menu_id": 18,
              "created_at": "2021-05-26 10:17:13",
              "updated_at": "2021-05-26 10:17:13"
            }
          },
          {
            "id": 19,
            "menu_id": 14,
            "label": "群发管理",
            "name": "ChatMessageTasks",
            "configure": {
              "icon": ""
            },
            "sort": 4,
            "editable": true,
            "created_at": "2021-03-27 00:26:59",
            "updated_at": "2021-05-07 18:33:16",
            "pivot": {
              "admin_group_id": 3,
              "menu_id": 19,
              "created_at": "2021-05-26 10:17:13",
              "updated_at": "2021-05-26 10:17:13"
            }
          },
          {
            "id": 30,
            "menu_id": 14,
            "label": "机器人管理",
            "name": "Robots",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-04-16 10:25:09",
            "updated_at": "2021-05-08 16:53:15",
            "pivot": {
              "admin_group_id": 3,
              "menu_id": 30,
              "created_at": "2021-05-26 10:17:13",
              "updated_at": "2021-05-26 10:17:13"
            }
          },
          {
            "id": 36,
            "menu_id": 14,
            "label": "素材列表",
            "name": "Materials",
            "configure": {
              "icon": ""
            },
            "sort": 5,
            "editable": true,
            "created_at": "2021-04-21 17:27:51",
            "updated_at": "2021-05-08 16:53:36",
            "pivot": {
              "admin_group_id": 3,
              "menu_id": 36,
              "created_at": "2021-05-26 10:17:13",
              "updated_at": "2021-05-26 10:17:13"
            }
          }
        ]
      },
      {
        "id": 2,
        "name": "运营",
        "editable": true,
        "is_system_group": 0,
        "created_at": "2021-05-08 10:15:03",
        "updated_at": "2021-05-08 10:15:03",
        "menus": [
          {
            "id": 11,
            "menu_id": 0,
            "label": "微信",
            "name": "ChatRooms",
            "configure": {
              "icon": "chat"
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-03-26 02:12:46",
            "updated_at": "2021-04-16 10:14:56",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 11,
              "created_at": "2021-05-08 10:15:03",
              "updated_at": "2021-05-08 10:15:03"
            }
          },
          {
            "id": 12,
            "menu_id": 11,
            "label": "群列表",
            "name": "ChatRooms",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:14:12",
            "updated_at": "2021-04-16 10:02:53",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 12,
              "created_at": "2021-05-08 10:15:03",
              "updated_at": "2021-05-08 10:15:03"
            }
          },
          {
            "id": 13,
            "menu_id": 11,
            "label": "群成员",
            "name": "ChatRoomFriends",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:14:24",
            "updated_at": "2021-04-16 10:03:04",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 13,
              "created_at": "2021-05-11 09:58:13",
              "updated_at": "2021-05-11 09:58:13"
            }
          },
          {
            "id": 14,
            "menu_id": 0,
            "label": "发单管理",
            "name": "Robots",
            "configure": {
              "icon": "robot"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:15:06",
            "updated_at": "2021-04-16 10:20:42",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 14,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 15,
            "menu_id": 0,
            "label": "用户管理",
            "name": "Users",
            "configure": {
              "icon": "user"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-26 02:16:12",
            "updated_at": "2021-03-29 19:59:26",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 15,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 17,
            "menu_id": 14,
            "label": "商品列表",
            "name": "Products",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-03-26 03:53:35",
            "updated_at": "2021-05-07 09:55:55",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 17,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 18,
            "menu_id": 14,
            "label": "活动列表",
            "name": "Activities",
            "configure": {
              "icon": ""
            },
            "sort": 2,
            "editable": true,
            "created_at": "2021-03-26 03:55:09",
            "updated_at": "2021-05-07 09:56:20",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 18,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 19,
            "menu_id": 14,
            "label": "群发管理",
            "name": "ChatMessageTasks",
            "configure": {
              "icon": ""
            },
            "sort": 4,
            "editable": true,
            "created_at": "2021-03-27 00:26:59",
            "updated_at": "2021-05-07 18:33:16",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 19,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 21,
            "menu_id": 0,
            "label": "订单列表",
            "name": "Orders",
            "configure": {
              "icon": "order"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-03-29 19:56:14",
            "updated_at": "2021-04-15 23:43:21",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 21,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 22,
            "menu_id": 21,
            "label": "售后列表",
            "name": "AfterSales",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-14 14:04:50",
            "updated_at": "2021-04-16 10:27:37",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 22,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 24,
            "menu_id": 11,
            "label": "消息",
            "name": "Wechat",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-15 10:20:02",
            "updated_at": "2021-04-16 10:32:27",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 24,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 25,
            "menu_id": 26,
            "label": "提现申请",
            "name": "Withdrawals",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-15 16:59:23",
            "updated_at": "2021-04-16 10:27:41",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 25,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 26,
            "menu_id": 0,
            "label": "财务管理",
            "name": "Withdrawals",
            "configure": {
              "icon": "finance"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-15 17:13:25",
            "updated_at": "2021-05-20 15:58:09",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 26,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 27,
            "menu_id": 26,
            "label": "佣金明细",
            "name": "UserIncomes",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-15 17:13:40",
            "updated_at": "2021-04-16 10:17:27",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 27,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 28,
            "menu_id": 11,
            "label": "踢人记录",
            "name": "KickLogs",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-15 18:05:44",
            "updated_at": "2021-04-16 10:27:13",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 28,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 29,
            "menu_id": 15,
            "label": "用户列表",
            "name": "Users",
            "configure": {
              "icon": ""
            },
            "sort": 3,
            "editable": true,
            "created_at": "2021-04-16 10:23:14",
            "updated_at": "2021-05-07 09:56:39",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 29,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 30,
            "menu_id": 14,
            "label": "机器人管理",
            "name": "Robots",
            "configure": {
              "icon": ""
            },
            "sort": 1,
            "editable": true,
            "created_at": "2021-04-16 10:25:09",
            "updated_at": "2021-05-08 16:53:15",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 30,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 31,
            "menu_id": 21,
            "label": "订单列表",
            "name": "Orders",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-16 10:25:54",
            "updated_at": "2021-04-16 10:25:54",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 31,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 33,
            "menu_id": 26,
            "label": "余额明细",
            "name": "UserBalances",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-17 11:30:36",
            "updated_at": "2021-04-17 14:57:02",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 33,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 34,
            "menu_id": 26,
            "label": "爱库存资金流水",
            "name": "AkcTransactions",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-20 13:55:50",
            "updated_at": "2021-04-20 13:55:50",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 34,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 35,
            "menu_id": 26,
            "label": "资金流水",
            "name": "Transactions",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-20 13:56:04",
            "updated_at": "2021-04-20 15:28:59",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 35,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 36,
            "menu_id": 14,
            "label": "素材列表",
            "name": "Materials",
            "configure": {
              "icon": ""
            },
            "sort": 5,
            "editable": true,
            "created_at": "2021-04-21 17:27:51",
            "updated_at": "2021-05-08 16:53:36",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 36,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 37,
            "menu_id": 0,
            "label": "营销管理",
            "name": "ActivitySets",
            "configure": {
              "icon": "activity-sets"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-25 15:17:09",
            "updated_at": "2021-05-20 15:57:43",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 37,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 38,
            "menu_id": 37,
            "label": "广告位管理",
            "name": "ActivitySets",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-04-25 15:18:14",
            "updated_at": "2021-04-26 15:57:47",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 38,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 39,
            "menu_id": 11,
            "label": "聊天好友",
            "name": "ChatFriends",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-11 10:52:04",
            "updated_at": "2021-05-11 10:52:04",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 39,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 41,
            "menu_id": 45,
            "label": "热门搜索",
            "name": "HotWords",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-12 20:52:35",
            "updated_at": "2021-05-19 22:25:12",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 41,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 43,
            "menu_id": 45,
            "label": "同义词管理",
            "name": "Synonyms",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-17 11:55:18",
            "updated_at": "2021-05-19 22:25:04",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 43,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 44,
            "menu_id": 21,
            "label": "运费宝列表",
            "name": "Otms",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-18 20:29:10",
            "updated_at": "2021-05-18 20:29:10",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 44,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 45,
            "menu_id": 0,
            "label": "搜索管理",
            "name": "Search",
            "configure": {
              "icon": "search"
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-19 22:22:54",
            "updated_at": "2021-05-20 15:57:08",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 45,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 46,
            "menu_id": 45,
            "label": "停用词管理",
            "name": "Stopwords",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-19 22:27:14",
            "updated_at": "2021-05-19 22:27:14",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 46,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 47,
            "menu_id": 37,
            "label": "朋友圈素材",
            "name": "Moments",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-21 19:16:25",
            "updated_at": "2021-05-21 19:16:25",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 47,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 48,
            "menu_id": 37,
            "label": "品牌评分",
            "name": "BrandAwareness",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-21 19:17:07",
            "updated_at": "2021-05-21 19:17:07",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 48,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 50,
            "menu_id": 15,
            "label": "页面日志",
            "name": "MiniProgramLog",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-05-30 13:09:29",
            "updated_at": "2021-05-30 13:09:29",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 50,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 51,
            "menu_id": 14,
            "label": "二维码管理",
            "name": "Qrcodes",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-06-01 21:31:06",
            "updated_at": "2021-06-01 21:31:06",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 51,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 52,
            "menu_id": 14,
            "label": "群发组管理",
            "name": "ChatMessageTaskGroups",
            "configure": {
              "icon": ""
            },
            "sort": 4,
            "editable": true,
            "created_at": "2021-06-04 20:00:55",
            "updated_at": "2021-06-04 20:01:04",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 52,
              "created_at": "2021-06-11 14:12:44",
              "updated_at": "2021-06-11 14:12:44"
            }
          },
          {
            "id": 32,
            "menu_id": 0,
            "label": "数据中心",
            "name": "Dashboard",
            "configure": {
              "icon": "order"
            },
            "sort": 2,
            "editable": true,
            "created_at": "2021-04-16 10:51:47",
            "updated_at": "2021-04-16 10:56:59",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 32,
              "created_at": "2021-06-11 14:14:48",
              "updated_at": "2021-06-11 14:14:48"
            }
          },
          {
            "id": 54,
            "menu_id": 26,
            "label": "好衣库资金流水",
            "name": "HykTransactions",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-06-25 23:34:19",
            "updated_at": "2021-06-25 23:34:19",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 54,
              "created_at": "2021-07-08 15:35:20",
              "updated_at": "2021-07-08 15:35:20"
            }
          },
          {
            "id": 53,
            "menu_id": 26,
            "label": "唯品会资金流水",
            "name": "WphTransactions",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-06-16 22:33:56",
            "updated_at": "2021-06-16 22:33:56",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 53,
              "created_at": "2021-08-27 17:07:38",
              "updated_at": "2021-08-27 17:07:38"
            }
          },
          {
            "id": 55,
            "menu_id": 26,
            "label": "开放平台资金流水",
            "name": "MoneyLogs",
            "configure": {
              "icon": ""
            },
            "sort": 0,
            "editable": true,
            "created_at": "2021-08-06 19:41:05",
            "updated_at": "2021-08-06 19:41:05",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 55,
              "created_at": "2021-08-27 17:07:38",
              "updated_at": "2021-08-27 17:07:38"
            }
          },
          {
            "id": 57,
            "menu_id": 61,
            "label": "淘特列表",
            "name": "taotes",
            "configure": {
              "icon": ""
            },
            "sort": 2,
            "editable": true,
            "created_at": "2022-01-06 14:44:08",
            "updated_at": "2023-03-16 10:37:15",
            "pivot": {
              "admin_group_id": 2,
              "menu_id": 57,
              "created_at": "2022-01-10 14:03:08",
              "updated_at": "2022-01-10 14:03:08"
            }
          }
        ]
      },
      {
        "id": 1,
        "name": "超级管理员组",
        "editable": false,
        "is_system_group": 1,
        "created_at": "2021-04-29 16:31:26",
        "updated_at": "2021-04-29 16:31:26",
        "menus": []
      }
    ],
    "links": {
      "first": "https://qgg-admin-api.quxiaotao.com/admin_groups?page=1",
      "last": "https://qgg-admin-api.quxiaotao.com/admin_groups?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "path": "https://qgg-admin-api.quxiaotao.com/admin_groups",
      "per_page": "10",
      "to": 6,
      "total": 6
    }
  }
  return await delay(data)
}

function get(url: string) {
  const arr = url.split('?')

  console.log('请求数据', arr[0], parse(arr[1] || '{}'))
  if (url.indexOf('/menus') > -1) {
    return getMenuList()
  }
  if (url.indexOf('/admin_groups') > -1) {
    return getAdminGroup
  }
}

async function post(url: string, data: any = {}) {
  console.log('请求数据', url, data)
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
