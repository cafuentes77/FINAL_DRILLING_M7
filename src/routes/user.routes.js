import { Router } from 'express'
import { 
    createUser, 
    findUserById, 
    findAll, 
    updateUserById, 
    deleteUserById } from '../controllers/user.controller.js'



const  router = Router()

router.post('/user', createUser)
router.get('/user/:id', findUserById)
router.get('/user', findAll)
router.put('/user/:id', updateUserById)
router.delete('/user/:id', deleteUserById)



export default router