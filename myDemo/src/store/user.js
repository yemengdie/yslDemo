import {
    setToken,
    removeToken,
    setUserName
} from "@/utils/auth";
import {
    userLogin,
    userLogout,
    userRegister,
    getPerms
} from "@/api/land.js";
import {
    Encrypt
} from "@/utils/aes.js";
import code from "@/code/code";
// import { setUserName } from "../utils/auth";
const user = {
    state: {
        token: null,
        username: ""
    },
    mutations: {
        token: (state, data) => {
            console.log(data)
            setToken(data); //将token存进cookies
            localStorage.setItem("token", data); //将token存进localStorage
            // state.localLanguage = "zh";
            // localStorage.setItem("localLanguage", "zh");
            // setUserName(data.user)
            localStorage.setItem("username", data)
            // state.user = data.user;
        },
        username: (state, data) => {
            console.log("oooooooooooooooooo")
            console.log(data)
            localStorage.username = data;
            state.username = data
            localStorage.setItem("username", data)
        },
        //取消路由，清空数据
        CLEAR_ROUTERS: state => {
            console.log(state)
            localStorage.setItem("token", ""); //清除localStorage里面的token
            localStorage.setItem("username", "");
            removeToken(); //清除cookies里面的token
        },
    },
    actions: {
        //应用mutaions
        userLogin({
            commit
        }, data) {
            //登录异步操作
            let phone = data.phone;
            // let password = Encrypt(
            //     data.password,
            //     process.env.VUE_APP_aesKey,
            //     process.env.VUE_APP_ivKey
            // ); //加密
            let password = data.password
            console.log(phone);
            console.log(password);
            return new Promise((resolve, reject) => {
                userLogin({
                    phone: phone,
                    password: password
                })
                    .then(res => {
                        console.log(res)
                        if (res.code == code.success) {
                            commit("token", res.data); //将返回的sessionKey存起来
                        }
                        resolve(res);
                    })
                    .catch(err => {
                        console.log(err);
                        reject(false);
                    });
            });
        },
        userRegister({
            commit
        }, data) {
            //登录异步操作
            let phone = data.phone;
            let user = data.user;
            // let password = Encrypt(
            //     data.password,
            //     process.env.VUE_APP_aesKey,
            //     process.env.VUE_APP_ivKey
            // ); //加密
            let password = data.password
            console.log(phone);
            console.log(password);
            return new Promise((resolve, reject) => {
                userRegister({
                    phone: phone,
                    password: password,
                    user: user
                })
                    .then(res => {
                        console.log(res)
                        if (res.code == code.success) {
                            commit("token", res.data); //将返回的sessionKey存起来
                        }
                        resolve(res);
                    })
                    .catch(err => {
                        console.log(err);
                        reject(false);
                    });
            });
        },

        loginOut({
            commit
        }) {
            return new Promise((resolve, reject) => {
                userLogout()
                    .then(res => {
                        if (res.code == code.success) {
                            commit("CLEAR_ROUTERS");
                        }
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

    }
}
export default user;