//firstly import fs(File System) module in your program
const { error } = require("console");
const fs=require("fs");
// Now create file and also write some content in that file 
// fs.writeFile("student.txt","Hello , this file is for students",(err)=>{
//     if(err)
//     {
//         console.log("Error");
//     }
//     else{
//         console.log("File created successfully");
//     }
// });
//now reading the file
// fs.readFile("Student.txt","utf-8",(err,data)=>{
//  if(err)
//  {
//     console.log("err");
//  }
//  else{
//     console.log("Content of File : ");
//     console.log(data);
//  }
// });
//update a file using appendFile method
//it will only add extra content to the already existing file
// fs.appendFile("student.txt"," Hi this is the appended text",(err)=>{
//     if(err)
//     {
//         console.log("Append Unsuccessfull");
//     }
//     else{
//         console.log("Append Successfull");
//     }
// });
// fs.readFile("Student.txt","utf-8",(err,data)=>{
//  if(err)
//  {
//     console.log("err");
//  }
//  else{
//     console.log("Content of File : ");
//     console.log(data);
//  }
// });
fs.unlink("student.txt",(err)=>{
   if(err)
   {
      console.error("Unable to delete file:", err.message);
    return;
   }
   else{
      console.log("File deletion successfull");
   }
});