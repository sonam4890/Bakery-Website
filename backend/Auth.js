const jwt = require('jsonwebtoken');
const User = require('./models/user');

const auth = async(req, res, next) => {
    try{
        let tokanData = jwt.verify(req.body.token, process.env.SECRET_KEY);
        let user =  await User.findOne({_id: tokanData._id}).lean();
        req.body.user = user;
        console.log(req.body);
        next();
    }catch(err){
        res.status(401).send(err);

    }
}

module.exports = auth;