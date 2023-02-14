//upload组件里的代码
<template>
  <div class="avatar">
    <div @mouseover="showBg = true" @mouseleave="showBg = false">
      <div class="bg" v-if="showBg" :style="`line-height:${imgHeight}`">
        点击上传
      </div>
      <input
        type="file"
        class="input-file"
        :style="`width:${imgWidth};height:${imgHeight};`"
        name="avatar"
        ref="avatarInput"
        @change="changeImage($event)"
        accept="image/gif,image/jpeg,image/jpg,image/png"
      />
      <img
        :src="avatar ? avatar : require('@/assets/man.jpg')"
        :style="`width:${imgWidth};height: ${imgHeight};`"
        name="avatar"
      />
    </div>
    <el-button
      class="text"
      :plain="true"
      @click="upload"
      v-if="file"
      type="primary"
      >确定上传</el-button
    >
  </div>
</template>

<script>
export default {
  name: "getProfile",
  data() {
    return {
      avatar: "",
      file: "",
      showBg: false,
    };
  },
  props: ["uploadType", "imgUrl", "imgWidth", "imgHeight"],
  created() {
    this.avatar = this.imgUrl;
  },
  methods: {
    changeImage: function (e) {
      let file = e.target.files[0];
      if (file) {
        this.file = file;
        let reader = new FileReader();
        let that = this;
        reader.readAsDataURL(file);
        reader.onload = function () {
          // 这里的this 指向reader
          that.avatar = this.result;
        };
      }
    },
    upload: function () {
      this.$message({
        message: "上传成功",
        type: "success",
      });
      this.$emit("upload", this.avatar);
    },
  },
};
</script>


<style scope>
.avatar {
  cursor: pointer;
  position: relative;
  width: 104px;
  height: 104px;
}
img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.avatar .input-file {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
.avatar .bg {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
}
.avatar .text {
  width: 100px;
  position: absolute;
  left: 150px;
}
</style>