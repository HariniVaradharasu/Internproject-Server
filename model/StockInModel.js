const mongoose = require('mongoose');

const stockInSchema = new mongoose.Schema({
  billNumber:  { type: String, required: true },
  billDate:    { type: Date, required: true },
  productCode: { type: String, required: true },
  vendorName:  { type: String, required: true },
  itemCode: { type: String, required: true },
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  mrp: { type: Number, required: true },
  cost: { type: Number, required: true },
  gstPercent: { type: Number, required: true },
  cessPercent: { type: Number, required: true },
  discount: { type: Number, required: true },
  total: { type: Number, required: true },
});

module.exports = mongoose.model('Stockin', stockInSchema); 
