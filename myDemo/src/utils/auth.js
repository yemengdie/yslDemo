/**
 * @description: 对储存在cookies里面的token的设置、获取、删除方法
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-05-31 17:22:06
 * @LastAuthor: lizlong
 * @lastTime: 2019-07-08 09:34:37
 */

import Cookies from 'js-cookie'

const TokenKey = 'token'
//const user = 'username'

export function getToken() {

  return Cookies.get(TokenKey)
}
// export function getUserName() {
//   return Cookies.get(user)
// }
// export function setUserName() {
//   return Cookies.set(user, username)
// }

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}