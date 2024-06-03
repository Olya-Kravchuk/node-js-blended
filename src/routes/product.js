import { Router } from "express";
import wrapper from "../utils/wrapper.js";
import { createProduct, getProducts } from "../controllers/product.js";
import validation from "../middlewares/validation.js";
import { createProductSchema } from "../models/product.js";

const route = Router()

route.get('/', wrapper(getProducts))

route.post('/', validation.body(createProductSchema), wrapper(createProduct))

export default route