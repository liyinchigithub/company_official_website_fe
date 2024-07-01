<template>
	<div id="app">
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
