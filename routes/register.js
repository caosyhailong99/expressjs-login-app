var express = require("express");
var router = express.Router();
var Account = require("../models/Account");

// req.body: {username: string, password: string}
router.post("/", async (req, res) => {
  let registerInfo = req.body;
  await Account.create(registerInfo);
  res.send("OK, cool");
});

module.exports = router;
