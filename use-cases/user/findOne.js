const response = require('../../utils/response');

const findOne = ({ userDb }) => async (id) => {
    try {
        let user = await userDb.findOne({ _id: id });
        return response.success({ data: user });
    } catch (error) {
        return response.failure();
    }
}
module.exports = findOne;