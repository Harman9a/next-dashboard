const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const UserSchema = require("./Model/User");
const BranchSchema = require("./Model/Branch");
const ClientSchema = require("./Model/Client");
const BalancesheetSchema = require("./Model/Balancesheet");

require("dotenv").config();

let app = express();
let port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.post("/register", async (req, res) => {
  try {
    let newUser = new UserSchema(req.body);
    const result = await newUser.save();

    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    let user = await UserSchema.findOne(req.body);

    if (user) {
      console.log(user);
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/addBranch", async (req, res) => {
  try {
    let newBranch = new BranchSchema(req.body);
    const result = await newBranch.save();

    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/deleteBranch", async (req, res) => {
  try {
    let result = await BranchSchema.findByIdAndDelete(req.body.id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/getBranch", async (req, res) => {
  try {
    const data = await BranchSchema.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/addClient", async (req, res) => {
  try {
    let newClient = new ClientSchema(req.body);
    const result = await newClient.save();

    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/getClient", async (req, res) => {
  try {
    const data = await ClientSchema.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/getClient", async (req, res) => {
  try {
    const data = await ClientSchema.findById(req.body.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/deleteClient", async (req, res) => {
  try {
    let result = await ClientSchema.findByIdAndDelete(req.body.id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/getBalanceSheet", async (req, res) => {
  try {
    const data = await BalancesheetSchema.find(
      {clientId: req.body.id}
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/saveBalancesheetData", async (req, res) => {
  try {
    const data = await BalancesheetSchema.find(
      {clientId: req.body.clientId}
    );
    if(data.length == 0){
      let newBalancesheet = new BalancesheetSchema(req.body);
      const result = await newBalancesheet.save();
      res.status(200).json(result);
    }else{
      res.status(500).json({ message: 'Already Exist' });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
