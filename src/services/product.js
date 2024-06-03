import Product from "../models/product"

export const serviceGetProducts = async () => {
    const products = await Product.find()
    return products
}

export const serviceCreateProducts = async (payload) => {
    const product = await Product.create(payload)
    return product
}