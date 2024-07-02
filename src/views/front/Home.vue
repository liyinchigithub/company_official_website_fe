<template>
	<div>
		<Nav/>
		<Banner/>
		<div class="container">
			<el-breadcrumb separator="/" class="top">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>当前</el-breadcrumb-item>
			</el-breadcrumb>
			<!--<el-card class="top">-->
			<!--	<div class="left">-->
			<!--		<img class="top5" style="width: 150px; height: 150px;border: 1px solid #e1e1e1" src="../../assets/images/weChat-1.jpg"/>-->
			<!--	</div>-->
			<!--</el-card>-->
      <!-- <div class="introduce">
				<h1 class="center">我是标题</h1>
				<p class="center">介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容</p>
			</div> -->

      <!-- 新增的商品卡片轮播图组件 -->
      <ProductCarousel />
			
		</div>
		<Footer class="top"/>
	</div>
</template>

<script>
import Banner from './components/Banner'
import ProductCarousel from './components/ProductCarousel' // 引入新组件

export default {
    name: 'Home',
    components: {
      Banner,// 轮播图
      ProductCarousel // 横向商品
     },
    props: {},
    watch: {},
    data() {
        return {};
    },

    mounted() {

    },

    created() {
    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  .introduce {
    min-height: 200px;
    padding-top: 100px;

    @media (max-width: 768px) {
      padding-top: 50px;
    }

    @media (max-width: 480px) {
      padding-top: 20px;
    }
  }
}
</style>
