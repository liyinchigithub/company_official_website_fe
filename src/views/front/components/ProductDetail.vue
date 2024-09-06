<template>
  <div class="product-detail">
    <Nav/>
    <el-card>
      <img :src="product.coverImage" class="product-image" />
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <!-- <p>价格: {{ product.salePrice }}</p> -->
      </div>
    </el-card>
    <el-alert
      v-if="error"
      :title="error"
      type="error"
      :closable="false"
    />
    <Footer class="top"/>
  </div>
</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
import { getProductById } from '@/api/index'; // 假设你有一个API文件来处理请求

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {}
    };
  },
  components: {
    Nav,
    Footer
  },
  async created() {
    try {
      const productId = this.$route.params.id;
      const response = await getProductById(productId);
      this.product = response.data;
    } catch (error) {
      console.error('获取产品详情失败:', error);
      this.error = '获取产品详情失败，请稍后再试';
    }
  }
};
</script>

<style scoped>
.product-detail {
  .product-image {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100vh; /* 使图片高度自适应页面高度 */
    object-fit: contain; /* 保持图片比例 */
    margin-top: 20px; /* 将图片向下移动 */
  }
  .product-info {
    text-align: center;
  }
}
</style>