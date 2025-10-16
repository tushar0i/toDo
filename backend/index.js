const express = require("express")
const { todoSchema, complSchema } = require("./inpvalid")
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const { todoModel } = require("./database")
const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))
const PORT = 3000

app.post('/todo',async (req,res)=>{
    const takeInput = req.body
    const checkInput = todoSchema.safeParse(takeInput)
    if( !checkInput.success){
        res.status(411).json({
            message: "Wrong inputs sent"
        })
        return 
    }
    await todoModel.create({
        title: takeInput.title,
        description: takeInput.description,
        completed: false
    })
    res.json({ 
        message:"Task added successfully"
    })
})

app.get('/todo',async (req,res)=>{
    const todos = await todoModel.find({})
    res.json({
        todos
    })
})

app.put('/compleated',async (req,res)=>{
    const takeInput = req.body
    const checkInput = complSchema.safeParse(takeInput)
    if(!checkInput.success){
        res.status(411).json({
            message: "Wrong input sent"
        })
        return
    }
    await todoModel.findByIdAndUpdate( req.body.id,{
        completed: true
    })
    res.json({
        message:"Marked as done"
    })
})

app.use((err,req,res,next)=>{
    console.error(err)
    res.json({
        message : "something is up with the servers try again after some time"
    })
})


async function main() {
    await mongoose.connect(dotenv.parsed.MONGODB_URL)
    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}

main()
