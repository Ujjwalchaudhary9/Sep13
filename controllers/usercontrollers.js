const users = require('../user.json')
function getAllUsers(req,res){
    try {
       res.json(users); 
    } catch (error) {
        
    }
}
module.exports = {
    getAllUsers
}