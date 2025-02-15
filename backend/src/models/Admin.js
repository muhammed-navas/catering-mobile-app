import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema ({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const Admin = mongoose.model('Admin',AdminSchema);
export default Admin;


// const AdminRegisterSchema = new Schema ({
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })
// export const AdminRegister = mongoose.model('AdminRegister',AdminRegisterSchema);