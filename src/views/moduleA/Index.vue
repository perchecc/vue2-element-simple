<template>
  <router-view />
</template>

<script>
export default {
  name: "ModuleA",
};
</script>

<style scoped>
/* loading 总是不居中，加了样式强制居中 */
::v-deep .el-loading-spinner {
  display: flex;
  justify-content: center;
}
</style>
