const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 7000;
const userRouter = require('./router/UserRouter');
const categoryRouter = require('./router/CategoryRouter');
const subRouter = require('./router/SubRouter');
const inventoryRouter = require('./router/InventoryRouter');
const stockinRouter = require('./router/StockInRouter');
const stockoutRouter = require('./router/StockOutRouter');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello Webpage");
});

app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/subcategories", subRouter);
app.use("/api/inventories",inventoryRouter);
app.use("/api/items",stockinRouter);
app.use("/api/exits",stockoutRouter);

const db = 'mongodb+srv://harini:MrQ1PoRESdiCEkz5@intpro1.yavw4.mongodb.net/?retryWrites=true&w=majority&appName=intpro1'
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    });

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});

