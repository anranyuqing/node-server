import './auth.js'
import { router } from './base.js'
export function setUpRoute(app) {
    console.log('router', router)
    app.use(router)
}
