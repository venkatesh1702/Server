const tokenSecrect = 'vddskjfdfkdjefsf'
const jwt = require('jsonwebtoken')

module.exports =  function(req,res,next) {

    const token = req.header('auth-token')

    if(!token) return res.status(401).send('Access Denied !!!')
    
    next();
    try {
        const verified = jwt.verify(token,tokenSecrect)
    } catch (error) {
        res.status(400).send('Invalid Token')
    }    
}