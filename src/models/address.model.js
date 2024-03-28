import mongoose, {Schema} from "mongoose";

const addressSchema = new Schema({
    streetAddress:{
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required: true
    },
    zipCode : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required: true
    }
}, {timestamps : true});

export const Address =  mongoose.model("Address", addressSchema);