import Router from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middelware.js";
import { addProduct, removeProduct, getAllProducts, getProduct,addToCart, removeFromCart } from "../controllers/product.controller.js";
import {
  brandValidator,
  nameValidator,
  stockValidator,
  descriptionValidator,
  priceValidator,
} from "../utils/validators/product.validator.js";

const router = Router();

router.post(
  "/add-product",
  verifyJWT,
  upload.none(),
  nameValidator(),
  descriptionValidator(),
  stockValidator(),
  brandValidator(),
  priceValidator(),
  addProduct
);

router.post(
    "/remove-product/:productId",
    verifyJWT,
    removeProduct
)

router.get("/", getAllProducts);

router.get("/:productId", getProduct);

router.post("/:productId/add-to-cart", verifyJWT , addToCart)

router.post("/:productId/remove-from-cart", verifyJWT , removeFromCart)
export default router;
