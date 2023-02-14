<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="饮品图片">
        <getProfile
          :uploadType="`head`"
          :imgWidth="`104px`"
          :imgHeight="`104px`"
          :imgUrl="imgUrl"
          @upload="getImgUrl"
        ></getProfile>
      </el-form-item>
      <el-form-item label="饮品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="饮品类型">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      <el-form-item label="饮品介绍">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>

      <el-form-item label="规格">
        <el-tag
          :key="tag"
          v-for="tag in form.size.dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose('size', tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="form.size.inputVisible"
          v-model="form.size.inputValue"
          ref="sizeSaveTagInput"
          size="small"
          @keyup.enter="handleInputConfirm('size')"
          @blur="handleInputConfirm('size')"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag"
          size="small"
          @click="showInput('size')"
          >+ New Tag</el-button
        >
      </el-form-item>
      <el-form-item label="定价">
        <el-tag
          :key="tag"
          v-for="tag in form.price.dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose('price', tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="form.price.inputVisible"
          v-model="form.price.inputValue"
          ref="priceSaveTagInput"
          price="small"
          @keyup.enter="handleInputConfirm('price')"
          @blur="handleInputConfirm('price')"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag"
          size="small"
          @click="showInput('price')"
          >+ New Tag</el-button
        >(请根据规格顺序填写)
      </el-form-item>
      <el-form-item label="甜度">
        <el-tag
          :key="tag"
          v-for="tag in form.sweet.dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose('sweet', tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="form.sweet.inputVisible"
          v-model="form.sweet.inputValue"
          ref="sweetSaveTagInput"
          size="small"
          @keyup.enter="handleInputConfirm('sweet')"
          @blur="handleInputConfirm('sweet')"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag"
          size="small"
          @click="showInput('sweet')"
          >+ New Tag</el-button
        >
      </el-form-item>
      <el-form-item label="温度">
        <el-tag
          :key="tag"
          v-for="tag in form.temperature.dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose('temperature', tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="form.temperature.inputVisible"
          v-model="form.temperature.inputValue"
          ref="temperatureSaveTagInput"
          temperature="small"
          @keyup.enter="handleInputConfirm('temperature')"
          @blur="handleInputConfirm('temperature')"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag"
          size="small"
          @click="showInput('temperature')"
          >+ New Tag</el-button
        >
      </el-form-item>
      <el-form-item label="包装">
        <el-tag
          :key="tag"
          v-for="tag in form.Packing.dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose('Packing', tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="form.Packing.inputVisible"
          v-model="form.Packing.inputValue"
          ref="packingSaveTagInput"
          size="small"
          @keyup.enter="handleInputConfirm('Packing')"
          @blur="handleInputConfirm('Packing')"
        >
        </el-input>
        <el-button
          v-else
          class="button-new-tag"
          size="small"
          @click="showInput('Packing')"
          >+ New Tag</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
    {{ this.form }}
    <button @click="profile">123456789</button>
  </div>
</template>

<script>
import cloud from "@/network/init";
import getProfile from "@/components/homePage/drinkInfo/getProfile.vue";
export default {
  name: "addGoods",
  components: {
    getProfile,
  },
  data() {
    return {
      form: {
        saleNumber: 0,
        img: "",
        name: "",
        type: "",
        desc: "",
        size: {
          dynamicTags: ["大杯", "中杯", "小杯"],
          inputVisible: false,
          inputValue: "",
        },
        price: {
          dynamicTags: ["20", "18", "15"],
          inputVisible: false,
          inputValue: "",
        },
        sweet: {
          dynamicTags: ["全糖", "7 分糖", "5 分糖中杯", "无糖"],
          inputVisible: false,
          inputValue: "",
        },
        temperature: {
          dynamicTags: ["热", "常温", "正常冰", "少冰", "去冰"],
          inputVisible: false,
          inputValue: "",
        },
        Packing: {
          dynamicTags: ["单杯保温袋", "双杯保温袋"],
          inputVisible: false,
          inputValue: "",
        },
      },
    };
  },
  methods: {
    handleClose(obj, tag) {
      if (obj == "size") {
        this.form.size.dynamicTags.splice(
          this.form.size.dynamicTags.indexOf(tag),
          1
        );
      } else if (obj == "price") {
        this.form.price.dynamicTags.splice(
          this.form.price.dynamicTags.indexOf(tag),
          1
        );
      } else if (obj == "sweet") {
        this.form.sweet.dynamicTags.splice(
          this.form.sweet.dynamicTags.indexOf(tag),
          1
        );
      } else if (obj == "temperature") {
        console.log("temp");
        this.form.temperature.dynamicTags.splice(
          this.form.temperature.dynamicTags.indexOf(tag),
          1
        );
      } else if (obj == "Packing") {
        this.form.Packing.dynamicTags.splice(
          this.form.Packing.dynamicTags.indexOf(tag),
          1
        );
      }
    },

    showInput(obj) {
      if (obj == "size") {
        this.form.size.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.sizeSaveTagInput.$refs.input.focus();
        });
      } else if (obj == "price") {
        this.form.price.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.priceSaveTagInput.$refs.input.focus();
        });
      } else if (obj == "sweet") {
        this.form.sweet.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.sweetSaveTagInput.$refs.input.focus();
        });
      } else if (obj == "temperature") {
        this.form.temperature.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.temperatureSaveTagInput.$refs.input.focus();
        });
      } else if (obj == "Packing") {
        this.form.Packing.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.packingSaveTagInput.$refs.input.focus();
        });
      }
    },

    handleInputConfirm(obj) {
      console.log(obj);
      if (obj == "size") {
        console.log(123);
        let inputValue = this.form.size.inputValue;
        if (inputValue) {
          this.form.size.dynamicTags.push(inputValue);
        }
        this.form.size.inputVisible = false;
        this.form.size.inputValue = "";
      } else if (obj == "price") {
        let inputValue = this.form.price.inputValue;
        if (inputValue) {
          this.form.price.dynamicTags.push(inputValue);
        }
        this.form.price.inputVisible = false;
        this.form.price.inputValue = "";
      } else if (obj == "sweet") {
        let inputValue = this.form.sweet.inputValue;
        if (inputValue) {
          this.form.sweet.dynamicTags.push(inputValue);
        }
        this.form.sweet.inputVisible = false;
        this.form.sweet.inputValue = "";
      } else if (obj == "temperature") {
        let inputValue = this.form.temperature.inputValue;
        if (inputValue) {
          this.form.temperature.dynamicTags.push(inputValue);
        }
        this.form.temperature.inputVisible = false;
        this.form.temperature.inputValue = "";
      } else if (obj == "Packing") {
        let inputValue = this.form.Packing.inputValue;
        if (inputValue) {
          this.form.Packing.dynamicTags.push(inputValue);
        }
        this.form.Packing.inputVisible = false;
        this.form.Packing.inputValue = "";
      }
    },

    profile() {
      cloud.chooseImage({
        success(res) {
          const tempFilePaths = res.tempFilePaths;
          this.tempPath = tempFilePaths[0];
          cloud
            .uploadFile({
              cloudPath: "example.png",
              filePath: tempFilePaths[0], // 文件路径
            })
            .then((res) => {
              // get resource ID
              console.log(res.fileID);
            })
            .catch((error) => {
              // handle error
              console.log(error, "err");
            });
        },
      });
    },

    //接收子组件emit的事件
    getImgUrl(data) {
      this.form.img = data;
    },
    errorInfo(info) {
      this.$message.error(info);
    },
    onSubmit() {
      // 等整个提交的时候再上传图片
      if (this.form.img == "") {
        this.errorInfo("图片未上传");
        return;
      }
      if (this.form.name.trim() == "") {
        this.errorInfo("饮品名称未填写");
        return;
      }
      if (this.form.type.trim() == "") {
        this.errorInfo("饮品类型未填写");
        return;
      }
      if (this.form.desc.trim() == "") {
        this.errorInfo("饮品介绍未填写");
        return;
      }
      if (this.form.size.dynamicTags.length == 0) {
        this.errorInfo("饮品规格未填写");
        return;
      }
      if (this.form.price.dynamicTags.length != this.form.size.dynamicTags.length) {
        this.errorInfo("饮品价格与规格不对应");
        return;
      }
      if (this.form.sweet.dynamicTags.length == 0) {
        this.errorInfo("饮品sweet未注明");
        return;
      }
      if (this.form.temperature.dynamicTags.length == 0) {
        this.errorInfo("饮品温度未注明");
        return;
      }
      if (this.form.Packing.dynamicTags.length == 0) {
        this.errorInfo("包装类型未注明");
        return;
      }
      cloud
        .callFunction({
          name: "addTea",
          data: {
            form: this.form,
          },
        })
        .then((res) => {
          this.list = res.result;
          this.$message({
            message: "成功添加",
            type: "success",
          });
        });
    },
  },
};
</script>

<style scoped>
</style>