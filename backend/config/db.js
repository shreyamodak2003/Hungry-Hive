import mongoose from "mongoose";

 export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://shreya2003:shreya2003@mern-stack.q6cdgp2.mongodb.net/food-app").then(()=>console.log("DB Connected"));
}