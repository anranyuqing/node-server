import { Router } from "express";
import { authentication } from './guard/index.js'
export const router = Router()

export function creatInterface(method, url, prefix, callback) {
    router[method](`${prefix}/${url}`, callback)
}

router.use(authentication)