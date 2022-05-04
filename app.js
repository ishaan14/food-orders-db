const express=require('express');
const app=express();
const mongoose=require('mongoose');
const seedDb=require('./seed')
const cors=require('cors');


mongoose.connect('process.env.MONGO_URL')
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log(err);
});



seedDb();
app.use(express.json());
app.use(cors(
    {
        origin:['http://localhost:3000'],
        credentials:true
    }
))


const foodRoutes=require('./api/foodRoutes');


app.get('/hello',(req,res)=>{
    res.status(200).json({msg:"Hello from the server"});
})


app.use(foodRoutes);


const port=process.env.PORT || 8000 

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
})