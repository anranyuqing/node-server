import { Router } from "express";
import connection from '../utils/mysql.js'
import { createToken } from '../utils/jsonwebtoken.js'
const router = Router()

router.post('/login', (req, res) => {
    const { account, password } = req.body
    connection.query('select * from user', (err, result) => {
        if (err) {
            console.log('查询失败', err)
            res.send({
                code: 500,
                message: '操作失败'
            })
            return
        } else {
            const target = result.find(el => el.account === account)
            if (target) {
                console.log('target', target.password, password)
                if (target.password === password) {
                    const token = createToken(account, password)
                    res.send({
                        code: 200,
                        message: '登录成功',
                        data: {
                            token
                        }
                    })
                } else {
                    res.send({
                        code: 500,
                        message: '密码错误',
                        data: null
                    })
                }
            } else {
                res.send({
                    code: 200,
                    message: '用户不存在',
                    data: null
                })
            }
        }
    })
})

export default router