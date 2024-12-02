import mongoose, { Schema } from "mongoose";

export const Category = new Schema({
    category: { type: String, required: true},
    // subCategory: { type: String, required: true }
})

 const AdminCategory = mongoose.model("categories",Category)
 export default AdminCategory
