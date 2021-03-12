const mongoose = require('mongoose');
const { SCHEMA_TYPES, MODELS, USER_ROLES } = require('../constants/constants');

const { STRING, OBJECT_ID, ARRAY } = SCHEMA_TYPES;
const { USER: USER_ROLE, ADMIN: ADMIN_ROLE } = USER_ROLES;
const { USER, METRICS, DAILY_WORKOUTS, DAILY_MEALS, ACHIEVEMENTS } = MODELS;

const userSchema = new mongoose.Schema({
    salt: { type: STRING, required: true },
    username: { type: STRING, required: true, unique: true },
    password: { type: STRING, required: true },
    email: { type: STRING, required: true, unique: true },
    firstName: { type: STRING, required: true },
    lastName: { type: STRING, required: true },
    avatar: { type: STRING, default: '' },
    roles: { type: ARRAY }
    // metrics: [{ type: OBJECT_ID, ref: METRICS }],
    // dailyWorkouts: [{ type: OBJECT_ID, ref: DAILY_WORKOUTS }],
    // dailyMeals: [{ type: OBJECT_ID, ref: DAILY_MEALS }],
    // achievements: [{ type: OBJECT_ID, ref: ACHIEVEMENTS }],
});

const User = mongoose.model(USER, userSchema);

module.exports = User;
