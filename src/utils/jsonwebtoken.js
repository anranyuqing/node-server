import jwt from 'jsonwebtoken'

const SECRET = 'NODRSERVER'

const EXPIRED = 60 * 60 * 24

export function createToken({ account, password }, expired = EXPIRED) {
    return jwt.sign({ account, password }, SECRET, { expiresIn: expired })
}

export function decodeToken(token) {
    return jwt.verify(token, SECRET)
}