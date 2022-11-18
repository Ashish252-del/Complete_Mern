const mongoose = require('mongoose');

const connection = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/login-signupdetabase");
        console.log("detabase is connected")
    } catch (error) {
        console.log(error);
    }
}
module.exports = connection;