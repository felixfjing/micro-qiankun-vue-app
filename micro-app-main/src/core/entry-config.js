const isDev = process.env.NODE_ENV === 'development'

export default {
  Micro_App_Message: !isDev ? 'https://micro-qiankun-message.vercel.app/' : 'http://localhost:10100',
  Micro_App_Order: 'http://localhost:10200',
  Micro_App_User: !isDev ? 'https://micro-qiankun-user.vercel.app/' : 'http://localhost:10300'
}
