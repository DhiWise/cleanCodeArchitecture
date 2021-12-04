const express = require('express');
const router = express.Router();

const { create, update, deleteOne, softDelete, findOne, count, list } = require('../../controllers/admin/user');

router.route('/admin/user/create').post(create);
router.route('/admin/user/update/:id').put(update);
router.route('/admin/user/delete/:id').delete(deleteOne);
router.route('/admin/user/soft-delete/:id').post(softDelete);
router.route('/admin/user/get-user/:id').get(findOne);
router.route('/admin/user/get-count').post(count);
router.route('/admin/user/list/').post(list);

module.exports = router;