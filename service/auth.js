
require('dotenv').config();
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET
 

function setUser(user) {
    // sessionIdToUserMap.set(id, user)
    return jwt.sign(
    {
        _id: user._id,
        email: user.email,
    },
     secret);
}

function getUser(token) {
    // return sessionIdToUserMap.get(id)
    if(!token) return null;
    try {
       return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }

}


module.exports = {
    setUser,
    getUser,
}