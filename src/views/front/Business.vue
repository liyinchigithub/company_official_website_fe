<template>
    <div>
        <Nav />
        <Banner />
        <div class="container">
            <el-breadcrumb separator="/" class="top">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>招商</el-breadcrumb-item>
            </el-breadcrumb>
            <el-card class="top">
                <div class="left">
                    <!-- <img class="top5" style="width: 150px; height: 150px;border: 1px solid #e1e1e1" src="../../assets/images/weChat-1.jpg"/> -->
                    <div class="business-sections">
                        <h2 class="center">商业前景 </h2>
                        <p class="text">xxxxxxxxxxxxxxx</p>
                        <div class="features">
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card class="top">
                <div class="left">
                    <img class="top5 full-image" src="../../assets/加盟优势.png"/>
                </div>
            </el-card>
            <el-card class="top">
                <div class="left">
                    <img class="top5 full-image" src="../../assets/加盟流程.png"/>
                </div>
            </el-card>
            <el-card class="top">
                <div class="form-container">
                    <h2 class="join">加盟申请 </h2>
                    <el-form :model="form" label-width="80px">
                        <el-form-item label="姓名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="电话">
                            <el-input v-model="form.contactInfo"></el-input>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="form.description"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm">立即申请</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
        <Footer class="top" />
    </div>
</template>

<script>
import Banner from './components/Banner'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import { addBusiness } from '@/api/index.js'

export default {
    name: 'About',
    components: { Nav, Footer, Banner },

    data() {
        return {
            form: {
                name: '',
                contactInfo: '',
                description: ''
            }
        };
    },

    methods: {
        submitForm() {
            const businessData = {
                name: this.form.name,
                contactInfo: this.form.contactInfo,
                description: this.form.description,
                isDeleted: false
            };

            addBusiness(businessData)
                .then(response => {
                    console.log('API request successful:', response);
                    this.$message.success('申请提交成功');
                })
                .catch(error => {
                    console.error('API request failed:', error);
                    this.$message.error('申请提交失败');
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh; // Ensure the page takes at least the full height of the viewport
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
}

.container {
    flex: 1; // Allow the container to grow and fill available space
    margin-bottom: 100px; // Add space between container and footer
}

.business-sections {
    margin: 40px 0;
    text-align: center;

    h2 {
        font-size: 24px;
        margin-bottom: 20px;
        position: relative;
    }

    h2::after {
        content: '';
        display: block;
        width: 50px;
        height: 2px;
        background: red;
        margin: 10px auto 0;
    }

    p {
        font-size: 16px;
        color: #666;
        margin-bottom: 40px;
    }
}

/* 新增样式 */
.full-image {
    width: 100%;
    height: 100%;
    object-fit: cover; // 保持图片的宽高比并裁剪以填充容器
}

.form-container {
    max-width: 600px; // 设置表单容器的最大宽度
    margin: 0 auto; // 将表单容器居中对齐
    padding: 20px;
}
</style>