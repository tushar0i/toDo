const express = require("express")
const { todoSchema, complSchema } = require("./inpvalid")
const app = express()
app.use(express.json())

const PORT = 3000

app.post('/todo',(req,res)=>{
    const takeInput = req.body
    const checkInput = todoSchema.safeParse(takeInput)
    if( !checkInput.success){
        res.status(411).json({
            message: "Wrong inputs sent"
        })
        return 
    }
    // sending data to the database
    res.json({ // just for testing things
        message:"everything is fine in here"
    })
})

app.get('/todo',(req,res)=>{
    // fetch data from backend and give it to frontend
})

app.put('/compleated', (req,res)=>{
    const takeInput = req.body
    const checkInput = complSchema.safeParse(takeInput)
    console.log(checkInput) // just for testing things
    if(!checkInput.success){
        res.status(411).json({
            message: "Wrong input sent"
        })
        return
    }
    // update the data base 
    res.json({// just for testing things
        message:"everything is fine in here"
    })
})

app.use((err,req,res,next)=>{
    console.error(err)
    res.json({
        message : "something is up with the servers try again after some time"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})


