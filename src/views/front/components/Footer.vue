<template>
	<div class="footer">
		<div class="container">
			<h1 class="center">联系我们</h1>
			<div class="flex">
				<div class="info">
					<div><i class="el-icon-phone"></i>电话：18888888888</div>
					<div><i class="el-icon-message"></i>邮箱：youxiang@test.com</div>
					<div><i class="el-icon-location-information"></i>地址：重庆市 · 渝北区 · 冉家坝</div>
				</div>
				<img style="width: 150px; height: 150px" src="@/assets/images/weChat-1.jpg"/>
			</div>
		</div>
		<div class="other center">
			<div class="flex-center">
				<div class="item">渝ICP备152361966号</div>
				<img class="img" src="@/assets/beian.png" alt="">
				<div>渝公网安备 50010902056984号</div>
			</div>
			<p class="copyright">Copyright © 2022 XXX有限公司 版权所有</p>
		</div>

	</div>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {};
    },

    mounted() {

    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  background: rgba(233, 233, 233, 0.99);
  padding: 30px 0;
  width: 100vw;
  margin: 0 auto;

  .other {
    .img {
      margin: 0 10px;
    }

    .copyright {
      color: #606266;
      font-size: 14px;
      line-height: 30px;
    }
  }

  .container {
    .info {
      line-height: 30px;

      .el-icon-location-information, .el-icon-message, .el-icon-phone {
        margin-right: 5px;
      }

      .el-icon-location-information {
        margin-left: -1px;
      }
    }
  }
}
</style>
