const {Router}=require('express')
const CardSc = require('../../models/Card');
const auth=require('../middleware/auth.middleware')
const router = Router()



<<<<<<< HEAD
router.get('/add', (req, res) =>{
=======
router.get('/add',(req, res) =>{
>>>>>>> Update app
    CardSc.find()
        .sort({ date: -1})
        .then(cards => res.json(cards))
});

<<<<<<< HEAD
router.delete('/delete/:id', async (req, res) =>{
=======
router.delete('/delete/:id',async (req, res) =>{
>>>>>>> Update app
    const cardId=await CardSc.findById(req.params.id)
    const card = await CardSc.remove({_id: cardId});
    res.json({card })
});

<<<<<<< HEAD
router.post('/collection', auth, async(req, res) =>{
=======
router.post('/collection',auth, async(req, res) =>{
>>>>>>> Update app
try {
    const {title, description,theme}=req.body
    const candidate =await CardSc.findOne({title});

    if(candidate){
         return res.status(400).json({message: 'This card already exists'})
    }
    const newCard = new CardSc({
        title,description,theme,owner:req.user.userId
    });
   await newCard.save()
    res.status(201).json({newCard})
}catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
})


<<<<<<< HEAD
router.get('/', auth, async(req, res) =>{
=======
router.get('/', auth,async(req, res) =>{
>>>>>>> Update app
try{
    const cards=await CardSc.find({owner: req.user.userId})
    res.json(cards)
} catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
});


<<<<<<< HEAD
router.get('/:id', auth, async(req, res) =>{
=======
router.get('/:id', auth,async(req, res) =>{
>>>>>>> Update app
try{
    const card=await CardSc.findById(req.params.id)
    res.json(card)
} catch (e) {
    res.status(500).json({ message: 'Something is wrong, try again'})
}
});



module.exports=router