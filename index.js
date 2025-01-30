const express = require("express");
const app = express();

require("dotenv").config();

const cors = require("cors");
const dbConnect =  require("./config/dataconfig")

const productRouter = require("./routes/productroutes");

const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: ['', 'http://localhost:5173'],
    credentials: true           
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1",productRouter)

app.listen(PORT,()=>{
    console.log(`Server started at Port ${process.env.PORT}`)
})

dbConnect();