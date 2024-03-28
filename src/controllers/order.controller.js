import asyncHandler from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";
import { Order } from "../models/order.model.js";
import ApiResponse from "../utils/ApiResponse.js";

const orderProduct = asyncHandler(async(req, res)=>{
    const user = req.user;
    const {productId} = req.params
    const {address, quantity} = req.body;
    const product = await Product.findById(productId)
    const orderPrice = product.price * quantity;

    const items = {
        productId,
        quantity
    }

    const order = await Order.create({
        
            user,
            address,
            items,
            orderPrice
        
    })

    order.save();



    return res.status(200).json(new ApiResponse(200, order, "Order Created"))

})

export {orderProduct}