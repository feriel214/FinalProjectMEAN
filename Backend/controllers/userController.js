const User=require('../models/userModel');
const multer=require('multer'); // npm i multer 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let filename='';

const mystorage=multer.diskStorage({
  destination:'./uploads',
  filename:(req,file,cb)=>{
    
    //creation of unique file name 
    let date=Date.now();
    let fl=date+'.'+file.mimetype.split('/')[1];
    cb(null,fl);
    filename=fl; // pour qu'on puisse save le nome du fichier dans le database 
  }
})
const upload=multer({storage:mystorage})

exports.addUser=async(req,res)=>{
    try{
       //upload file works 
       //test par rapport au dossier uploads 
       upload.single('image')(req,res,async function(err){
        if (err instanceof multer.MulterError){
          return res.status(500).json({message:err})
        } else if(err){
          return res.status(500).json({message:err})
        }
      
        const newUser=new User(req.body) ;
        newUser.imageURL=filename; 
        console.log("newUser",newUser)
        const savedUser=await newUser.save();
        res.status(201).json(savedUser)
      })
    }catch(err){
        res.status(500).json({message:err})
    }
}

exports.allUsers=async(req,res)=>{
    try {
        const usersList = await User.find();
        res.status(200).json(usersList);
      } catch (error) {
        res.status(500).json({ message: error });
      }
}


exports.singleUser=async(req,res)=>{
    try{
        //const userSearched = await User.findById(req.params.id)
        const userSearched = await User.findOne({_id:req.params.id})
       console.log("userSearched",userSearched); 
       console.log("!userSearched",!userSearched); 
        if (!userSearched) {
            res.status(404).json({ message: "User not found check the id !!!! " });
          } else {
            res.status(200).json(userSearched);
          }
    }catch(err){
        res.status(500).json({message:err})
    }
}

exports.editUser=async(req,res)=>{
    try {
        const userId = req.params.id;
        const userExist = await User.findById(userId);
        if (!userExist) {
          res.status(404).json({ message: "User not found check the id !!!! " });
        } else {
          const newUserData = req.body;
          await User.findByIdAndUpdate(userId, newUserData, { new: true });
          res.status(200).json("user updated sucessfully");
        }
      } catch (error) {
        res.status(500).json({ message: error });
      }
}
exports.deleteUser=async(req,res)=>{
    try {
        const userId = req.params.id;
        const userExist = await User.findById(userId);
        if (!userExist) {
          res.status(404).json({ message: "User not found check the id !!!! " });
        } else {
          await User.findByIdAndDelete(userId);
          const usersList = await User.find();
          res.status(200).json(usersList);
        }
      } catch (error) {
        res.status(500).json({ message: error });
      }
}


exports.registerUser=async(req,res)=>{
  try {
  
    const {firstName,lastName,email,imageURL, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // motpasse crypté 
    const user = new User({firstName,lastName,email,imageURL, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
    }
}



exports.Login=async(req,res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
    return res.status(401).json({ error: 'wrong email !!! ' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
    return res.status(401).json({ error: 'wrong password !!!' });
    }
    const token = jwt.sign({ _id: user._id },  process.env.JWT_SECRET, {
    expiresIn: '1h',
    });
  
    res.status(200).json({ token });
    } catch (error) {
    res.status(500).json({ error: 'Login failed' });
    }
}


