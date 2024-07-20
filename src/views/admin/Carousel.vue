<template>
  <div>
    <el-card class="card">
      <div class="title">【轮播图配置】</div>
      <div class="center">
        <!-- <img src="@/assets/avatar.png" width="100px" height="100px" alt=""> -->
      </div>
      <el-form :model="form" @submit.native.prevent="addProductToCarousel">
        <el-form-item label="选择商品">
          <el-select v-model="form.selectedProduct" placeholder="请选择商品">
            <el-option
              v-for="item in products"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addProductToCarousel">添加到轮播图</el-button>
        </el-form-item>
      </el-form>
      <div v-if="carouselItems.length">
        <h3>已添加到轮播图的商品：</h3>
        <ul>
          <li v-for="item in carouselItems" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 新增的保存配置按钮 -->
      <div class="save-button">
        <el-button type="success" @click="saveCarouselConfig">保存配置</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getAllProducts } from '@/api/index.js';

export default {
  name: 'CarouselConfig',
  data() {
    return {
      form: {
        selectedProduct: null,
      },
      products: [], // 商品数据
      carouselItems: [], // 轮播图中的商品
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await getAllProducts();
        if (response.code === 0) {
          this.products = response.data;
        } else {
          this.$message.error('获取商品数据失败: ' + response.message);
        }
      } catch (error) {
        console.error('获取商品数据失败:', error);
        this.$message.error('获取商品数据失败');
      }
    },
    addProductToCarousel() {
      if (this.form.selectedProduct) {
        const selectedProduct = this.products.find(product => product.id === this.form.selectedProduct);
        if (selectedProduct && !this.carouselItems.some(item => item.id === selectedProduct.id)) {
          this.carouselItems.push(selectedProduct);
          console.log('添加商品ID:', this.form.selectedProduct);
        } else {
          this.$message.error('该商品已在轮播图中');
        }
      } else {
        this.$message.error('请选择一个商品');
      }
    },
    // 新增的保存配置方法
    saveCarouselConfig() {
      // 实现保存配置的逻辑
      console.log('保存轮播图配置:', this.carouselItems);
      this.$message.success('轮播图配置已保存');
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  min-height: 500px;

  .title {
    width: 200px;
    // background: linear-gradient(to right, #1E6BDC, #FFFEFF);
  }

  @media (max-width: 768px) {
    .title {
      width: 80px;
    }
  }

  @media (max-width: 480px) {
    .title {
      width: 60px;
    }
  }
}

.save-button {
  margin-top: 20px;
  text-align: center;
}
</style>