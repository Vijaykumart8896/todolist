require("dotenv").config();

module.exports = {
    MONGODB_URL: process.env.MONGODB_URL,
    MONGODB_CLOUD: process.env.MONGODB_CLOUD,
    PORT: process.env.PORT
}