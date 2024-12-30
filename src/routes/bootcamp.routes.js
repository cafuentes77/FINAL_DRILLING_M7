import { Router } from 'express'
import { 
    addUser, 
    createBootcamp, 
    findAll, 
    findById } from '../controllers/bootcamp.controller.js'


const  router = Router()

router.post('/bootcamp', createBootcamp)
router.get('/bootcamp/:id', findById)
router.get('/bootcamp', findAll)
router.post('/bootcamp/:bootcampId', addUser)
router.get('/user', findAll)




export default router