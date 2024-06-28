<template>
  <div class="search">
    <div v-for="(item, i) in options" :key="item.searchValue" :class="i != 0 ? 'item' : ''">
      <el-input v-model="item.value" clearable :placeholder="item.label" size="small" />
    </div>
    <slot></slot>
    <div class="item">
      <el-button type="primary" @click="search" size="small">搜索</el-button>
    </div>
    <slot name="add"></slot>
  </div>
</template>
<script>
export default {
  name: "Search",
  components: {},
  props: {
    options: {
      type: Array,
    },
  },
  data () {
    return {
      value: "",
      searchValue: "",
    };
  },
  created () { },
  methods: {
    search () {
      this.$emit("search", this.options);
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  .item {
    margin-left: 15px;
  }
}
</style>
