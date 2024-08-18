import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
export const signup = async(req,res)=>{
    try {
        const {fullName, username, email,password} =  req.body;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email))

            {
                return res.status(400).json({error:'Invalid Email Format'});
            }
       const existingUser = await User.findOne({ username })
       if(existingUser){
        return res.status(400).json({error: 'Username is already Taken'})
       }
       const existingEmail = await User.findOne({ email })
       if(existingEmail){
        return res.status(400).json({error: 'Email is already Taken'})
       }
       
       //Hash Pssword
       const salt = await bcrypt.genSalt(10);
       const hashPassowrd = await bcrypt.hash(password,salt);

       const newUser = new User({
        fullName,
        username,
        email,
        password:hashPassowrd
       })

       if(newUser){
        generateTokenAndSetCookie(newUser._id,res)
        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            username:newUser.username,
            email:newUser.email,
            fullName: newUser.fullName,
            pofileImg: newUser.profileImg,
            coverImg:newUser.coverImg,
            bio:newUser.bio,
            link:newUser.link,
            followers:newUser.followers,
            following:newUser.following,

        })
       }else{
        res.status(400).json({error:'Invalid user Data'})

       }

        
    } catch (error) {
        console.log('Error in signup controller', error.message)
        res.status(500).json({error:'Internal Server Error'})
        
    }
} 
export const login = async(req,res)=>{
    res.json({
        data:'You hit the login endpoint'
    });
} 
export const logout = async(req,res)=>{
    res.json({
        data:'You hit the logout endpoint'
    });
} 
