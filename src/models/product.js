import mongoose from "mongoose";
import Joi from "joi";

const productSchema = new mongoose.Schema(
    {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    count: {type: Number, required: true},
    countryCode: {type: Number, required: true},
    isPopular: {type: Boolean, default: false}
    }, 
    {versionKey: false});

const Product = mongoose.model('product', productSchema)

export const createProductSchema = Joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    count: joi.number().required(),
    countryCode: joi.number().required(),
    isPopular: joi.boolean().default(false)
})

export default Product