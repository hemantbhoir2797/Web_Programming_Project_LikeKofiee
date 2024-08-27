const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/LikeKoffiee";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetchedData = await mongoose.connection.db.collection("coffee_items");
    const categoryData = await mongoose.connection.db.collection("coffeecategory");
    const data = await fetchedData.find({}).toArray();
    const catData = await categoryData.find({}).toArray();

    global.coffee_items = data;
    global.coffee_category = catData;
   
    // Add any additional processing logic here if needed

    // Close the MongoDB connection when done
    // await mongoose.connection.close();
    // console.log("Connection closed");
  } catch (err) {
    console.error("Error:", err);
  }
};

module.exports = mongoDB;
