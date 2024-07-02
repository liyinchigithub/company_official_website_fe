<template>
    <div class="product-detail">
      <el-card>
        <img :src="product.image" class="product-image" />
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <p>{{ product.description }}</p>
          <p>价格: {{ product.price }}</p>
        </div>
      </el-card>
    </div>
  </template>
  
  <script>
  import { getProductById } from '@/api/index'; // 假设你有一个API文件来处理请求
  
  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: {}
      };
    },
    async created() {
      const productId = this.$route.params.id;
      this.product = await getProductById(productId);
    }
  };
  </script>
  
  <style scoped>
  .product-detail {
    .product-image {
      width: 100%;
      height: auto;
    }
    .product-info {
      text-align: center;
    }
  }
  </style>