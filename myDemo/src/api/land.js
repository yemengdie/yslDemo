import request from '@/utils/request'
import api from '@/api/api';

// 用户登陆
export function userLogin(data) {
    return request({
        url: api.userLogin,
        method: 'post',
        data
    })
}
// 用户登陆
export function userRegister(data) {
    return request({
        url: api.userRegister,
        method: 'post',
        data
    })
}

// 退出登陆
export function userLogout(data) {
    return request({
        url: api.userLoginout,
        method: 'get',
        params: data
    })
}

// 退出登陆
export function getPerms(data) {
    return request({
        url: api.getPerms,
        method: 'get',
        params: data
    })
}