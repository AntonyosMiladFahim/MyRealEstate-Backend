import express from "express"
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute)

// console.log("testttttt");
// console.log("testttttt");
// app.use("/api/test",(req,res)=>{
//     res.send("It WORKs!!!!!!")
// });
// app.use("/api/register",(req,res)=>{
//     res.send("It WORKs!!!!!!")
// });
// app.use("/api/login",(req,res)=>{
//     res.send("It WORKs!!!!!!")
// });
// app.use("/api/logout",(req,res)=>{
//     res.send("It WORKs!!!!!!")
// });
// app.use("/api/posts/",(req,res)=>{
//     res.send("It WORKs!!!!!!")
// });
// app.use("/api/posts/",(req,res)=>{
//     res.send("It WORKs!!!!!!")
// });
// app.use("/api/posts/123321",(req,res)=>{
//     res.send("It WORKs!!!!!!")
// });
app.listen((8800),()=>{
    console.log("server is working");
});