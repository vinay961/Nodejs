const User = require('../model/userSchema.js');

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body; 

        if (!name || !email) {
            throw new Error("Name and Email are necessary.");
        }

        const userExist = await User.findOne({ email }).exec(); 
        if (userExist) {
            throw new Error("User already exists.");
        }

        const user = await User.create({
            name,
            email
        });
        res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
exports.getUser = async (req,res) =>{
    try {
        const user = await User.find({});
        res.status(201).json({
            success:true,
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:true,
            message:error.message
        })
    }
}
