const express = require("express");//It's a layer built on the top of the Node js that helps manage servers and routes
const router = express.Router(); //use for handle request

router.post("/fooddata", (req, res) => {
  try {
    res.send([global.coffee_items, global.coffee_category]);
  } catch (error) {
    console.error(error.message);
    res.send("server error");
  }
});

module.exports = router;


