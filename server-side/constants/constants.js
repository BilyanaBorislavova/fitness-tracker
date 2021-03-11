const mongoose = require('mongoose');

const DEFAULT_PORT = 5000;

const SCHEMA_TYPES = {
    STRING: mongoose.Schema.Types.String,
    OBJECT_ID: mongoose.Schema.Types.ObjectId,
};

const ENCRYPTION = {
    RANDOM_BYTES: 128,
    BASE_64: 'base64',
    SHA_256: 'sha256',
    HEX: 'hex',
};

const MODELS = {
    USER: 'User',
    METRICS: 'Metrics',
    DAILY_WORKOUTS: 'DailyWorkouts',
    DAILY_MEALS: 'DailyMeals',
    ACHIEVEMENTS: 'Achievements',
};

module.exports = {
    DEFAULT_PORT,
    SCHEMA_TYPES,
    ENCRYPTION,
    MODELS,
};
