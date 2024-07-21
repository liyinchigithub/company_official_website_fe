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

// 获取横向商品
export function getAllProductCarousel(){
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

// 获取横向商品，通过ID /v1/productsCarousels/getProductsCarouselsById/1
export function getProductCarouselById(id) { 
  return request({
    url: `/v1/productsCarousels/getProductsCarouselsById/${id}`, // 替换为你的后端接口路径
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

// 获取所有品牌
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

// 新增品牌
export function addBrand(data) {
  return request({
    url: '/v1/brands/addBrand',
    method: 'post',
    data
  });
}

// 分页查询品牌
export function getBrandsPaged(page, size, sortField) {
  return request({
    url: `/v1/brands/?page=${page}&size=${size}&sortField=${sortField}`,
    method: 'get'
  }).then(response => {
    console.log('API request successful:', response); // 打印API请求成功的响应
    return response; // 返回整个response对象
  }).catch(error => {
    console.error('API request failed:', error); // 打印API请求失败的错误
    throw error;
  });
}

// 搜索品牌
export function searchBrandsByName(name) {
  return request({
    url: '/v1/brands/search',
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

// 删除品牌
export function deleteBrandById(id) {
  return request({
    url: `/v1/brands/deleteBrand/${id}`,
    method: 'delete'
  });
}

// 更新品牌
export function updateBrand(data) {
  return request({
    url: '/v1/brands/updateBrand',
    method: 'put',
    data
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

// 获取所有商品
export function getAllProducts() {
  return request({
    url: '/v1/products/getAllProducts',
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

// 新增品牌授权证书 
export async function addCertificate(certificate) {
   try {
    const response = await request({
      url: '/v1/certificates/addCertificate',
      method: 'post',
      data: certificate
    });
    return response;
  } catch (error) {
    console.error('Error adding certificate:', error);
    throw error;
  }
}



// 品牌授权书分页查询
export async function getCertificatesPaged(page, size, sortField) {
  try {
    const response = await request({
      url: '/v1/certificates/page',
      method: 'get',
      params: { page, size, sortField }
    });
    return response;
  } catch (error) {
    console.error('Error fetching certificates:', error);
    throw error;
  }
}

// 更新品牌授权证书/v1/certificates/updateCertificate
export async function updateCertificate(certificate) { 
  try {
    const response = await request({
      url: '/v1/certificates/updateCertificate',
      method: 'put',
      data: certificate
    });
    return response;
  } catch (error) {
    console.error('Error updating certificate:', error);
    throw error;
  }
}

// 搜索品牌授权证书 /v1/certificates/search?name=1
export async function searchCertificatesByName(name) {
  try {
    const response = await request({
      url: '/v1/certificates/search',
      method: 'get',
      params: { name }
    });
    return response;
  } catch (error) {
    console.error('Error searching certificates:', error);
    throw error;
  }
}

// 删除品牌授权证书 /v1/certificates/deleteCertificate/1

export async function deleteCertificateById(id) {
  try {
    const response = await request({
      url: `/v1/certificates/deleteCertificate/${id}`,
      method: 'delete'
    });
    return response;
  } catch (error) {
    console.error('Error deleting certificate:', error);
    throw error;
  }
}


// 新增横向轮播图商品 /v1/productsCarousels/addProductsCarousels
export async function addProductsCarousel(carousel){
   try {
    const response = await request({
      url: '/v1/productsCarousels/addProductsCarousels',
      method: 'post',
      data: carousel
    });
    return response;
  } catch (error) {
    console.error('Error adding carousel:', error);
    throw error;
  }
}

// 编辑横向轮播图商品 /v1/productsCarousels/updateProductsCarousels
export async function updateProductsCarousel(carousel) { 
  try {
    const response = await request({
      url: '/v1/productsCarousels/updateProductsCarousels',
      method: 'put',
      data: carousel
    });
    return response;
  } catch (error) {
    console.error('Error updating carousel:', error);
    throw error;
  }
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