import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    name :{
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    stock : {
        type : Number,
        required:true
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : "Category",
        // required : true
    },
    brand:{
        type : String,
        required: true
    },
    images : [
        {
            type : Schema.Types.ObjectId,
            ref : "productImages"     
        }
    ],
    seller : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    isFeatured : {
        type: Boolean
    },
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema);

