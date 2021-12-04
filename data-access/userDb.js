let User = require('../db/mongoDB/models/user');
let { create,
    createMany,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    softDelete,
    softDeleteMany,
    findOne,
    findMany,
    count } = require('../db/mongoDB/dbService')(User);
//require('../db/inMemory/dbService'); 
//require('../db/postgreSQL/dbService');

module.exports = {
    create,
    createMany,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    softDelete,
    softDeleteMany,
    findOne,
    findMany,
    count
};