const Mongoose = require('mongoose');
const UserModel  = new Mongoose.Schema(
    {
     firstName:{
        type: String,
        default:""
     },
     lastName:{
        type:String,
        default:""
     },
     password:{
        type:String
     },
     phoneNumber:{
        type:String
     },
     email:{
        type:String,
        unique:true
     },
     isDeleted:{
        type:Boolean,
        default:false
     }
},{timestamps:true});

module.exports = Mongoose.model("UserSchema",UserModel);
