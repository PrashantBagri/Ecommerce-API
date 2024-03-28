import Router from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import { orderProduct } from "../controllers/order.controller.js";
import { upload } from "../middlewares/multer.middelware.js";

const router = Router();

router.post("/:productId", verifyJWT, upload.none(),orderProduct)

export default router;