const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder 
} = require('../controllers/orderController');



// Create a new order
router.post('/', createOrder); //user 

// Get all orders
router.get('/', getAllOrders); // admin 

// Get an order by ID
router.get('/:id', getOrderById); //user , admin 

router.put('/update',updateOrderStatus); // admin 

router.delete('/delete/:id',deleteOrder ); // admin 

module.exports = router;
