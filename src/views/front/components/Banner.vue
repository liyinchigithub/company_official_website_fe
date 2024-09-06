<template>
    <div>
        <el-carousel :interval="5000" arrow="always" :height="carouselHeight">
            <el-carousel-item v-for="(item, i) in swiperList" :key="i">
                <el-image :src="encodeUrl(item.imageUrl)" alt="" style="width:100%;height:100%" fit="cover"
                    @error="handleImageError" />
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
            swiperList: [],
            carouselHeight: '500px', // 默认高度
        };
    },

    mounted() {
        console.log('Component mounted'); // 确认组件挂载
        this.fetchSwiperList(); // 组件挂载后获取数据
        window.addEventListener('resize', this.setCarouselHeight);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setCarouselHeight);
    },
    methods: {
        async fetchSwiperList() {
            console.log('fetchSwiperList called');
            try {
                console.log('Before API call');
                const response = await getSwiperList();
                console.log('API response:', response);
                if (response && response.data) {
                    // 修改这里：只过滤掉deleted为true的轮播图
                    this.swiperList = response.data.filter(item => !item.deleted);
                    console.log('Filtered swiperList:', this.swiperList);
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
        },
        setCarouselHeight() {
            if (window.innerWidth <= 768) {
                this.carouselHeight = '200px'; // 将移动端高度调整为200px
            } else {
                this.carouselHeight = '500px';
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  overflow: hidden;
}

.el-carousel {
  width: 100%;
}

.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .el-carousel {
    height: 200px;
  }
  
  .el-image {
    object-position: center; // 确保图片居中显示
  }
}
</style>