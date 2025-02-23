import express from "express";
import { addshoe,listShoe,removeShoe } from "../controllers/shoeController.js";
import multer from "multer";


const shoeRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});


const upload = multer({storage:storage})

shoeRouter.post("/add",upload.single("image"),addshoe) 
shoeRouter.get("/list",listShoe)
shoeRouter.post("/remove",removeShoe)



export default shoeRouter;