const mongoose = require('./mongoose');

let Schema = mongoose.Schema;
let comments = new Schema({
  img_url: String,
  title: String,
  sell_price: Number,
  market_price: Number,
  stock_quantity: Number
});
let goodsList = mongoose.model('goodsList', comments);

exports.getGoodsList = (req, res, next) => {
  const reg = new RegExp(req.query.title, 'i')
  let currentPage = Number(req.query.currentPage)
  let pageSize = Number(req.query.pageSize)
  goodsList.countDocuments({}, (err, count) => {
    goodsList.find({
      $or: [{
        title: {
          $regex: reg
        }
      }]
    }, {
      __v: 0
    }, (err, data) => {
      res.json({
        code: 200,
        msg: data,
        total: count,
        currentPage: currentPage,
        pageSize: pageSize
      })
    }).skip((currentPage - 1) * pageSize).limit(pageSize)
  })
}