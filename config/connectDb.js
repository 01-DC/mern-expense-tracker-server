const mongoose = require("mongoose")

const connectDb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		console.log(`Database running on ${mongoose.connection.host}`)
	} catch (error) {
		console.log(error)
	}
}

module.exports = connectDb
