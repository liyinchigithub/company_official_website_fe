<template>
	<div class="page">
		<Nav />
		<el-row class="container">
			<el-col :span="4">
				<el-menu :default-active="active" class="menu" @open="handleOpen" @close="handleClose"
					:collapse="isCollapse" @select="select">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-setting"></i>
							<span slot="title">配置</span>
						</template>
						<el-menu-item index="/info">
							<template slot="title">
								<div class="flex-start">
									<!-- <div class="dot"></div> -->
									<div slot="title">基础信息</div>
								</div>
							</template>
						</el-menu-item>
						<el-menu-item index="/Carousel">
							<template slot="title">
								<div class="flex-start">
									<!-- <div class="dot"></div> -->
									<div slot="title">轮播图</div>
								</div>
							</template>
						</el-menu-item>
						<el-menu-item index="/BrandAuthorizationCertificate">
							<template slot="title">
								<div class="flex-start">
									<!-- <div class="dot"></div> -->
									<div slot="title">品授权证书</div>
								</div>
							</template>
						</el-menu-item>
						<el-menu-item index="/Brands">
							<template slot="title">
								<div class="flex-start">
									<!-- <div class="dot"></div> -->
									<div slot="title">商品品牌</div>
								</div>
							</template>
						</el-menu-item>
						<el-menu-item index="/Products">
							<template slot="title">
								<div class="flex-start">
									<!-- <div class="dot"></div> -->
									<div slot="title">商品配置</div>
								</div>
							</template>
						</el-menu-item>
						<!-- <el-menu-item index="/Carousel">
							<template slot="title">
								<div class="flex-start">
									<div slot="title">轮播图</div>
								</div>
							</template>
						</el-menu-item> -->
						<el-menu-item index="/ProductsCarousels">
							<template slot="title">
								<div class="flex-start">
									<!-- <div class="dot"></div> -->
									<div slot="title">横向商品</div>
								</div>
							</template>
						</el-menu-item>
						<el-menu-item index="/ProductsWaterfall">
							<template slot="title">
								<div class="flex-start">
									<!-- <div class="dot"></div> -->
									<div slot="title">瀑布流商品</div>
								</div>
							</template>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" class="appMain">
				<router-view />
			</el-col>
		</el-row>
		<Footer />
	</div>
</template>

<script>
import Nav from '../front/components/Nav.vue'
import Footer from '../front/components/Footer.vue'

export default {
	name: 'Index',
	components: { Nav, Footer },
	data() {
		return {
			isCollapse: false,
			active: null,
		};
	},

	mounted() {
		this.active = this.$route.fullPath
	},

	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},

		select(index) {
			if (this.$route.path !== index) {
				this.$router.push(index);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.page {
	background: #f4f5fa;

	.container {
		margin-top: 75px;
		display: flex;
		margin-bottom: 15px;

		.menu {
			.dot {
				width: 7px;
				height: 7px;
				background: #44566C;
				border-radius: 50%;
				margin-right: 5px;
			}

			height: 500px;
		}

		.appMain {
			flex: 1;
			min-height: 500px;
			background: #fff;
		}
	}

	@media (max-width: 768px) {
		.container {
			flex-direction: column;

			.menu {
				width: 100%;
				height: auto;
			}

			.appMain {
				width: 100%;
			}
		}
	}
}
</style>