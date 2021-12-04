const response = require('../../utils/response');

const list = ({ userDb }) => async (params) => {
    try {
        let filter = params;
        let users = await userDb.findMany(filter);
        return response.success({ data: users });
    } catch (error) {
        return response.failure();
    }
}
module.exports = list;