const express = require('express');
const {
  addToCart,
  getCart,
  updateCartItem,
  deleteCartItem,
  deleteCart
} = require('../controllers/');


const router = express.Router();

// Add a product to the cart
router.post('/add', addToCart);

// Get the user's cart
router.get('/:id', getCart);

// Update cart item quantity
router.put('/update/:idUser', updateCartItem);
// Delete an item from the cart
router.delete('/delete/:itemId/:idUser', deleteCartItem);

router.delete('/delete/:idUser',deleteCart);

module.exports = router;
