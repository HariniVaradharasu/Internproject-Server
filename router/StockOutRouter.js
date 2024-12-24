const express = require('express');
const router = express.Router();
const { createItem, getItem, getItems, updateItem, updateItems, deleteItem, deleteItems} = require('../controller/StockOutController');

router.post("/createItem", createItem);
router.get("/getItem/:id", getItem);
router.get("/getItems", getItems);
router.put("/updateItem/:id", updateItem);  
router.put("/updateItems/:uname", updateItems);  
router.delete("/deleteItem/:id", deleteItem);
router.delete("/deleteItems", deleteItems);
module.exports = router;

