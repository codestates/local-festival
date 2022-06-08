const models = require("../models");

module.exports = {
  festivals: {
    get: (req, res) => {
      const date = "a";
      console.log("뭐야");
      if (!date) {
        return res.status(401).send("wrong date");
      } else {
        models.festivals.get((error, result) => {
          if (error) {
            res.status(500).send("Internal Server Error");
          } else {
            res.status(200).json(result);
          }
        });
      }
    },
  },
};
