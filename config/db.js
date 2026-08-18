const {Sequelize} = require ('sequelize')


const sequelize = new Sequelize(process.env.DATABASE_URL)

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('connection successful')
    } catch (error) {
        console.error('connection failed',error)
        
    }

}

module.exports = {sequelize,connectDB}