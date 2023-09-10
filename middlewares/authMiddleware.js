const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        let token = req.header("x-token")
        if (!token) {
            return res.send("token not found")
        }
        let decode = jwt.verify(token, "jwtsecretKey")
        req.user = decode.user
        next();
    } catch (error) {
        console.log(error)
    }
}