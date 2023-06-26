import mongoose from "mongoose"

const MONGODB_sTRING ="mongodb://127.0.0.1:27017/set07BE"

async function dbConfig(){
    try {
const conn =await mongoose.connect(MONGODB_sTRING)
console.log(`DB connection to ${conn.connection.host}`)
    } catch (error:any) {
        console.log(error)
    }
}

export default dbConfig;