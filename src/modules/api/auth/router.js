import { Router } from 'express'
import { login } from './controller'

const router = new Router()

router.get('/', login)

export default router