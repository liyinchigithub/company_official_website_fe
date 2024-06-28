<template>
	<div>
		<el-carousel :interval="5000" arrow="always" height="500px">
			<el-carousel-item v-for="(item,i) in swiperList" :key="i">
				<el-image :src="item.img" alt="" style="width:100%;height:100%" fit="cover"/>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
    name: 'Banner',
    components: {},
    props: {},
    watch: {},
    data() {
        return {
            swiperList: [
                {
                  img: require("@/assets/banner/2.jpg"),
                },
                {
                  img: require("@/assets/banner/3.jpg"),
                },
            ],
        };
    },

    mounted() {

    },
    created() {

    },

    methods: {},
};
</script>

<style lang="scss" scoped>

</style>
