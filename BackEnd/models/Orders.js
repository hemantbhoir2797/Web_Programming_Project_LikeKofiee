const mongoose = require("mongoose");

const { Schema } = mongoose;

//Validation 
const OrderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  order_data: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("order", OrderSchema); 
//                            (collection-name, schema object)
//model() function => it will create collection and  at same time it will create class and return its reference

