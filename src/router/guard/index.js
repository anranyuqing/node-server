import { decodeToken } from '../../utils/jsonwebtoken.js'

const whitelist = ['/auth/login']

export function authentication(req, res, next) {
    console.log('接受请求', req.url)
    if (whitelist.includes(req.url)) {
        next()
    } else {
        try {
            const { cstoken } = req.headers
            const data = decodeToken(cstoken)
            next()
        } catch {
            res.status(401).json()
        }
    }
}