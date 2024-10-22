import './auth.js'
import { router } from './base.js'
export function setUpRoute(app) {
    app.use(router)
}
