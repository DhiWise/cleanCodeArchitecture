
const User = require('../../entities/user');
const response = require('../../utils/response');

const update = ({ userDb, updateValidation }) => async (id, params) => {
    try {

        let validateSchema = await updateValidation(params);

        if (!validateSchema.isValid) {
            return response.validationError({ message: validateSchema.message });
        }

        let newUser = new User(params);

        let user = await userDb.updateOne({ _id: id }, newUser);
        return response.success(
            { data: user }
        );
    } catch (error) {
        return response.failure();
    }
}
module.exports = update;