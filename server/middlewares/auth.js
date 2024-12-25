import jwt from "jsonwebtoken"

const userAuth = async (req, res, next) => {
    try {
        const {token} = req.headers

        if(!token) {
            return res.status(401).json({message: "Unauthorized. Please Login!" })
        }
        const tokenDecode = jwt.verify(token, process.env.SECRET_KEY)

        if(!tokenDecode.id) {
            return res.status(401).json({message: "Unauthorized id. Please Login Again!😈" })
        }

        req.body.userID = tokenDecode.id
        next()
    } catch (error) {
        return res.status(401).json({message: error.message })
    }
}

export default userAuth
