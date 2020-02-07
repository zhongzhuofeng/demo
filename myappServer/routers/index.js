let express = require('express');
let router = express.Router();
let swiper = require('../controller/Swiper.js')
let goodsList = require('../controller/goodsList.js')
let routing = require('../controller/routing.js')
let files = require('../controller/files.js')
router.get('/swiper', swiper.getSwiper)
  .get('/getShopList', goodsList.getGoodsList)
  .get('/parameters', routing.getRouting)
  .post('/filesImage', files.postFiles)

module.exports = router;