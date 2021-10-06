import { request } from 'umi';

export const signIn = async (data: API.SingInParams, options?: any) =>
  request('/api/login', {
    data,
    method: 'post',
    ...options,
  });

export const getMenus = async () => request('/api/menus');
