import * as express from "express";
const router = express.Router();

// home page    
router.get("/", (req: any, res) => {        
    res.send("index");    
});

// about page    
router.get("/about", (req: any, res) => {
    res.send("about");    
});

export default router;