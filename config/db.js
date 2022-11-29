const { connect } = require("mongoose");
const { success, error } = require("consola")
const { MONGODB_URL, MONGODB_CLOUD } = require("./index");

let connectDataBase = async () => {
    try {
        await connect("mongodb+srv://manasa:vijay123@cluster0.nkf6fc8.mongodb.net/?retryWrites=true&w=majority");
        success("MongoDB database is connected!")
    } catch (err) {
        error(err)
    }
}


module.exports = connectDataBase
