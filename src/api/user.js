import axios from '@/http/axios';

export const login = (data) => {
  return axios({
    url: '/vue2-cms-template/user/login',
    method: 'post',
    data
  })
}

export const logout = () => {
  return axios({
    url: '/vue2-cms-template/user/logout',
    method: 'post',
  })
}

export function getInfo(token) {
  return axios({
    url: '/vue2-cms-template/user/info',
    method: 'get',
    data: { token }
  })
}