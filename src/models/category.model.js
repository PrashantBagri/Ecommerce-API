import mongoose , {Schema} from "mongoose";

const categorySchema = new Schema({
    name :{
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String
    },
    items  : [
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
    ]
}, {timestamps : true})

export const Category = mongoose.model("Category", categorySchema);