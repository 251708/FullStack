

// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://SakshiFoodApp:FoodApp%233452@cluster1.czxdqo0.mongodb.net/GoFoodMern?retryWrites=true&w=majority&appName=Cluster1'
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

