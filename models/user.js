const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    thought: [{
        type: Schema.Types.ObjectId,
        ref: 'thought'
    }],
    friend: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

// userSchema.virtual('friendCount').get(()=>{
//     return this.friend.length
// })

const User = model('User', userSchema);

module.exports = User;