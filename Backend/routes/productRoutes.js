const express = require("express");
/*const {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/);*/
const router = express.Router();
 
 
router.post("/", createProduct); // avec image 
router.post("/", addProduct); // avec image 
router.get("/product/:id", getaProduct);
router.put("/product/:id",  updateProduct);  // modif d'image 
router.delete("/product/:id", deleteProduct); // suppression d'image from uploads 
router.get("/product", getAllProduct);
 
module.exports = router;