// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//     });

const express=require("express");
const app=express();
const dotenv=require("dotenv");

dotenv.config();
const PORT =process.env.PORT ;
app.listen(PORT,()=>{
    console.log(`Application is running on port ${PORT}`)
})

app.get("/",(req,res)=>
{
    console.log(`app is running on port ${PORT}`);
    res.send({
        1: "Hi",
        2:"My name is Shan"
    });
})


// async function getUsers()
// {
//     const response=await fetch("https://jsonplaceholder.typicode.com/users");

//     const data=await response.json();
//     console.log(data);
// };
//  getUsers();