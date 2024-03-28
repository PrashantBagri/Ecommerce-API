import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json({limit : '100kb'}));
app.use(express.urlencoded({extended : true, limit : "100kb"}))
app.use(cookieParser())

import userRouter from "./routes/user.route.js"
import productRouter from "./routes/product.route.js"
import orderRouter from "./routes/order.route.js"

app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/orders", orderRouter)


export default app;
