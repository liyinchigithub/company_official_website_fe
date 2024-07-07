<template>
	<div>
		<el-card class="card">
			<div class="title">【商品配置】</div>
			<div class="center">
        <!-- 搜索框 -->
		<div class="search-bar">
			<el-input v-model="searchQuery" placeholder="请输入商品名称"></el-input>
			<el-button type="primary" @click="searchProducts">搜索</el-button>
			<el-button type="success" @click="showAddProductDialog">新增商品</el-button>
		</div>
    <!-- 商品列表 -->
		<el-table :data="products" style="width: 100%">
			<el-table-column prop="name" label="商品名称"></el-table-column>
			<el-table-column prop="salePrice" label="销售价格"></el-table-column>
			<el-table-column prop="stockQuantity" label="库存数量"></el-table-column>
			<!-- 其他列 -->
		</el-table>
    <!-- 分页 -->
		<el-pagination
			@current-change="handlePageChange"
			:current-page="currentPage"
			:page-size="pageSize"
			layout="total, prev, pager, next"
			:total="totalProducts">
		</el-pagination>
  </div>
		</el-card>
    <!-- 新增商品弹窗 -->
		<el-dialog title="新增商品" :visible.sync="addProductDialogVisible">
			<el-form :model="newProduct">
				<el-form-item label="商品名称">
					<el-input v-model="newProduct.name"></el-input>
				</el-form-item>
				<el-form-item label="商品封面图片">
					<el-input v-model="newProduct.coverImage"></el-input>
					<el-upload
						ref="uploadCover"
						class="upload-demo"
						:action="uploadUrl"
						:before-upload="beforeUpload"
						:on-success="handleCoverUploadSuccess"
						:show-file-list="false">
						<el-button size="small" type="primary">上传图片</el-button>
					</el-upload>
				</el-form-item>
				<el-form-item label="商品详情图片">
					<el-upload
						ref="uploadDetail"
						class="upload-demo"
						:action="uploadUrl"
						:before-upload="beforeUpload"
						:on-success="handleDetailUploadSuccess"
						list-type="picture-card"
						:file-list="detailImageList"
						:on-remove="handleDetailRemove">
						<el-button size="small" type="primary">上传图片</el-button>
					</el-upload>
				</el-form-item>
				<el-form-item label="商品描述">
					<el-input type="textarea" v-model="newProduct.description"></el-input>
				</el-form-item>
				<el-form-item label="销售价格">
					<el-input v-model="newProduct.salePrice"></el-input>
				</el-form-item>
				<el-form-item label="成本价格">
					<el-input v-model="newProduct.costPrice"></el-input>
				</el-form-item>
				<el-form-item label="库存数量">
					<el-input v-model="newProduct.stockQuantity"></el-input>
				</el-form-item>
				<el-form-item label="商品品牌">
					<el-input v-model="newProduct.brand"></el-input>
				</el-form-item>
				<el-form-item label="商品分类ID">
					<el-select v-model="newProduct.categoryId" placeholder="请选择分类">
						<el-option
							v-for="category in categories"
							:key="category.id"
							:label="category.name"
							:value="category.id">
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addProductDialogVisible = false">取消</el-button>
				<el-button type="primary" @click="addProduct">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { getProductById, getProductCarousel, getProductCategories } from '@/api/index.js';
import service from '@/utils/request'; // 导入封装好的 axios 实例
import { baseUrl } from '@/config/index';

export default {
    name: 'Products',
    data() {
        return {
            searchQuery: '',
            products: [],
            currentPage: 1,
            pageSize: 10,
            totalProducts: 0,
            addProductDialogVisible: false,
            newProduct: {
                name: '',
                coverImage: '',
                detailImages: [],
                description: '',
                salePrice: '',
                costPrice: '',
                stockQuantity: '',
                brand: '',
                categoryId: null,
            },
            categories: [],
            uploadUrl: '/v1/fileUpload/upload', // 修改为相对路径
            detailImageList: []
        };
    },
    mounted() {
        this.fetchProducts();
        this.fetchCategories();
    },
    methods: {
        fetchProducts() {
            // 调用API获取商品列表
        },
        fetchCategories() {
            getProductCategories().then(data => {
                this.categories = data;
            }).catch(error => {
                console.error('获取商品分类失败:', error);
            });
        },
        searchProducts() {
            // 搜索商品
        },
        handlePageChange(page) {
            this.currentPage = page;
            this.fetchProducts();
        },
        showAddProductDialog() {
            this.addProductDialogVisible = true;
        },
        addProduct() {
            // 调用API新增商品
            this.addProductDialogVisible = false;
        },
        handleCoverUploadSuccess(response) {
            if (response.code === 0) {
                this.newProduct.coverImage = `${baseUrl}/v1/getLatestImage?fileName=${response.data}`;
                this.$message.success('图片上传成功');
            } else {
                if (response.code === 401) {
                    this.$message.error('登录超时，请重新登录');
                } else {
                    this.$message.error('图片上传失败: ' + response.message);
                }
            }
        },
        handleDetailUploadSuccess(response) {
            if (response.code === 0) {
                const imageUrl = `${baseUrl}/v1/getLatestImage?fileName=${response.data}`;
                this.newProduct.detailImages.push(imageUrl);
                this.detailImageList.push({ name: response.data, url: imageUrl });
                this.$message.success('图片上传成功');
                console.log('商品详情图片数组:', this.newProduct.detailImages); // 调试输出
            } else {
                if (response.code === 401) {
                    this.$message.error('登录超时，请重新登录');
                } else {
                    this.$message.error('图片上传失败: ' + response.message);
                }
            }
        },
        handleDetailRemove(file) {
            const index = this.newProduct.detailImages.indexOf(file.url);
            if (index !== -1) {
                this.newProduct.detailImages.splice(index, 1);
                this.detailImageList.splice(index, 1);
            }
        },
        beforeUpload(file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', localStorage.getItem('SET_NAME'));

            this.uploadFile(formData);
            return false; // 阻止 el-upload 的默认上传行为
        },
        async uploadFile(formData) {
            try {
                const response = await service.post(this.uploadUrl, formData);
                if (formData.get('file').name === 'cover') {
                    this.handleCoverUploadSuccess(response);
                } else {
                    this.handleDetailUploadSuccess(response);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.$message.error('登录超时，请重新登录');
                } else {
                    this.$message.error('图片上传失败: ' + error);
                }
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

.search-bar {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
</style>