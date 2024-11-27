import mongoose, { Schema } from "mongoose";

const Payment = new Schema({
    userId : { type: String , required: true},
    amount : { type: String , required: true},
    date : { type: Date , required: true }
})
const PaymentSchema = mongoose.model("paymentDetails ", Payment);
export default PaymentSchema;