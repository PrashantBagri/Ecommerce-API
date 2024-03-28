import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    address : {
        type : String,
    },
    items : [
        {
            product : {
                type : Schema.Types.ObjectId,
                ref : "Product"
            },
            quantity : {
                type : Number,
                required : true,
                default : 1
            }
        }
    ],
    orderPrice :{
        type: Number,
        require : true
    }
}, {timestamps : true})

export const Order = mongoose.model("Order", orderSchema)