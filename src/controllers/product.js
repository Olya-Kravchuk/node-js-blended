import { serviceCreateProducts, serviceGetProducts } from "../services/product.js"

export const getProducts = async (req, res) => {
    const products = await serviceGetProducts()
    res.json({products})
}

export const createProduct = async (req, res) => {
    const product = await serviceCreateProducts(req.body)
    res.json({product})
}