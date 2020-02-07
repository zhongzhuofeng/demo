const mongoose = require('./mongoose');

let Schema = mongoose.Schema;

let comments = new Schema({
  src: String,
  url: String
});
let swiper = mongoose.model('Swiper', comments);

exports.getSwiper = (req, res, next) => {
  swiper.find({}, {
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