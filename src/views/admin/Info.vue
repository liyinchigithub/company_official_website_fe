<template>
	<div>
		<el-card class="card">
			<div class="title">基本信息</div>
			<div class="center">
				<img src="@/assets/avatar.png" width="100px" height="100px" alt="">
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
    name: '',
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
.card {
  min-height: 500px;

  .title {
    width: 100px;
    background: linear-gradient(to right, #1E6BDC, #FFFEFF);
  }
}

</style>
