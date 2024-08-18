import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (usserId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECET,{
        expiresIn:'15d'
    })

    res.cookies('jwt',token,{
        maxAge:15*24*60*1000,
        httpOnly:true, // prevents xss attacks crross-site scripting attacks
        sameSite:"strict", //CSFR attacks crross-site equest orgery attacks
        secure: process.env.NODE_ENV !=="development",
    })

}