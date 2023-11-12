import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
 
const PORT = process.env.PORT || 5000


const app = express();






app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limi: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

const url = process.env.URL
mongoose.connect(url)
.then(()=>{
    app.listen(PORT, ()=>{
          console.log(`server running on port ${PORT}`)
    })
}).catch(()=>{
    console.log(`no connection`)
})

//  mongoose.set('useFindAndModify', false)