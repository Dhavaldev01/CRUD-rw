const express = require('express');
const router = express.Router();

// const User = require('./userRoutes.js');
const user = require("./../models/user.js");


router.post("/" , async(req ,res) =>{
try {
        // console.log("done")
        const data = req.body;
        const newUser = new user(data);
        const response = await newUser.save();
    
        console.log("Data Created" , response);
        res.status(200).json(response);
} catch (error) {
    console.log(err);
    res.status(500).json({ error: `Internal Server Error ` });
}
}) 

router.get("/" , async(req ,res)=>{
  try {
      const data = await user.find();
  
      console.log("Data find" , data);
      res.status(200).json(data);
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: `Internal Server Error ` });
  }
})

router.get("/:worktype" , async(req ,res)=>{
    const worktype = req.params.worktype;
    try {
        if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
            const data = await user.find({work:worktype});
            res.status(200).json(data);
            console.log("Data find" , data);
        }else{
            res.status(404).json({error: ` Invalid work type`})
        }   
    } catch (error) {
      console.log(err);
      res.status(500).json({ error: `Internal Server Error ` });
    }
  })

 router.delete("/:id" , async(req ,res)=>{
    const id = req.params.id
    try {
        const data = await user.findByIdAndDelete(id);

        console.log("Data deleted" , data);
        res.status(200).json(data);
    } catch (error) {
      console.log(err);
      res.status(500).json({ error: `Internal Server Error ` });
    }
  })

  router.put("/:id" , async(req ,res)=>{
    const id = req.params.id
    const UpadtedData = req.body;
    try {
        const data = await user.findByIdAndUpdate(id , UpadtedData ,{
            new : true,  /// upadated document return kare 
            runValidators : true , // models ni ander na validation 
        });
        console.log("Data Upadated" , data);
        res.status(200).json(data);
    } catch (error) {
      console.log(err);
      res.status(500).json({ error: `Internal Server Error ` });
    }
  })
module.exports = router