<template>
	<div class="nav">
		<div class="container">
			<div class="logo">
				<img v-if="logoImage" :src="logoImage" alt="logo" height="50px" width="50px" style="margin:15px 0 0 0">
				<!-- <div v-else style="font-size:26px;margin-right:50px" @click="$router.push('/home')">logo</div> -->
				<div @click="toDetail(item,i)" :class="$route.path === item.path?'active':''" v-for="(item,i) in navList"
					:key="i">
					{{ item.name }}
				</div>
			</div>
			<div class="login">
				<div v-if="!isLogin" class="btn">
					<div @click="login">登录</div>
					<!-- <div @click="login('add')">注册</div> -->
				</div>
				<div v-else class="loginOut">
					<el-dropdown trigger="hover">
						<div class="avatar-wrapper">
							<el-avatar src="https://www.aliboxx.com/uploadfile/avatar/8.png"></el-avatar>
							<span style="font-size: 12px;margin-left:10px">{{ name }}</span>
						</div>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item @click.native="info">
								<span>后台管理</span>
							</el-dropdown-item>
							<el-dropdown-item divided @click.native="logout">
								<span>退出登录</span>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import {getToken, register} from '@/api/user'
import {sendMobileVerifyCode, compareVerifycode, resetpass} from "@/api/user";

export default {
    name: 'Nav',
    data() {
        return {
            navList: [
                {
                    name: '首页',
                    path: '/home',
                },
                {
                    name: '产品与服务',
                    path: '/ProductService',
                },
                {
                    name: '关于我们',
                    path: '/about',
                },
            ],
            register: {},
            isLogin: null,
            mobile: '18888888888',
            logoImage: null // 新增 logoImage 数据属性
        };
    },
    computed: {
        ...mapGetters(["avatar", "name", "roles", "isPay"]),
    },
    mounted() {
        this.isLogin = localStorage.getItem("token") ? true : false;
        const cachedFooterData = localStorage.getItem('footerData');
        if (cachedFooterData) {
            const footerData = JSON.parse(cachedFooterData);
            this.$nextTick(() => {
                this.logoImage = footerData.beianImage; // 从缓存中读取 beianImage
            });
        }
    },

    methods: {
        logout() {
            this.$message.success('退出成功')
            localStorage.removeItem('token')
            this.isLogin = false
            this.$router.replace({
                path: '/login'
            })
        },
        login(e) {
            if (e == 'add') {
                this.$router.push('/register')
            } else {
                this.$router.push('/login')
            }
        },
        info() {
            this.$router.push({
                path: '/info'
            })
        },
        toDetail(item, i) {
            this.$router.push({
                path: item.path
            })
        },
    },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  height: 75px;
  z-index: 100;
  background: #ffffff;
  width: 100vw;
  margin: 0 auto;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .container {
    width: 60%;
    margin: 0 auto;
    display: flex;
    position: relative;

    .logo {
      display: flex;
      width: 80%;

      div {
        width: 100px;
        height: 72px;
        line-height: 72px;
        text-align: center;
        cursor: pointer;
      }

      div:hover {
        width: 100px;
        text-align: center;
        cursor: pointer;
        color: #4c88ff;
      }
    }

    .login {
      position: absolute;
      right: -5%;
      display: flex;

      .loginOut {
        line-height: 72px;

        .user-avatar {
          cursor: pointer;
          width: 20px;
          height: 20px;
          border-radius: 10px;
          margin: -5px 0 0 5px;
        }

        .avatar-wrapper {
          display: flex;
          align-items: center;
          height: 72px;
        }
      }

      .btn {
        display: flex;

        div {
          width: 50px;
          height: 72px;
          line-height: 72px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }

  .active {
    color: #0b2183;
    border-bottom: 3px solid #0b2183;
  }

  @media (max-width: 768px) {
    .container {
      width: 90%;
    }
    .logo {
      width: 70%;
    }
    .login {
      right: 0;
    }
  }
}
</style>