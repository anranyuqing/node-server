import { Router } from "express";
import connection from '../utils/mysql.js'
import { createToken } from '../utils/jsonwebtoken.js'
const router = Router()

router.post('/login', (req, res) => {
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
                code: 200,
                message: '用户不存在'
            })
        }

        if (target.password !== password) {
            return res.send({
                code: 200,
                message: '密码错误'
            })
        }

        res.send({
            message: '用户不存在',
            data: null
        })

    })
})

export default router