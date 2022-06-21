const models = require("../models/index");

module.exports = {
  festivals: {
    get: (req, res) => {
      models.festivals.get((error, result) => {
        if (error) {
          res.status(500).send("Internal Server Error");
        } else {
          res.status(200).json(result);
        }
      })
    },
  },
};
