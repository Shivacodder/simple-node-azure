require('dotenv').config()
const express=require('express')
const app=express()
const helloRouter=require('/routes/hello')

app.use(express.json())

app.use('/hello', helloRouter)

app.get('/',(req,res)=>{
    res.send('welcome to azure nodejs')
})

const PORT=process.env.PORT||3002
app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))