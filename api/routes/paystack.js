// @ts-nocheck
const router = require("express").Router();
const paystack = require('paystack')(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  paystack.plan.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    }).then(function (body) {
      console.log(body);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;