const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userAccountModel = require("./models/userAccounts");

const app = express();
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    }
));
app.use(express.json());

mongoose.connect(
    "mongodb+srv://ytbduonghiep:S3Etaser1LkTPVcz@hiepduong.mudnqxm.mongodb.net/shome?retryWrites=true&w=majority"
)

app.get("/", (req, res) => {
    res.json("Hello")
})

app.get("/getUserAccounts", (req, res) => {
    userAccountModel.find({}).then(function (users) {
        res.json(users)
    }).catch(function (err) {
        res.json(err)
    })
})

app.post("/createUserAccount", async (req, res) => {
    const user = req.body;
    const newUserAccount = new userAccountModel(user);
    await newUserAccount.save();
    res.json(user);
})


app.listen(3001, () => {
    console.log("sever is running");
})