const jwt = require('jsonwebtoken')

module.exports=(req, res, next)=>{
    if (req.method ==='OPTIONS'){
        return next()
<<<<<<< HEAD
=======

>>>>>>> Update app
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(401).json({message:'Not authorizatiooon'})
        }
        const decoded = jwt.verify(token, require('../../config/keys').jwtSecret)
<<<<<<< HEAD
        req.card=decoded
=======
        req.user = decoded
        if (!req.user.adminStatus) return res.status(403).send("Access denied.");
        // req.card=decoded
>>>>>>> Update app
        next()
    }catch (e){
        res.status(401).json({message:'Not authorization'})
    }

}