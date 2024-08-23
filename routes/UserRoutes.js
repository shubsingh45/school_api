import express from 'express'
import { AddSchool, ListOfSchool } from '../controllers/SchoolController.js'


const router = express.Router()
router.post('/addSchool', AddSchool)
router.get('/listSchools', ListOfSchool)

export default router