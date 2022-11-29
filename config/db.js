const { connect } = require("mongoose");
const { success, error } = require("consola")
const { MONGODB_URL, MONGODB_CLOUD } = require("./index");

let connectDataBase = async () => {
    try {
        await connect(MONGODB_URL);
        success("MongoDB database is connected!")
    } catch (err) {
        error(err)
    }
}


module.exports = connectDataBase
