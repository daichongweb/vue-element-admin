import axios from 'axios'
import Qs from 'qs'
import { Message, MessageBox } from 'element-ui'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://www.test.local', // api的base_url
    timeout: 15000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
})

// request拦截器
service.interceptors.request.use(config => {
    // if (store.getters.token) {
    //     config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    config.data = Qs.stringify(config.data);
    return config;
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
        * code为非200是抛错 可结合自己业务进行修改
        */
        const res = response.data
        if (res.code !== 200) {
            Message({
                message: res.message,
                type: 'error',
                duration: 3 * 1000
            })

            // 401:未登录;
            if (res.code === 401 || res.code === 403) {
                MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload()// 为了重新实例化vue-router对象 避免bug
                    })
                })
            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
