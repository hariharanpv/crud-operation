const express = require('express');
const Department = require('../models/department');
const router = express.Router();
const mongoose = require('mongoose');
const connectionString = "mongodb://localhost:27017/college";

mongoose.connect(connectionString,(err)=>{
    if(err)
    {
        console.log(err);
    }
});

router.get('/getDepartments',(req,res)=>{
    
    Department.find({}).exec((err,departments)=>{
        if(err)
        {
            console.log(err);
        }else{
            res.setHeader('Content-Type','Application/Json');
            res.json(departments);
        }
    })
})
router.post('/addDepartment',(req,res)=>{
    
    res.send(Department.collection.save(req.body))
})

module.exports = router;
