const express=require('express');
const router= express.Router();
const bcrypt=require('bcryptjs');
const jwt =require('jsonwebtoken');
const User = require('../../models/User');
const {check, validationResult} = require('express-validator');
<<<<<<< HEAD




router.post('/create/block', async (req, res) =>{
=======
const auth  = require("../middleware/auth.middleware")



router.post('/create/block',async (req, res) =>{
>>>>>>> Update app
    const userId = req.body.id;
    const userStatus = req.body.status;
    const user = await User.findOne({_id: userId});
    await user.update({Status: userStatus});
    res.json({user})
});

<<<<<<< HEAD
router.delete('/create/delete', async (req, res) =>{
=======
router.delete('/create/delete',async (req, res) =>{
>>>>>>> Update app
    const userId = req.body.id;
    const user = await User.remove({_id: userId});
    res.json({user})
});

<<<<<<< HEAD
router.get('/create', (req, res) =>{
=======
router.get('/create',(req, res) =>{
>>>>>>> Update app
        User.find()
            .sort({ date: -1})
            .then(users => res.json(users))
});


<<<<<<< HEAD
=======
router.get('/role',(req, res) =>{
   User.findOne({_id:req.query.id})
       .exec((err, user) => {
           if (err) return res.status(400).json({ success: false, err })
           res.status(200).json({ success: true, role: user.role })
       })
});

>>>>>>> Update app
router.post(
'/register',
[
check('email','Invalid email').isEmail(),
check('password', 'The minimum password length is 6 symbols')
    .isLength({min:5})
], async (req,res) => {
try {

    const errors =validationResult(req);

<<<<<<< HEAD
=======

>>>>>>> Update app
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array(),
            message:'Invalid data during registration'
        })
    }
    const {email,password} = req.body;
    const candidate =await User.findOne({email});

    if(candidate){
        return  res.status(400).json({message: 'This user already exists'})
    }
    const hashedPassword= await bcrypt.hash(password, 12);
    const regDate = new Date().toLocaleString("ru");
    const user = new User({email,password:hashedPassword, regDate});
    const save=await user.save();
    if(!save){
        return res.status(201).json({message:'The user is not created'})
    }

    const userReg = await User.findOne({email});

    const token = jwt.sign(
        {userId: userReg.id},
        require('../../config/keys').jwtSecret,
        {expiresIn: '1h'},
    );
    res.json({token, userId: userReg.id})


} catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
});

router.post(
'/login',
[
    check('email','Enter the correct email address').normalizeEmail().isEmail(),
    check('password','Enter the password').exists()
],
async (req,res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Invalid data during login'
            })
        }
<<<<<<< HEAD

=======
>>>>>>> Update app
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'The user is not found'})
        }
        const isMatch = await bcrypt.compare(password, user.password);


        if (!isMatch) {
            return res.status(400).json({message: 'Invalid password, try again'})
        }

        if(user.Status==="block"){
            return res.status(400).json({message: 'You are blocked'})
        }

        const logDate = new Date().toLocaleString("ru");
        await user.update({logDate});

        const token = jwt.sign(
            {userId: user.id},
            require('../../config/keys').jwtSecret,
            {expiresIn: '1h'},
        );
        res.json({token, userId: user.id})
    } catch (e) {
        res.status(500).json({message: 'Something is wrong, try again'})
    }
});
module.exports=router;