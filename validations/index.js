const schemaValidation = (schema) => async (data) => {


    const { error } = schema.validate(data);
    if (error) {
        const message = error.details.map((el) => el.message).join('\n');
        return { isValid: false, message: message };
    }
    return { isValid: true };
}

module.exports = schemaValidation