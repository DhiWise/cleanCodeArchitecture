let userDb = require('../../../data-access/userDb');
const { createUserSchema, updateUserSchema } = require('../../../validations/schema/user');
const createValidation = require('../../../validations')(createUserSchema);
const updateValidation = require('../../../validations')(updateUserSchema);


const createUserUsecase = require('./../../../use-cases/user/create')({ userDb, createValidation });
const updateUserUsecase = require('./../../../use-cases/user/update')({ userDb, updateValidation });
const deleteUserUsecase = require('./../../../use-cases/user/delete')({ userDb });
const softDeleteUserUsecase = require('./../../../use-cases/user/softDelete')({ userDb });
const findOneUserUsecase = require('./../../../use-cases/user/findOne')({ userDb });
const countUserUsecase = require('./../../../use-cases/user/count')({ userDb });
const listUserUsecase = require('./../../../use-cases/user/list')({ userDb });


const userController = require('./user');

const create = userController.create(createUserUsecase);
const update = userController.update(updateUserUsecase);
const deleteOne = userController.deleteOne(deleteUserUsecase);
const softDelete = userController.softDelete(softDeleteUserUsecase);
const findOne = userController.findOne(findOneUserUsecase);
const count = userController.count(countUserUsecase);
const list = userController.list(listUserUsecase);

module.exports = {
    create, update, deleteOne, softDelete, findOne, count, list
};