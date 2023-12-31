import http from "@/plugins/http";
import mock from "../mock/index";
import { stringify } from 'qs'

const request = import.meta.env.VITE_APP_MOCK === "1" ? mock : http;
console.log(import.meta.env.VITE_APP_MOCK)

//
export function getUserInfo(data?: Record<string, any>) { return request.get(`/show${stringify(data)}`,) }
export function login(data?: Record<string, any>) { return request.post(`login`, data) as Promise<Record<string, any>> }
export function smsCode(data?: Record<string, any>) { return request.post(`sms_code`, data) as Promise<Record<string, any>> }
// 菜单
export const getMenuList = (data: any) => request.get('/menus?' + stringify(data)) as Promise<Record<string, any>>
export const editMenu = (id: number, data: Record<string, any>) => request.put(`/menus/${id}`, data) as Promise<Record<string, any>>
export const delMenu = (id: number) => request.delete(`/menus/${id}`) as Promise<Record<string, any>>
export const addMenu = (data: Record<string, any>) => request.post('/menus', data) as Promise<Record<string, any>>
// 管理员组 - 权限
export const getAdminGroup = (data: any) => request.get('/admin_groups?' + stringify(data)) as Promise<Record<string, any>>
export const editAdminGroup = (id: number, data: Record<string, any>) => request.put(`/admin_groups/${id}`, data) as Promise<Record<string, any>>
export const delAdminGroup = (id: number) => request.delete(`/admin_groups/${id}`) as Promise<Record<string, any>>
export const addAdminGroup = (data: Record<string, any>) => request.post('/admin_groups', data) as Promise<Record<string, any>>