import http from "@/plugins/http";
import mock from "../mock/index";
import { stringify } from 'qs'

const request = import.meta.env.VITE_APP_MOCK === "1" ? mock : http;
const url = 'api/react-ant-admin'

export const getMenu = () => request.get(url + "/getmenu") as Promise<MenuResponse>
export const login = (data: any) => request.post(url + "/login", data) as Promise<LoginApi>
export const getMenuList = (data: any) => request.get('/menus?' + stringify(data)) as Promise<Record<string, any>>
export const editMenu = (id: number, data: Record<string, any>) => request.put(`/menus/${id}`, data) as Promise<Record<string, any>>
export const delMenu = (id: number) => request.delete(`/menus/${id}`) as Promise<Record<string, any>>
export const addMenu = (data: Record<string, any>) => request.post('/menus', data) as Promise<Record<string, any>>