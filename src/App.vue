<template>
	<div id="app">
    <!-- 回到顶部 -->
    <el-backtop :bottom="60"></el-backtop>
    <!-- 路由 -->
		<router-view/>
	</div>
</template>

<style lang="scss">
@media (max-width: 768px) {
  #app {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  #app {
    padding: 5px;
  }
}
</style>
