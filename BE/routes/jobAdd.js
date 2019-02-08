const express = require('express');
const router = express.Router();
const path = require('path');
const jobAddController = require('../controller/jobAdd.js');
const multer = require('multer');
var storage = multer.diskStorage({
    destination : function(req, file, cb) {
        //设置上传的文件存放位置
        cb(null, path.resolve(__dirname, '../public/upload'));
    },
    filename : function(req, file, cb) {
        //设置上传的文件名称
        let fileStr = file.originalname;
        let docIndex = fileStr.lastIndexOf('.');
        let fileEnd = fileStr.substr(docIndex);
        let fileName = file.fieldname + '_' + Date.now() + fileEnd;
        //设置提交表单时的部分数据:companyLogo
        req.body.companyLogo = fileName;
        cb(null, fileName);
    }
});
var upload = multer({storage : storage});

router.route('/add').post(upload.single('companyLogo'), (req,res,next)=>{
    jobAddController.add({req,res,next});
});

router.route('/find')
.get((req, res, next)=>{
    jobAddController.find({req,res,next});
})
.patch((req, res, next)=>{
    jobAddController.update({req,res,next});
});

router.route('/del').delete((req, res, next)=>{
    jobAddController.del({req,res,next});
});

module.exports = router;