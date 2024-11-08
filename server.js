const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mysqlPool = require("./config/db");

//configure dotenv
dotenv.config();    // if dotenv is in other file then we can give the path inside bracket()


//rest object
const app= express();

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/v1/student', require("./routes/studentRoutes"));

app.get('/test', (req,res)=>{
    res.status(200).send('<h1>Node js Mysql APP  </h1>');
} ) ;

//port
const PORT = process.env.PORT || 8000;  //  if there is issue in port then it will take 8000 port as default 


mysqlPool.query('SELECT 1')
.then(()=> {
    console.log("My SQL DB is Connected");

    //listen
app.listen(PORT, ()=> {
    console.log(`Service Running on port ${process.env.PORT}`);
});
})
.catch((error) => {
    console.log(error);
});

