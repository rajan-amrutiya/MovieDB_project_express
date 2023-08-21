
function isAdmin(req, res, next){
    if(req.session.role != "admin"){
       return res.send("You are not authorize")
    }else{
        next();
    };
};

module.exports = {isAdmin};