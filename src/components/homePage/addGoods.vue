<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="饮品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="饮品价格">
        <el-input v-model="form.price"></el-input>
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
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    {{this.form}}
  </div>
</template>

<script>
export default {
  name: "addGoods",

  data() {
    return {
      form: {
        name: "",
        peice: "",
        desc: "",
        size: {
          dynamicTags: ["大杯", "中杯", "小杯"],
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
      } else if (obj == "sweet") {
        let inputValue = this.form.sweet.inputValue;
        if (inputValue) {
          this.form.sweet.dynamicTags.push(inputValue);
        }
        this.form.sweet.inputVisible = false;
        this.form.sweet.inputValue = "";
      }else if (obj == "temperature") {
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
  },
};
</script>

<style scoped>
</style>