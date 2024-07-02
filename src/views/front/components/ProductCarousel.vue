<template>
    <div class="product-carousel">
      <el-carousel :interval="4000" arrow="always">
        <el-carousel-item v-for="item in products" :key="item.id">
          <el-card @click.native="goToProductDetail(item.id)">
            <img :src="item.image" class="product-image" />
            <div class="product-info">
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </el-card>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
  <script>
  import { getProductCarousel } from '@/api/index'; // 从 index.js 导入 getProducts 函数
  
  export default {
    name: 'ProductCarousel',
    data() {
      return {
        products: []
      };
    },
    async created() {
     // 获取横向商品列表
      this.products = await getProductCarousel();
    },
    methods: {
      goToProductDetail(id) {
        this.$router.push({ name: 'ProductDetail', params: { id } });
      }
    }
  };
  </script>
  
  <style scoped>
  .product-carousel {
    .product-image {
      width: 100%;
      height: auto;
    }
    .product-info {
      text-align: center;
    }
  }
  </style>