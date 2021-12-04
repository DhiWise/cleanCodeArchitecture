const response = require('../../utils/response');

const count = ({ userDb }) => async (params) => {
    try {
        let filter = params;
        let count = await userDb.count(filter);
        return response.success({ data: { count: count || 0 } });
    } catch (error) {
        console.log(error);
        return response.failure();
    }
}
module.exports = count;