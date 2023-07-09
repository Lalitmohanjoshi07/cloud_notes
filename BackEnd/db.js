const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1/cloud_notes'

const connectToDb= async()=>{
    mongoose.connect(URI,
        console.log('mongoose connected')
    )
}

module.exports= connectToDb;