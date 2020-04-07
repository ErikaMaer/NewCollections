const {Router}=require('express')
const product =require('../../models/Product')
<<<<<<< HEAD
const auth=require('../middleware/auth.middleware')
=======
const user=require('../middleware/auth.middleware')
>>>>>>> Update app
const router = Router()




<<<<<<< HEAD
router.post('/generate/:id', auth, async(req, res) =>{
try {
    const {title, description}=req.body
     const candidate =await product.findOne({title});
    if(candidate){
        return res.status(400).json({message: 'This item already exists'})
    }
    const newItem = new product({
        title,description,owner:req.user.userId
    });
    await newItem.save()
    res.status(201).json({newItem})

}catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
})


router.get('/', auth, async(req, res) =>{
try{
    const items=await product.find({owner: req.user.userId})
=======
router.post('/generate', (req, res) =>{
    const newItem = new product(req.body);
    newItem.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
})

router.get('/getItemsById',(req, res) =>{
    product.find({owner:req.query.collId})
        .exec((err, items) => {
            if (err) return res.status(400).json({ success: false, err })
            res.status(200).json({ success: true, items })
        })
})


router.get('/', user,async(req, res, owner) =>{
try{
    const items=await product.find({owner})
>>>>>>> Update app
    res.json(items)
} catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
});


<<<<<<< HEAD
router.get('/:id', auth, async(req, res) =>{
try{
    const item=await product.findById(req.params.id)
=======
router.get('/:id', user,async(req, res) =>{
try{
    const item=await product.findById({owner: req.params.id})
>>>>>>> Update app
    res.json(item)
} catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
});


module.exports=router