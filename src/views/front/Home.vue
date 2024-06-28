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
			<div class="introduce">
				<h1 class="center">我是标题</h1>
				<p class="center">介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容</p>
			</div>
		</div>
		<Footer class="top"/>
	</div>
</template>

<script>
import Banner from './components/Banner'

export default {
    name: 'Home',
    components: {Banner},
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
.container{
  .introduce{
	min-height: 200px;
	padding-top: 100px;
  }
}

</style>
