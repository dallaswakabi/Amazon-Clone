import jwt from 'jsonwebtoken'

export const generateToken = (user)=>{
   return jwt.sign({
    id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin

   },process.env.JWT_SECRET,
   {
      expiresIn:'30d'
   })
}
export const isAuth = (req,res,next)=>{
   const authorization = req.headers.authorization;
   if(authorization){
      const token  = authorization.slice(7,authorization.length); // bear xxxxxx
      jwt.verify(token,process.env.JWT_SECRET || 'Something Secret',(err, decode)=>{
         if(err){
            res.status(401).send({message:'Invalid Token'})
         }else{
            console.log(decode)
            req.user = decode;
            console.log(req.user.id)
            next()
         }
      })
   }else{
      res.status(401).send({message:'No Token'})
   }
}