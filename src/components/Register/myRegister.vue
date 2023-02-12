<template>
  <div class="container">
    <div class="main">
      <!-- 整个注册盒子 -->
      <div class="loginbox">
        <!-- 左侧的注册盒子 -->
        <div class="loginbox-in">
          <div class="userbox">
            <span class="iconfont">&#xe817;</span>
            <input class="user" id="user" v-model="name" placeholder="用户名" />
          </div>
          <br />
          <div class="pwdbox">
            <span class="iconfont">&#xe775;</span>
            <input
              class="pwd"
              id="password"
              v-model="pwd"
              type="password"
              placeholder="密码"
            />
          </div>
          <br />
          <div class="pwdbox">
            <span class="iconfont">&#xe775;</span>
            <input
              class="pwd"
              id="re_password"
              v-model="repwd"
              type="password"
              placeholder="确认密码"
            />
          </div>
          <br />
          <button type="primary" class="register_btn" @click="register">
            Register
          </button>
          <br>
          <span type="primary" class="login" @click="toLogin">
            已有账号返回登录
          </span>
        </div>

        <!-- 右侧的注册盒子 -->
        <div class="background">
          <div class="title">
            Welcome to bussniss System Management Center{{ name + pwd + repwd }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { judgeIsExist } from "network/register";
export default {
  name: "myLogin",

  data: function () {
    return {
      name: "",
      pwd: "",
      repwd: "",
      user_list: [
        {
          username: "admin",
          password: "123",
        },
      ],
    };
  },
  methods: {
    register() {
      if (this.name == "" || this.pwd == "" || this.repwd == "") {
        alert("请完整填写注册信息");
        return;
      }
      if (this.pwd != this.repwd) {
        alert("两次输入的密码不一致,请重新输入");
        return;
      }
      judgeIsExist(this.name, this.pwd);
    },
    toLogin(){
      this.$router.push("/")
    }
  },
};
</script>

<style scoped>
.loginbox {
  display: flex;
  position: absolute;
  width: 800px;
  height: 400px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #4e655d;
}
.loginbox-in {
  background-color: #89ab9e;
  width: 240px;
}
.userbox {
  margin-top: 120px;
  height: 30px;
  width: 230px;
  display: flex;
  margin-left: 25px;
}
.pwdbox {
  height: 30px;
  width: 225px;
  display: flex;
  margin-left: 25px;
}

.background {
  width: 570px;
  background-image: url("../../imgs/Christmas_Trees.png");
  background-size: cover;
  font-family: sans-serif;
}
.title {
  margin-top: 320px;
  font-weight: bold;
  font-size: 20px;
  color: #4e655d;
}
.title:hover {
  font-size: 21px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.uesr-text {
  position: left;
}
input {
  outline-style: none;
  border: 0;
  border-bottom: 1px solid #e9e9e9;
  background-color: transparent;
  height: 20px;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}
/* input::-webkit-input-placeholder{
    color:#E9E9E9;
 } */
input:focus {
  border-bottom: 2px solid #445b53;
  background-color: transparent;
  transition: all 0.2s ease-in;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}
input:hover {
  border-bottom: 2px solid #445b53;
  background-color: transparent;
  transition: all 0.2s ease-in;
  font-family: sans-serif;
  font-size: 15px;
  color: #445b53;
  font-weight: bold;
}

input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #89ab9e inset !important;
  -webkit-text-fill-color: #445b53;
}

input:-webkit-autofill::first-line {
  font-size: 15px;
  font-weight: bold;
}
.log-box {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 174px;
  margin-left: 30px;
  color: #4e655d;
  margin-top: -5px;
  align-items: center;
}
.log-box-text {
  color: #4e655d;
  font-size: 12px;
  text-decoration: underline;
}
.register_btn {
  background-color: #5f8276; /* Green */
  border: none;
  color: #fafafa;
  padding: 7px 35px;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  border-radius: 20px;
  outline: none;
  margin: auto;
}
.register_btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  background-color: #0b5137;
  transition: all 0.2s ease-in;
}

.warn {
  margin-top: 60px;
  margin-right: 110px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 17px;
}

.register_btn:hover {
  font-weight: bold;
  cursor: pointer;
}
.login{
  font-size: small;
}
.login:hover {
  text-decoration: underline;
  cursor: pointer;
}
@font-face {
  font-family: "iconfont";
  src: url("../../font/iconfont.eot");
  src: url("../../font/iconfont.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("../../font/iconfont.woff2") format("woff2"),
    url("../../font/iconfont.woff") format("woff"),
    url("../../font/iconfont.ttf") format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("../../font/iconfont.svg#iconfont") format("svg");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 22px;
  color: #4e655d;
  margin-right: 10px;
  margin-top: 3px;
}

.icon-key:before {
  content: "\e775";
}

.icon-account:before {
  content: "\e817";
}
</style>