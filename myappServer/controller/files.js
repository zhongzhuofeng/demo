var formidable = require('formidable');
let path = require('path')
let mongoose = require('./mongoose.js')
let component = new mongoose.Schema({
  src: String,
  name: String
})
let picture = mongoose.model('Picture', component)
exports.postFiles = (req, res, next) => {
  var form = new formidable.IncomingForm();
  form.keepExtensions = true; //保留后缀
  form.encoding = 'utf-8';
  form.uploadDir = path.join(__dirname + "/../public/upload")
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.json({
        msg: '储存错误',
        code: 400
      })
    }
    let filesLength = files.file.path.indexOf('/public/')
    let src = 'http://192.168.0.180:3000' + files.file.path.substring(filesLength)
    let name = path.basename(files.file.path)
    new picture({
      src: src,
      name: name
    }).save((err, data) => {
      console.log(data)
      res.json({
        msg: [data],
        code: 200
      })
    })

  })

}