import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import {showFullScreenLoading, tryHideFullScreenLoading} from '@/utils/loading'
import store from '@/store'
import {baseUrl} from '@/config/index'

import {
    getToken,
} from '@/utils/auth'
// import { baseUrl } from '@/utils/baseurl'
// create an axios instance
const base = process.env.NODE_ENV == 'development' ? '/zcbg' : baseUrl
console.log(base, 'base-------')
const service = axios.create({
    baseURL: base, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 100000 // request timeout  //请求超时
})

// request interceptor
service.interceptors.request.use(
    config => {
        config.headers['token'] = getToken()
        // do something before request is sent
        if (config.headers.isLoading !== false) {
            // 如果配置了isLoading: false，则不显示loading
            showFullScreenLoading()
        }
        if (store.getters.token) {
            config.headers['token'] = getToken()
        }
        return config
    },
    error => {
        // do something with request error
        tryHideFullScreenLoading()
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        tryHideFullScreenLoading()
        const res = response.data
        if (res.code !== 0) { // 修改为后端返回的成功状态码
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log(error, 'error-request')
        Message({
            message: '内部错误，请联系管理员',
            type: 'error',
            duration: 5 * 1000
        })
        tryHideFullScreenLoading()
        return Promise.reject(error)
    }
)

export default service