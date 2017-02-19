var path = require('path')
let express = require('express')
let port = 80
let app = express()
let router = express.Router()



app.get('/', (req, res) => {
	res.redirect('/resume')
})

/*
router.get('/', (req, res, next) => {
	req.url = '/resume'
	next()
})

app.use(router)*/

var appData = require('./data/data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

var apiRoutes = express.Router()

apiRoutes.get('/seller', (req, res)  => {
  res.json({
    errno: 0,
    data: seller
  })
})

apiRoutes.get('/goods', (req, res) => {
  res.json({
    errno: 0,
    data: goods
  })
})

apiRoutes.get('/ratings', (req, res) => {
  res.json({
    errno: 0,
    data: ratings
  })
})

app.use('/api', apiRoutes);
/*
app.get('/', function (req, res) {
	res.redirect('yuewen/index.html') 
})

app.get('/sell', function (req, res) {
	res.redirect('index.html') 
}) */


app.use(express.static(path.join(__dirname, 'public')))

//必须要加一个.  否则不行
//app.use(express.static('./public'))


app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('> Listening at http://localhost:' + port +'\n')
})


