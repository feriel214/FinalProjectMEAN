const express = require("express");
const cors = require('cors');
const router = express.Router();
const {
  addUser,
  allUsers,
  singleUser,
  editUser,
  deleteUser,
  registerUser,
  Login
} = require('../controllers/userController');

// Set up CORS headers for this router
router.use(cors());

router.post('/addUser', addUser);
router.get('/allusers', allUsers);
router.get('/user/:id', singleUser);
router.put('/user/edit/:id', editUser);
router.delete('/user/delete/:id', deleteUser);
router.post('/register', registerUser);
router.post('/login', Login);

module.exports = router;
