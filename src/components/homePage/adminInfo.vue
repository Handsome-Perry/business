<template>
  <div>
    <el-descriptions
      class="margin-top"
      title="╭( `∀´ )╯"
      :column="4"
      border
      v-for="item in list"
      :key="item._id"
    >
      <template v-slot:extra>
        <el-button type="primary" size="small">操作</el-button>
      </template>
      <el-descriptions-item>
        <template v-slot:label>
          <i class="el-icon-tickets"></i>
          _id
        </template>
        <el-tag size="small">{{ item._id }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template v-slot:label>
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{ item.username }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template v-slot:label>
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        {{ item.phoneNumber }}
      </el-descriptions-item>

      <el-descriptions-item>
        <template v-slot:label>
          <i class="el-icon-message"></i>
          邮箱
        </template>
        {{ item.email }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
import cloud from "@/network/init";
export default {
  name: "adminInfo",
  data() {
    return {
      tabPosition: "left",
      size: "",
      list: [],
    };
  },
  created() {
    cloud.callFunction({
        name: "allBusiness",
      })
      .then((res) => {
        this.list = res.result
      });
  },
};
</script>

<style>
.margin-top {
  margin-top: 20px;
  flex:0 0 auto;
}
</style>