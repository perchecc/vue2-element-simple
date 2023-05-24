<template>
  <div class="w-full h-full p-4">pageA Index</div>
</template>

<script>
// import { queryGoodsList } from "@/api/moduleA";
export default {
  name: "ModuleAPageAIndex",
  data() {
    return {};
  },
  created() {},
  methods: {
    // 获取列表数据
    // async getListData() {
    //   let data = {
    //     page: this.page,
    //     pageSize: 10,
    //     commStatus: this.tabActive,
    //     typeName: this.searchCategory,
    //     title: this.searchTitle,
    //   };
    //   this.loading = true;
    //   const { resData, resCode } = await queryGoodsList(data);
    //   this.loading = false;
    //   if (resCode === 0) {
    //     this.tableData = resData.pageList;
    //     this.totalCount = resData.totalCount;
    //   }
    // },
  },
};
</script>

<style scoped lang="scss"></style>
