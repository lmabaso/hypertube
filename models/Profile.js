const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    language: {
        type: String,
        required: true
    },
    avater: {
        type: String
    },
    watched: [
        {
            title: {
                type: String
            },
            saw: {
                type: String
            },
            date: {
                type: Date
            },
            movie_id: {
                type: String
            }
        }
    ],
    social: {
        facebook: {
            type: String
        },
        twitter: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);