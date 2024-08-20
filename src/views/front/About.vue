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
					<div class="about-us">
        <h2 class="center">关于我们</h2>
        <p class="center">我们不仅仅是提供传统闽南美食、经典分享，更是一个追求美食、经典、文化的深度用户</p>
        <div class="features">
          <div class="feature">
            <img src="../../assets/images/icon.png" alt="古早味" class="feature-icon"/>
            <h3>古早味</h3>
            <p>古早味，是闽南地区特有的饮食文化，是闽南文化的重要组成部分，是闽南文化的象征之一。</p>
          </div>
          <div class="feature">
            <img src="../../assets/images/icon.png" alt="闽南文化" class="feature-icon"/>
            <h3>闽南文化</h3>
            <p>闽南文化，是闽南地区特有的饮食文化，是闽南文化的重要组成部分，是闽南文化的象征之一。</p>
          </div>
          <div class="feature">
            <img src="../../assets/images/icon.png" alt="多元宗教" class="feature-icon"/>
            <h3>多元宗教</h3>
            <p>多元宗教，是闽南地区特有的饮食文化，是闽南文化的重要组成部分，是闽南文化的象征之一。</p>
          </div>
          <div class="feature">
            <img src="../../assets/images/icon.png" alt="多元文化" class="feature-icon"/>
            <h3>多元文化</h3>
            <p>多元文化，是闽南地区特有的饮食文化，是闽南文化的重要组成部分，是闽南文化的象征之一。</p>
          </div>
        </div>
      </div>

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

.about-us {
  margin: 40px 0;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    position: relative;
  }

  h2::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background: red;
    margin: 10px auto 0;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
  }
}
</style>