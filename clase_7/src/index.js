import express from 'express'
import __dirname from "./utils/index.js";
//settings
const app = express()
app.set('PORT', 3000)


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routes
app.get('/',(req,res)=>{
    res.json({title: 'Home Page'})
})

//listeners
app.listen(app.get("PORT"),()=>{
    console.log(`Server on port http://localhost:${app.get("PORT")}`);
})
