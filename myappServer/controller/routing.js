const mongoose = require('./mongoose');
let Schema = mongoose.Schema;

let comments = new Schema({
  path: String,
  name: String,
  icon: String
});
let routing = mongoose.model('Router', comments);

exports.getRouting = (req, res, next) => {
  routing.find({}, {
    __v: 0
  }, (err, data) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({
      code: 200,
      msg: data
    })
  })
}