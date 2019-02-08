const {jobAddMongo} = require('../db/index.js');

const add = function(data, callback) {
    jobAddMongo.add(data, callback);
}

const find = function(findData, showData, callback) {
    jobAddMongo.find(findData, showData, callback);
}
const del = function(data, callback) {
    jobAddMongo.del(data, callback);
}

module.exports = {
    add, find, del
}