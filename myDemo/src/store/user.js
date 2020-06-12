const user = {
    state: {
        token: null,
        username: ""
    },
    mutations: {
        token: (state, data) => {
            localStorage.token = data;
            state.token = data
            localStorage.setItem("token", data)
        },
        username: (state, data) => {
            localStorage.username = data;
            state.username = data
            localStorage.setItem("username", data)
        }
    }
}
export default user;