

export const phoneVerification = async (req , res , next ) =>{
    try {
        const phoneNumber = req.body ;
        if(!phoneNumber) return res.status(404).json({message:"Invalid phone number"})
            
    } catch (error) {
        console.log(error.message);
        next(error);
    }
}