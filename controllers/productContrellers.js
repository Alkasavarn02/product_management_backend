const Product = require("../schema/productSchema");

const createProduct = async (req,res) => {

    try {
        const { name, price, description} = req.body;

        if (!name || !price || !description) {
            return res.status(400).json({
                success: false,
                message: "Please provide all the required details carefully.",
            });
        }

        const newProduct = new Product({
            name,
            price,
            description,
        });

        await newProduct.save();

        res.status(201).json({
            message: "Product created successfully",
            product: newProduct
        });

    } catch(error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }

}

const getAllProduct = async(req,res) => {
    try {
        // find products.
        const products = await Product.find({})

        if(!products){
            return res.status(401).json({
                success: false,
                message: "products not Found",
            });
        }

        return res.status(200).json({
            success: true,
            data: products,
        });

    } catch(err) {
        return res.status(500).json({
            success: false,
            message: `Internal Server Error: ${err.message}`,
        });
    }

}

const deleteProduct = async(req,res) => {

    try {

        const { productId } = req.params;
    
        if(!productId){
            return res.status(401).json({
                success: false,
                message: "product not found",
            });
        }
    
        await Product.findByIdAndDelete(productId)

        const products = await Product.find({})
    
        return res.status(200).json({
            success: true,
            message: "Product delete successfully",
            data: products
        });

    } catch(err) {
        return res.status(500).json({
            success: false,
            message: `Internal Server Error: ${err.message}`,
        });
    }
    

}

module.exports = { createProduct, getAllProduct, deleteProduct}