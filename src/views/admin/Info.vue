<template>
	<div>
		<el-card class="card">
			<div class="title">【基础信息配置】</div>
			<div class="center">
				<!-- <img src="@/assets/avatar.png" width="100px" height="100px" alt=""> -->
			</div>
			<el-form :model="footerData" label-width="120px">
				<el-form-item label="电话">
					<el-input v-model="footerData.phone"></el-input>
				</el-form-item>
				<el-form-item label="邮箱">
					<el-input v-model="footerData.email"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="footerData.address"></el-input>
				</el-form-item>
				<el-form-item label="微信图片">
					<el-input v-model="footerData.weChatImage"></el-input>
					<el-upload
						ref="upload"
						class="upload-demo"
						:action="uploadUrl"
						:before-upload="beforeUpload"
						:on-success="handleUploadSuccess"
						:show-file-list="false">
						<el-button size="small" type="primary">上传图片</el-button>
					</el-upload>
				</el-form-item>
				<el-form-item label="ICP">
					<el-input v-model="footerData.icp"></el-input>
				</el-form-item>
				<el-form-item label="公安信息">
					<el-input v-model="footerData.publicSecurity"></el-input>
				</el-form-item>
				<el-form-item label="版权">
					<el-input v-model="footerData.copyright"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="saveFooterData">保存</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import service from '@/utils/request' // 导入封装好的 axios 实例
import { getFooterData, updateFooterData } from '@/api/index'
import { baseUrl } from '@/config/index'

export default {
    name: 'Info',
    data() {
        return {
            footerData: {
                phone: '',
                email: '',
                address: '',
                weChatImage: '',
                icp: '',
                publicSecurity: '',
                copyright: ''
            },
            uploadUrl: '/v1/fileUpload/upload' // 修改为相对路径
        };
    },
    mounted() {
        this.fetchFooterData();
    },
    methods: {
        async fetchFooterData() {
            try {
                const response = await getFooterData();
                if (response.code === 0 && response.data.length > 0) {
                    this.footerData = response.data[0];
                } else {
                    console.error('Failed to fetch footer data:', response.message);
                }
            } catch (error) {
                console.error('Failed to fetch footer data:', error);
            }
        },
        async saveFooterData() {
            try {
                const response = await updateFooterData(this.footerData);
                if (response.code === 0) {
                    this.$message.success('保存成功');
                } else {
                    this.$message.error('保存失败: ' + response.message);
                }
            } catch (error) {
                this.$message.error('保存失败: ' + error);
            }
        },
        handleUploadSuccess(response) {
            if (response.code === 0) {
                this.footerData.weChatImage = `${baseUrl}/v1/getLatestImage?fileName=${response.data}`;
                this.$message.success('图片上传成功');
            } else {
                this.$message.error('图片上传失败: ' + response.message);
            }
        },
        beforeUpload(file) {
            // 动态添加 userId 到 form-data
            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', localStorage.getItem('SET_NAME'));

            // 手动上传文件
            this.uploadFile(formData);
            return false; // 阻止 el-upload 的默认上传行为
        },
        async uploadFile(formData) {
            try {
                const response = await service.post(this.uploadUrl, formData);
                this.handleUploadSuccess(response);
            } catch (error) {
                this.$message.error('图片上传失败: ' + error);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
  min-height: 500px;

  .title {
    width: 200px;
    // background: linear-gradient(to right, #1E6BDC, #FFFEFF);
  }

  @media (max-width: 768px) {
    .title {
      width: 80px;
    }
  }

  @media (max-width: 480px) {
    .title {
      width: 60px;
    }
  }
}
</style>