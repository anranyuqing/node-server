import { Router } from "express";

export const router = Router()

export function creatInterface(method, url, prefix, callback) {
    router[method](`${prefix}/${url}`, callback)
}