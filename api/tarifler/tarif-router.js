const router=require("express").Router();

const {checkTarifId}=require("./tarif-middleware");

router.get("/:id", checkTarifId, async(req,res,next)=>{
    try{
        res.json(req.tarif);
    }catch(error){
        next(error);
    }
})

module.exports=router;