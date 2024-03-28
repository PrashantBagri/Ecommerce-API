import mongoose, {Schema} from "mongoose";

const productImagesSchema = new Schema({
    image :{
        type : String,
        required: true
    },
    caption : {
        type: String,
    }
}, {timestamps : true})

export const  productImages =  mongoose.model("productImages", productImagesSchema)