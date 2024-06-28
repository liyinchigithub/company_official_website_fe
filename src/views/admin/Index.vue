<template>
	<div class="page">
		<Nav/>
		<el-row class="container">
			<el-col :span="4">
				<el-menu :default-active="active" class="menu" @open="handleOpen" @close="handleClose"
					:collapse="isCollapse" @select="select">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span slot="title">基本信息</span>
						</template>
						<el-menu-item index="/info">
							<template slot="title">
								<div class="flex-start">
									<div class="dot"></div>
									<div slot="title">基本信息</div>
								</div>
							</template>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" class="appMain">
				<router-view/>
			</el-col>
		</el-row>
		<Footer/>
	</div>
</template>

<script>
import Nav from '../front/components/Nav.vue'
import Footer from '../front/components/Footer.vue'

export default {
    name: 'Index',
    components: {Nav, Footer},
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

        select(index, path) {
            console.log(index, path, 'path')
            this.$router.push({
                path: index
            })
        }
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
}
</style>
