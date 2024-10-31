import express, { json } from "express";
import { setUpRoute } from './router/index.js'
import { join } from 'path'
const app = express()
app.use('/static', express.static('public'))
//解决req.body
app.use(json())
//注册路由
setUpRoute(app)
//启动服务
app.listen('8888', () => console.log('http://127.0.0.1:8888'))
