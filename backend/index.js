
const express = require("express")
const app = express()
app.use(express.json())
const PORT = 3000

app.post('/todo',(req,res)=>{
    console.log('hi from the todo')
})

app.get('/todo',(req,res)=>{
    console.log('hi from the todo')
})

app.put('/compleated', (req,res)=>{
    console.log('hi from the todo')
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


