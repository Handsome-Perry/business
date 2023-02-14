<template>
  <div>
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="流水单号">流水单号</el-tab-pane>
      <el-tab-pane label="销售情况分析">销售情况分析</el-tab-pane>
      <el-tab-pane label="用户管理"><adminInfo></adminInfo></el-tab-pane>
      <el-tab-pane label="饮品信息管理"><addGoods></addGoods></el-tab-pane>
      <el-tab-pane label="会员管理">会员管理</el-tab-pane>
      <el-tab-pane label="会员优惠券管理">会员管理</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import adminInfo from "./adminInfo";
import addGoods from "./drinkInfo/addGoods.vue"
export default {
  data() {
    return {
      tabPosition: "left",
    };
  },
  components:{
    adminInfo,
    addGoods
  }
};
</script>

<style scoped lang="less">
</style>