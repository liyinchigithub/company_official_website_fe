import request from '@/utils/request'

// 获取轮播图数据
export function getSwiperList() {
  return request({
    url: '/v1/carousels/getAllCarousels', // 使用代理路径
    method: 'get',
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 获取横向商品列表
export function getProductCarousel(){
  return request({
    url: '/v1/productsCarousels/getAllProductsCarousels', // 替换为你的后端接口路径
    method: 'get',
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 搜索商品
export function searchProductsByName(name) {
  return request({
    url: `/v1/products/searchProductsByName`,
    method: 'get',
    params: { name }
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 获取单个商品信息
export function getProductById(id) {
  return request({
    url: `/v1/products/getProductById/${id}`, // 替换为你的后端接口路径
    method: 'get',
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 获取Footer数据
export function getFooterData() {
  return request({
    url: '/v1/basicInformation/getAllBasicInformation', // 使用代理路径
    method: 'get',
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 更新基础信息数据（更新Footer数据）
export function updateFooterData(data) {
  return request({
    url: '/v1/basicInformation/updateBasicInformation',
    method: 'put',
    data
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 获取品牌数据
export function getBrands() {
  return request({
    url: '/v1/brands/getAllBrands',
    method: 'get',
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 获取商品分类
export function getProductCategories() {
  return request({
    url: '/v1/productCategories/getAllProductCategories',
    method: 'get',
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 新增商品
export function addProduct(data) {
  return request({
    url: '/v1/products/addProduct',
    method: 'post',
    data
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}


// 获取分页商品列表
export function getProductsPaged(page, size, sortField) {
  return request({
    url: `/v1/products/getProductsPaged?page=${page}&size=${size}&sortField=${sortField}`,
    method: 'get',
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 删除商品
export function deleteProductById(id) {
  return request({
    url: `/v1/products/deleteProduct/${id}`,
    method: 'delete',
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 更新商品
export function updateProduct(data) {
  return request({
    url: '/v1/products/updateProduct',
    method: 'put',
    data
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 文件上传
export function uploadFile(data) {
  return request({
    url: '/v1/fileUpload/upload',
    method: 'post',
    data
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 获取gps坐标
export function getList (params) {
  return request({
    url: '/api-task/gps/tracks/getMessageBySn',
    method: 'get',
    params
  })
}

/* 我的订单 */
export function getMyOrder (params) {
  return request({
    url: '/api-task/gpsOrder/getBaseMessage',
    method: 'get',
    params
  })
}
/* 订单详情 */
export function getOrderDetail (id) {
  return request({
    url: `/api-task/gpsOrder/getOrderDetail/${id}`,
    method: 'get',
  })
}

/* 下单 */
export function addGpsOrder (data) {
  return request({
    url: '/api-task/gpsOrder/insert',
    method: 'post',
    data
  })
}
/* 我的设备 */
export function getMyGps (params) {
  return request({
    url: '/api-task/gpsOrder/getAllGpsMessage',
    method: 'get',
    params
  })
}