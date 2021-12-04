module.exports = class User {
    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.fullName = `${user.firstName} ${user.lastName}`;
        this.email = user.email;
        this.isActive = user.isActive != undefined ? user.isActive : true,
        this.isDelete = user.isDelete != undefined ? user.isDelete : false
    }
};