import request from '@/api/http'
export function getUserList(params, data = {}) {
    return request({
        url: '/index.php',
        method: 'post',
        params: params,
        data: data
    })
}
export function delUser(params, data = {}) {
    return request({
        url: '/index.php',
        method: 'post',
        params: params,
        data: data
    })
}