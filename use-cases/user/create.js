
const User = require('../../entities/user');
const response = require('../../utils/response');

const create = ({ userDb, createValidation }) => async (params) => {
    try {
        let validateSchema = await createValidation(params);

        if (!validateSchema.isValid) {
            return response.inValidParam({ message: validateSchema.message });
        }

        let newUser = new User(params);
        let user = await userDb.create(newUser);
        console.log("In DB", newUser, user);
        return response.success({ data: user });
    } catch (error) {
        return response.failure();
    }
}
module.exports = create;