import { Schema, model, models } from 'mongoose';
import { isEmail } from 'validator';

import { genSalt, hash } from 'bcrypt';

const userSchema = new Schema({
    email:{
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']

    },
    password:{
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'minimum password length is 6 characters']
    }
});


//fire a function before doc is saved to the db
//you can also fire after too tho

userSchema.pre('save',  async function (next) {
    
    const salt = await bcrypt.genSalt();

    this.password = await bcrypt.hash(this.password, salt);

    next();
});

//static function to login a user

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}


module.exports = models.User || model('User', userSchema);