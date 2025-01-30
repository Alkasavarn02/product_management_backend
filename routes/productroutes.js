const express = require("express");
const { createProduct, getAllProduct, deleteProduct } = require("../controllers/productContrellers");

// const IsAuth = require("../middlewares/auth");
const router = express.Router();

// create route to register new product
router.post("/createproduct",createProduct)

// create route to register new product
router.get("/getAllProduct",getAllProduct)

// create route to register new product
router.delete("/deleteProduct/:productId",deleteProduct)


module.exports = router;