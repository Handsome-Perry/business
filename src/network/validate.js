// 验证是否新用户注册，是新用户则注册，否则，提示报错
import router from "@/router"
import cloud from "./init"
export async function validate(username,pwd) {
  // 完成后正常使用资源方的已授权的云资源
  cloud.callFunction({
    name: "businessLogin",
    data:{
      username,
      pwd
    }
  }).then(res=>{
    // console.log(res.result);
    if (res.result) {
      // 验证成功
      router.push("Homepage");
    } else {
      // 用户名密码错误，请重新输入
      alert("用户名密码错误，请重新输入");
    }
  })
}