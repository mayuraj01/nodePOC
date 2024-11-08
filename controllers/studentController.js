const db = require("../config/db");

// const getStudents= async()=> {
//     try{
//         const data = await db.query('SELECT * FROM students')
//         if(!data){
//             return res.status(404).send({
//                 success: false,
//                 message: 'No Records Found'
//             });
//         }
//     }catch(error){
//         console.log(error)
//             res.status(500).send({
//             success: false,
//             message: 'Error in Get ALL Student API',
//             error
//         })
//     }
// };



const getStudents = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM student');
        if (!data || data.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No Records Found'
            });
        }
        res.status(200).send({
            success: true,
            totalLength: data.length,
            data:data
        });
    } catch (error) {
        console.log("Error in Get ALL Student API:", error);
        res.status(500).send({
            success: false,
            message: 'Error in Get ALL Student API',
            error
        });
    }
};


// get stdent by id 
const getStudentsByID = async(req,res)=> {
    try{
        const studentId = req.params.id
        if(!studentId){
            return res.status(404).send({
                success: false,
                message: 'Invalid or provide student id'
            })
        }
        const data = await db.query(`SELECT * FROM student WHERE id=?` ,[studentId])
        if(!data){
            return res.status().send({
                success: false,
                message: 'No record Found '
            })

        }
        res.status(200).send({
            success: true,
            studentDetails: data[0]
        })
    
    }catch(error){
    console.log(error)
    res.status(500).send({
        success: false,
        message: 'Error in GET student by id API',
        error
    })
    }
}


//create student //post
const createStudent = async(req,res)=>{
    try{
        const {name,roll_no, fees, medium}= req.body
        if(!name || !roll_no || !fees || !medium){
            return res.status(500).send({
                success: false,
                message: ' Please provide all fields'

            })
        }
        const data = await db.query(`INSERT INTO student (name , roll_no,fees,medium ) VALUES (?,?,?,? )`,
            [name,roll_no,fees,medium])
            if(!data){
                return res.status(404).send({
                    success: false,
                    message: 'Error In INSERT QUERY'
                })
            }
            res.status(201).send({
                success: true,
                message: 'Student record added'
            })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Create Student API ",
            error
        })
    }

};

//update student 
const updateStudent = async(req,res)=> {
    try{
        const studentId = req.params.id
        if(!studentId){
            return res.status(404).send({
                success: false,
                message: " Invalid ID"
            })
        }
        const {name,roll_no, fees, medium}= req.body 
        const data = await db.query(`UPDATE student SET name=? ,roll_no=?, fees=?, medium=? WHERE id = ?`,
            [ name,roll_no, fees, medium]
        )
        if(!data){
            return res.status(500).send({
                success: false,
                message: "Error in update data"
            })
        }

        res.status(200).send({
            success: true,
            message: "Student detail is updated "
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message: " Error in Update API",
            error
        })
    }
}

module.exports = { getStudents, getStudentsByID, createStudent,updateStudent };


