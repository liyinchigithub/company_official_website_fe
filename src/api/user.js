import request from '@/utils/request'

// 管理员登录接口
export function login(param) {
  return request({
    url: '/v1/admins/login',
    method: 'post',
    data: param
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response;
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

export const loginNum = (inStorageNo) => {
  return request({
    url: `/client/anno/loginNum?phone=${inStorageNo}`,
    method: 'get'
  })
}

// 管理员登出接口
export const logout = () => {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}

// 获取管理员信息
export const getInfo = (token) => {
  return request({
    url: '/client/anno/getRoles',
    method: 'get',
    params: { token }
  })
}

// 发送手机登录验证码
export const sendMobileVerifyCode = (data) => {
  return request({
    url: '/client/anno/sendMobileVerifyCode',
    method: 'post',
    data: data
  })
}
// 对比验证码的正确情况
export const compareVerifycode = (data) => {
  return request({
    url: '/client/anno/compareVerifycode',
    method: 'post',
    data: data
  })
}
// 注册	/client/customer/register
export const register = (data) => {
  return request({
    url: '/client/customer/register',
    method: 'post',
    data: data
  })
}
// 修改密码
export const resetpass = (data) => {
  return request({
    url: '/client/customer/resetpass',
    method: 'post',
    data: data
  })
}
export const getSignTypeList = () => {
  return request({
    url: `/sys/dict/listBusiness`,
    method: 'GET'
  })
}

export const zcDelectFile = (param) => {
  console.log(param)
  return request({
    url: `/client/cloud/file/deleteTransport`,
    method: 'POST',
    data: param
  })
}
