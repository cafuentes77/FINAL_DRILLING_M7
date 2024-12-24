import { Router } from 'express'
import { createBootcamp } from '../controllers/bootcamp.controller.js'


const  router = Router()

router.post('/bootcamp', createBootcamp)


export default router