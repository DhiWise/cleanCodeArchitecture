const response = require('../../utils/response');

const deleteOne = ({ userDb }) => async (id) => {
    try {
        let result = await userDb.deleteOne({ _id: id });
        return response.success({ data: result });
    } catch (error) {
        return response.failure();
    }
}
module.exports = deleteOne;