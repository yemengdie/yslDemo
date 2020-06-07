/**
 * @description: 请求过滤器
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-05-27 08:41:05
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-05 13:16:51
 */

import axios from "axios";
import qs from "qs";
import router from "@/router/index";
import { Message } from "element-ui";
//import { getToken } from "@/utils/auth";
import code from "@/code/code";

function showMessage(value) {
  return Message({
    showClose: true,
    message: value,
    type: "error",
    duration: 3500
  });
}

// create an axios instance
const service = axios.create({
  withCredentials: true,
  baseURL: process.env.VUE_APP_SERVER_API, // api 的 base_url
  timeout: 5000 // request timeout
});

service.interceptors.request.use(
  config => {
    // Do something before request is sent
    let params = {};

    // 让每个请求携带token-- ['token']为自定义key 请根据实际情况自行修改
    // if (getToken()) {
    //   config.headers["token"] = getToken();
    // }

    // for (let key in config.data) {
    //   params[key] = config.data[key]; //添加进参数列表
    // }

    //config.data = qs.stringify(params); //序列化
    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

// response interceptor（响应拦截器）
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data;
    // switch (res.code) {
    //   case code.success:
    //     break;
    //   case code.land_timeout: //用户登陆超时
    //     showMessage(res.code + ":" + "用户登陆超时");
    //     localStorage.setItem("sessionKey", "");
    //     router.push("/home");
    //     break;
    //   default:
    //     break;
    // }
    return response.data;
  },
  error => {
    showMessage("服务器响应失败");
    return Promise.reject(error);
  }
);

export default service;
