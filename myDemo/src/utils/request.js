import axios from 'axios';
import qs from "qs";
import router from "@/router/index";
import { Message } from "element-ui";
import { getToken } from "@/utils/auth";
import code from "@/code/code";
const service = axios.create({
    baseURL: process.env.VUE_APP_SERVER_API,
    timeout: 10000
})

function showMessage(value) {
    return Message({
        showClose: true,
        message: value,
        type: "error",
        duration: 3500
    });
}
// request 拦截器
service.interceptors.request.use(

    config => {

        // 这里可以自定义一些config 配置
        let params = {};

        // 让每个请求携带token-- ['token']为自定义key 请根据实际情况自行修改
        if (getToken()) {
            config.headers["token"] = getToken();
            console.log(getToken())
        }
        console.log(config)
        for (let key in config.data) {
            params[key] = config.data[key]; //添加进参数列表
        }

        config.data = qs.stringify(params); //序列化
        return config
    },
    error => {
        //  这里处理一些请求出错的情况

        Promise.reject(error)
    }
)


// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res)
        // 这里处理一些response 正常放回时的逻辑
        switch (res.code) {
            case code.success:
                break;
            case code.land_timeout: //用户登陆超时
                showMessage(res.code + ":" + "用户登陆超时");
                localStorage.setItem("sessionKey", "");
                router.push("/login");
                break;
            default:
                break;
        }
        return res
    },
    error => {
        // 这里处理一些response 出错时的逻辑

        return Promise.reject(error)
    }
)

export default service