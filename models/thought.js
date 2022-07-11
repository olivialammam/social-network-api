const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
 
    reaction: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

reactionSchema.virtual('reactionCount').get(() => {
    return this.reaction.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought