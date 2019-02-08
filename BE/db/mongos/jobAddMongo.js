const  Mongo = require('../mongo/mongo.js');

const  jobAddMongo = new Mongo({
    companyLogo : String,
    companyName : String,
    jobName : String,
    city : String,
    salary : String,
    degree : String,
    experience : String,
    description : String
}, "manager", "companys");

module.exports = jobAddMongo;