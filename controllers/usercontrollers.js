const users = require('../user.json')
function getAllUsers(req,res){
    try {
       res.json(users); 
    } catch (error) {
        
    }
}
function getUsers(req,res){
    try {
        let id = parseInt(req.params.id);
        let user= users.find((user)=>
            user.id===id
    )
        res.json(user);
    } catch (error) {
        
    }
}
module.exports = {
    getAllUsers,
    getUsers
}