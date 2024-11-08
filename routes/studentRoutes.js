const express=require('express');
const { getStudents, getStudentsByID, createStudent, updateStudent } = require('../controllers/studentController');

//route object
const router = express.Router();

//get all LIST 
router.get('/getall',getStudents);

// get student by ID
router.get('/get/:id', getStudentsByID)


// create student //post
router.post('/create',createStudent);


//update student //put 
router.put('/update/:id',updateStudent);

module.exports=router;