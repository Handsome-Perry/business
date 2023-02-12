const cloud = window.cloud
let c1 = null
export async function init() {
  // 声明新的 cloud 实例
  c1 = new cloud.Cloud({
    // 必填，表示是未登录模式
    identityless: true,
    // 资源方 AppID 填自己的
    resourceAppid: 'wx27f51990f4721540',
    // 资源方环境 ID	填自己的
    resourceEnv: 'cloud1-5gqm3wdv60371909',
  })
  // 初始化
  await c1.init()
}
init()
export default c1