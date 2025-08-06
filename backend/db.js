

// db.js
const mongoose = require('mongoose');
//mongoose.set('strictQuery', false);




const mongoDB = async () => {

 
  try {
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB connected successfully');

    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    
    console.log("📦 Data from food_items collection:");
    //console.log(fetched_data);

  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); 
  }

  

  
};

module.exports = mongoDB;

