const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    Id : Number,
    name : String,
    Description : String,
    HOD : String
})

module.exports = mongoose.model('department',departmentSchema,'departments');