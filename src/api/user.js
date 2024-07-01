import request from '@/utils/request'
export const loginNum = (inStorageNo) => {
  return request({
    url: `/client/anno/loginNum?phone=${inStorageNo}`,
    method: 'get'
  })
}
export const login = (data) => {
  return request({
    url: '/client/anno/login',
    data: data,
    method: 'post'
  })
}
export const getInfo = (token) => {
  return request({
    url: '/client/anno/getRoles',
    method: 'get',
    params: { token }
  })
}
export const logout = () => {
  return request({
    url: '/api/user/logout',
    method: 'post'
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
