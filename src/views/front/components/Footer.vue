<template>
	<div class="footer">
		<div class="container">
			<h1 class="center">联系我们</h1>
			<div class="flex">
				<div class="info" v-if="footerData">
					<div><i class="el-icon-phone"></i>电话：{{ footerData.phone }}</div>
					<div><i class="el-icon-message"></i>邮箱：{{ footerData.email }}</div>
					<div><i class="el-icon-location-information"></i>地址：{{ footerData.address }}</div>
				</div>
				<img v-if="footerData" :src="footerData.weChatImage" style="width: 150px; height: 150px"/>
			</div>
		</div>
		<div class="other center" v-if="footerData">
			<div class="flex-center">
				<a class="item" :href="'http://beian.miit.gov.cn/'" target="_blank">{{ footerData.icp }}</a>
				<img class="img" src="@/assets/beian.png" alt="" style="width: 20px; height: 20px">
				<div>{{ footerData.publicSecurity }}</div>
			</div>
			<p class="copyright">{{ footerData.copyright }}</p>
		</div>
	</div>
</template>

<script>
import { getFooterData } from '@/api/index'

export default {
    name: 'Footer',

    data() {
        return {
            footerData: {
                phone: '123-456-7890',
                email: 'example@example.com',
                address: '默认地址',
                weChatImage: 'default-wechat-image.png',
                icp: '默认ICP',
                beianImage: 'default-beian-image.png',
                publicSecurity: '默认公安信息',
                copyright: '© 2023 默认版权'
            }
        };
    },

    mounted() {
        const cachedFooterData = localStorage.getItem('footerData');
        if (cachedFooterData) {
            this.footerData = JSON.parse(cachedFooterData);
        } else {
            this.fetchFooterData();
        }
    },

    methods: {
        async fetchFooterData() {
            try {
                const response = await getFooterData();
                if (response.code === 0 && response.data.length > 0) {
                    this.footerData = response.data[0];
                    localStorage.setItem('footerData', JSON.stringify(this.footerData));
                } else {
                    console.error('Failed to fetch footer data:', response.message);
                }
            } catch (error) {
                console.error('Failed to fetch footer data:', error);
            }
        }
    },
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

    .item {
      color: #606266;
      font-size: 14px;
      line-height: 30px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
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

  @media (max-width: 768px) {
    .container {
      padding: 0 10px;
    }
    .info {
      font-size: 12px;
    }
    .other {
      .item, .copyright {
        font-size: 12px;
      }
    }
  }
}
</style>