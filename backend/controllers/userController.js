const user = require('../models/user');

exports.users = async(req, res) => {
    try {
        const users = await user.find({});

        res.json(users);

    } catch (e) {
        res.status(500).json({error: e.message});
    }
};

exports.create_user = async (req,res) => {
 try {
    const {firstName , lastName , phoneNo } = req.body;

let newUser = new user ( {
    firstName,
    lastName,
    phoneNo,
});

 newUser = await newUser.save(); 

 res.json(newUser);
} catch (e) {
    res.status(500).json({error: e.message});
    }
};