import http from "@/plugins/http";
import mock from "../mock/index";

const request = import.meta.env.REACT_APP_MOCK === "1" ? mock : http;
const url = 'api/react-ant-admin'

//
export function getFunList() { return request.post('/factor/get_fun_list') as Promise<Record<string, any>> }


// 
const getMenu = () => request.get(url + "/getmenu") as Promise<MenuResponse>;
const getMenuList = () => request.get(url + "/getmenulist") as Promise<MenuListResponse>;
const login = (data: any) => request.post(url + "/login", data) as Promise<LoginApi>;
const addMenu = (data: any) => request.post(url + "/addmenu", data) as Promise<ResponseData>;
const addMsg = (data: any) => request.post(url + "/addmessage", data) as Promise<ResponseData>;
const getMsg = (data: any) => request.get(url + "/getmessage", data) as Promise<MessageAPi>;
const getPower = () => request.get(url + "/getpower") as Promise<PowerApi>;
const delMenu = (data: any) => request.post(url + "/delmenu", data) as Promise<ResponseData>;
const getMenuInfo = (data: any) => request.get(url + "/getmenuinfo", data) as Promise<MenuInfoApi>;
const editMenu = (data: any) => request.post(url + "/editmenuinfo", data) as Promise<ResponseData>;
const getVisitorList = (data: any) => request.get(url + "/getiplist", data) as Promise<VisitorListApi>;
const getVisitorData = () => request.get(url + "/getvisitordata") as Promise<VisitorApi>;
const getUserList = (data: any) => request.get(url + "/getuserlist", data) as Promise<UserListApi>;
const addUser = (data: any) => request.post(url + "/adduserinfo", data) as Promise<ResponseData>;
const getUser = (data: any) => request.get(url + "/getuserinfo", data) as Promise<ResponseData & { data: ResponseUserInfo }>;
const editUser = (data: any) => request.post(url + "/edituserinfo", data) as Promise<ResponseData>;
const editType = (data: any) => request.post(url + "/edittype", data) as Promise<ResponseData>;
const addType = (data: any) => request.post(url + "/addtype", data) as Promise<ResponseData>;
export const getFeedBack = (data: any) => request.post(url + "/getfeedback", data) as Promise<ResponseData>;
export const reply = (data: any) => request.post(url + "/reply", data) as Promise<ResponseData>;
export {
  getMenu,
  login,
  addMenu,
  addMsg,
  getMsg,
  getPower,
  delMenu,
  getMenuInfo,
  editMenu,
  getVisitorList,
  getVisitorData,
  getUserList,
  addUser,
  getUser,
  editUser,
  editType,
  addType,
  getMenuList
};
