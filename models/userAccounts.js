const mongoose = require('mongoose');
const userAccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const userAccountModel = mongoose.model("userAccounts", userAccountSchema);
module.exports = userAccountModel;