const express = require("express");
const app = express();
const sequelize = require("./config/database");
const User = require("./model/UserModel");
app.use(express.json());

// Database configuration
const DBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established");
  } catch (error) {
    console.log(error.message);
  }
};
DBConnection();

app.get("/user", async (req, res) => {
  try {
    const data = await User.findAll();
    return res.json({ data });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/user", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await User.create({ name, email, password });
    return res.json({ success: true, message: "User successfully created." });
  } catch (error) {
    return res.status(500).send(error);
  }
});
app.listen(5000, () => console.log("listening on port 5000"));
