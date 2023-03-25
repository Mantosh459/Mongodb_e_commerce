const product = require('../models/product');

exports.products = async(req, res) => {
    try {
        const products = await product.find({});

        res.json(products);

    } catch (e) {
        res.status(500).json({error: e.message});
    }
};

exports.create_product = async (req,res) => {
 try {
    const {title , description , price , imageUrl} = req.body;

let newProduct = new product ( {
    title,
    description,
    price,
    imageUrl,
});

 newProduct = await newProduct.save(); 

 res.json(newProduct);
} catch (e) {
    res.status(500).json({error: e.message});
    }
};

