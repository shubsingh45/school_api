import express from 'express'
import { AddSchool, ListOfSchool, Test } from '../controllers/SchoolController.js'


const router = express.Router()
router.post('/addSchool', AddSchool)
router.get('/listSchools', ListOfSchool)
router.get('/', Test)
export default router
