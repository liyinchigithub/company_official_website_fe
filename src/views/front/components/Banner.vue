<template>
	<div>
		<el-carousel :interval="5000" arrow="always" height="500px">
			<el-carousel-item v-for="(item, i) in swiperList" :key="i">
				<el-image :src="encodeUrl(item.imageUrl)" alt="" style="width:100%;height:100%" fit="cover" @error="handleImageError"/>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
import { getSwiperList } from '@/api/index.js' // 导入API方法

export default {
    name: 'Banner',
    components: {},
    props: {},
    watch: {},
    data() {
        return {
            swiperList: [], // 初始化为空数组
        };
    },

    mounted() {
        console.log('Component mounted'); // 确认组件挂载
        this.fetchSwiperList(); // 组件挂载后获取数据
    },

    methods: {
        async fetchSwiperList() {
            console.log('fetchSwiperList called'); // 确认方法被调用
            try {
                console.log('Before API call'); // 在API调用之前打印日志
                const response = await getSwiperList();
                console.log('API response:', response); // 打印API响应
                if (response && response.data) {
                    this.swiperList = response.data.filter(item => item.enabled); // 过滤掉enabled为false的轮播图
                    console.log('Filtered swiperList:', this.swiperList); // 打印过滤后的数据
                } else {
                    console.error('API response does not contain data');
                }
            } catch (error) {
                console.error('获取轮播图数据失败:', error);
            }
        },
        encodeUrl(url) {
            const [baseUrl, queryString] = url.split('?');
            if (!queryString) return baseUrl;
            return baseUrl + '?' + queryString.split('&').map(param => {
                const [key, value] = param.split('=');
                return `${key}=${encodeURIComponent(value)}`;
            }).join('&');
        },
        handleImageError(event) {
            console.error('图片加载失败:', event.target.src);
            event.target.src = require('@/assets/banner/default.jpg'); // 替换为默认图片路径
        }
    },
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .el-carousel {
    height: 300px;
  }
}
</style>