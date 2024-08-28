import express, { json } from "express";
import router from './router/index.js'
const app = express()

//解决req.body
app.use(json())
//注册路由
app.use(router)
//启动服务
app.listen('8888', () => console.log('http://127.0.0.1:8888'))