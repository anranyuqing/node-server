import { creatInterface } from './base.js'
import connection from '../utils/mysql.js'
import { createToken, decodeToken } from '../utils/jsonwebtoken.js'
import qrcode from 'qrcode'
const PREFIX_URL = '/auth'

creatInterface('post', 'login', PREFIX_URL, (req, res) => {
    const { account, password } = req.body
    connection.query('select * from user', (err, result) => {
        if (err) {
            res.status(500).send({
                message: '操作失败'
            })
            return
        }
        const target = result.find(el => el.account === account)
        if (!target) {
            return res.status(500).send({
                code: '500',
                message: '用户不存在'
            })
        }

        if (target.password !== password) {
            return res.send({
                code: '500',
                message: '密码错误'
            })
        }
        const token = createToken({ account, password })
        res.send({
            code: '200',
            message: '登录成功',
            data: {
                token
            }
        })
    })
})

creatInterface('get', 'permissionInfo', PREFIX_URL, (req, res) => {

    connection.query('select * from auth_menu', (err, result) => {
        if (err) {
            res.status(500).json({
                code: '500',
                msg: '数据查询异常'
            })
            return console.error(err)
        }
        res.json({
            code: '200',
            data: result
        })
    })
})

creatInterface('get', 'qrcode', PREFIX_URL, async (req, res) => {
    const code = await qrcode.toDataURL(`http://172.18.10.122:8888/static/index.html`)
    res.json({ code })
})
