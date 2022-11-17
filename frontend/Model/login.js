
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const UserModel = mongoose.Schema({ // USerModel is a instance
    name: { type: String, require: true, trim: true },
    contact: { type: Number, require: true, },
    address: {
        type: String, require: true, trim: true
    },
    email: { type: String, require: true, trim: true },
    password: { type: String, require: true, trim: true },
    tokens: [
        {
            token: {
                type: String,
                require:true
            }
        }
    ]
},
    { timeStamps: true }
);

// we are generating token
UserModel.methods.generateAuthToken = async function () {
    try {// console.log("looking for tocken");
        // sign method is used to generate the token the first parameter is payload and second is secret key
        let newtoken = jwt.sign({ _id: this._id }, `${process.env.SECRET_KEY}`);
       // console.log(newtoken);
        this.tokens = this.tokens.concat({ token:newtoken });
        await this.save();
        return newtoken;
    } catch (error) {
       console.log(error); 
    }
}
const UserSchema = mongoose.model("login", UserModel);
module.exports = UserSchema;