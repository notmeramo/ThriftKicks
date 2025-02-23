import shoeModel from "../models/shoeModel.js";
import fs from 'fs'


//add shoe  item

const addshoe = async (req, res) => {
    let image_filename = `${req.file.filename}`; // ✅ Corrected string interpolation

    const shoe = new shoeModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename // ✅ Now it will store the correct filename
    });

    try {
        await shoe.save();
        res.json({ success: true, message: "Shoe Added", shoe });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

//all shoe list

const listShoe = async(req,res)=>{

    try {
        const shoes =await shoeModel.find({});
        res.json({success:true,data:shoes})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"}) 
    }

}

//remove shoe item

const removeShoe = async(req,res)=>{
try {
    const shoe = await shoeModel.findById(req.body.id);
     fs.unlink(`uploads/${shoe.image}`,()=>{})

     await shoeModel.findByIdAndDelete(req.body.id);
     res.json({success:true,message:"Shoe removed"})

} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
}
}

export { addshoe,listShoe,removeShoe};
