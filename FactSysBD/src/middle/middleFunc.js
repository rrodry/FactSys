const jwt = require('jsonwebtoken')
function authenticateToken ( user, ACCESS_TOKEN ) {

    const token = jwt.sign({
        user
    }, ACCESS_TOKEN)
    
    return token

}


function authenticateTokenWeb ( token ) {
    console.log("tok", token)
    const decode = jwt.decode(token)
    console.log("dec", decode)
    return decode

}

module.exports = {
    authenticateToken,
    authenticateTokenWeb
}