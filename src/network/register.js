import router from "@/router"
import cloud from "./init"
export async function judgeIsExist(username, pwd, email, phone) {
  cloud.callFunction({
    name: "judgeIsExist",
    data: {
      username,
      pwd, 
      email, 
      phone
    }
  }).then(res => {
    // console.log(res.result);
    if (!res.result) {
      // 验证成功,已经注册过了
      alert("该用户已注册")
    } else {
      alert("成功注册，即将跳转到登录页");
      setTimeout(() => {
        router.push("/")
      }, 1000);
    }
  })
}