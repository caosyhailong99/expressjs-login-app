var express = require("express");
var router = express.Router();
const Account = require("../models/Account");

/* POST Login */

// req.body: {username: string, password: string}
router.post("/", async function (req, res) {
  let loginInfo = req.body;
  let foundedAcc = await Account.findOne(loginInfo);
  if (!foundedAcc) res.json({result: "LOL, no way :))"});
  else res.json({result: "OK, you're good."});
});

module.exports = router;
