import { creatInterface } from './base.js'
import connection from '../utils/mysql.js'
import { createToken } from '../utils/jsonwebtoken.js'

const PREFIX_URL = 'auth'

creatInterface('post', '/login', PREFIX_URL, (req, res) => {
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
            return res.send({
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
        const token = createToken()
        res.send({
            code: '200',
            message: '登录成功',
            data: {
                token
            }
        })

    })
})

creatInterface('post', '/login', PREFIX_URL, (req, res) => {
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
            return res.send({
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
        const token = createToken()
        res.send({
            code: '200',
            message: '登录成功',
            data: {
                token
            }
        })

    })
})

export default {}