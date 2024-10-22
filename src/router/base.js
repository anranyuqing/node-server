import { Router } from "express";

export const router = Router()

export function creatInterface(method, url, prefix, callback) {
    router[method](`/${prefix}/${url}`, callback)

    console.log('日志', `/${prefix}/${url}`)
}