const fs = require('fs');
const path = require('path');
const {add, find, del, update} = require('../model/jobAdd.js');

const jobAddController = {
    add({req,res}) {
        add(req.body,()=>{
            console.log('------------------添加成功------------------');
            res.render('jobAdd', {
                data : {...req.body}
            });
        });
    },
    find({req, res}) {
        find({},null,(result)=>{
            console.log('------------------查询成功------------------');
            res.render('jobFind',{
                data: JSON.stringify(result)
            });
        });
    },
    del({req, res}) {
        let {id,companyLogo} = req.body;
        del({"_id" : id},()=>{
            fs.unlink(path.resolve(__dirname,`../public/upload/${companyLogo}`),(err)=>{
                console.log('------------------删除成功------------------');
            })
            res.render('jobDel',{
                data: {
                    msg : "suc"
                }
            });
        });
    },
    update({req, res}) {
        let data = req.body;
        update({"_id" : data.id},{data}, function(res) {
            console.log('------------------修改成功------------------');
        });
    }
}

module.exports = jobAddController;