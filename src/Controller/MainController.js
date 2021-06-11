const UserModel = require("../database/models/UserModel");
const ItemModel = require("../database/models/itemModel")

const signUp = async(req, res)=>{
    const {name, email, password} = req.body;
    
    try{
        let user = new UserModel({
            name,
            email,
            password
        })
        const newUser = await user.save();
        if(newUser){
            res.json(newUser);
        }
    }catch(err){
        console.log(ree)
    }
    
}

const saveItem = async(req, res)=>{
    const {description, productName, price, snapshort} = req.body;
    const item = new ItemModel({
        itemName: productName,
        price: price,
        description: description,
        image: snapshort
    })
    await item.save()
}

const getItens = async (req, res)=>{
    const items = await ItemModel.find()
    // console.log(items)
    if(items){
        res.json(items)
    }
}

const login = async(req, res) =>{
    const {email, password} = req.body;
    const user = await UserModel.findOne ({ "email" : email });
    if(user){
        if(user.password === password){
            res.json(user);
        }
    }
}

module.exports = {
    signUp,
    saveItem,
    getItens,
    login
}