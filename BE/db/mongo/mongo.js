const mongoose = require('mongoose');
const mongoAddr = "mongodb://localhost:27017/";
/**
 * 接受三个参数,骨架,要连接的数据库,要操作的集合
 * @param {Object} schema 
 * @param {String} database 
 * @param {String} collection 
 */
function Mongo(schema,database,collection){
    this.schemaList = schema;
    this.schema = new mongoose.Schema(schema);
    this.collection = collection;
    this.model = mongoose.model(this.collection,this.schema);
    this.database = database;
    this.init();
}

Mongo.prototype = {
    constructor : Mongo,
    //初始化函数,创建对象时会自动调用
    init : function() {
        mongoose.connect(mongoAddr + this.database, (err)=>{
            if(err) {
                throw err;
                return;
            } else {
                console.log('===============连接数据库成功===============');
            }
        });
    },
    //添加数据,接受两个参数,一条要保存的数据(对象),一个添加成功后的回调函数
    add : function(data, callback) {
        let add_model = new this.model(data);
        add_model.save(function(err) {
            if(err) {
                throw err;
                return;
            } else {
                callback();
            }
        });
    },
    //查询数据,接受三个参数,一条用来匹配的数据(对象),一个用来展示的数据(对象),一个查询成功的回调函数
    find : function(findData, showData, callback) {
        if(showData == null) {
            showData = {};
        }
        this.model.find(findData, showData, function(err, res) {
            if(err) {
                throw err;
                return;
            } else {
                callback(res);
            }
        });
    },
    //删除数据,接受两个参数,一条用来删除的数据(对象),一个删除成功后的回调函数
    del : function(findData,callback) {
        this.model.find(findData, function(err, res) {
            if(err) {
                throw err;
                return;
            } else {
                for(var key in res) {
                    res[key].remove();
                }
                callback();
            }
        });
    },

    update : function(findData,changeData,callback) {
        this.model.update(findData,changeData,function(err, res) {
            if(err) throw err;
            else callback(res);
        });
    }
}

//暴露对象,创建对象new Mongo(骨架,数据库名,集合名)
module.exports = Mongo;