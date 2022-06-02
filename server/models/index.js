const db = require('../db')

module.exports = {
    festivals : {
        get: (callback) => {
            const querySting = 'SELECT * FROM festival_info'

            db.query(querySting,(error,result) => {
                callback(error,result)
            })
        }
    }
}