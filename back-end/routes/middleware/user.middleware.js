const { User } = require('../../models/User');

module.exports=(req, res, next)=>{
    if (req.method ==='OPTIONS'){
        return next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1] //"Bearer TOKEN"
        if(!token){
            return res.status(401).json({message:'Not authorization'})
        }
        User.findByToken(token, (err, user) => {
            if (err) throw err;
            if (!user)
                return res.json({
                    isAuth: false,
                    error: true
                });

            req.token = token;
            req.user = user;
            next();
        });
    }catch (e){
        res.status(401).json({message:'Not authorization'})
    }

}