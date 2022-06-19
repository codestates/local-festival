const db = require("../../db/index");

module.exports = {
  festivals: {
    get: (callback) => {
      const querySting =
        "SELECT festival_api_first.*, festival_api_second.overview, festival_api_second.url FROM festival_api_first INNER JOIN festival_api_second ON festival_api_first.content_id=festival_api_second.content_id";

      db.query(querySting, (error, result) => {
        //console.log(result);
        callback(error, result);
      });
    },
  },
};
