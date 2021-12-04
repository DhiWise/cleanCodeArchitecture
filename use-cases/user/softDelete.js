const response = require('../../utils/response');

const softDelete = ({ userDb }) => async (id) => {
    try {
        let result = await userDb.softDelete({ _id: id });
        return response.success(
            { data: result }
        );
    } catch (error) {
        return response.failure();
    }
}
module.exports = softDelete;