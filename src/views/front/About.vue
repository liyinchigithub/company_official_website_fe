<template>
	<div>
		<Nav/>
		<Banner/>
		<div class="container">
			<el-breadcrumb separator="/" class="top">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>关于我们</el-breadcrumb-item>
			</el-breadcrumb>
			<el-card class="top">
				<div class="left">
					<!-- <img class="top5" style="width: 150px; height: 150px;border: 1px solid #e1e1e1" src="../../assets/images/weChat-1.jpg"/> -->
				关于我们。。。 <br>
				关于我们。。。 <br>
				关于我们。。。 <br>
				关于我们。。。 <br>
				关于我们。。。 <br>

				</div>
			</el-card>
		</div>
		<Footer class="top"/>
	</div>
</template>

<script>
import Banner from './components/Banner'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'About',
    components: {Nav, Footer, Banner},

    data() {
        return {};
    },

    mounted() {

    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Ensure the page takes at least the full height of the viewport
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
}

.container {
  flex: 1; // Allow the container to grow and fill available space
  margin-bottom: 100px; // Add space between container and footer
}
</style>