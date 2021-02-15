const mongoose = require('mongoose');
const { SCHEMA_TYPES, MODELS } = require('../constants/constants');
const { generateHashedPassword } = require('../utils/encryption');

const { STRING, OBJECT_ID } = SCHEMA_TYPES;
const { USER, METRICS, DAILY_WORKOUTS, DAILY_MEALS, ACHIEVEMENTS } = MODELS;

const userSchema = new mongoose.Schema({
    id: { type: STRING, required: true, unique: true },
    username: { type: STRING, required: true, unique: true },
    password: { type: STRING, required: true },
    email: { type: STRING, required: true, unique: true },
    firstName: { type: STRING, required: true },
    lastName: { type: STRING, required: true },
    avatar: { type: STRING, default: '' },
    roles: [{ type: STRING }],
    metrics: [{ type: OBJECT_ID, ref: METRICS }],
    dailyWorkouts: [{ type: OBJECT_ID, ref: DAILY_WORKOUTS }],
    dailyMeals: [{ type: OBJECT_ID, ref: DAILY_MEALS }],
    achievements: [{ type: OBJECT_ID, ref: ACHIEVEMENTS }],
});

// userSchema.method({
//     authenticate: (pass) => (
//         generateHashedPassword(this.salt, pass) === this.password
//     )
// });

const User = mongoose.model(USER, userSchema);

module.exports = User;
