var
    express     = require('express'),
    app         = express(),
    logger      = require('morgan'),
    // materialize = require('materialize-css'),
    path        = require('path'),
    port        = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'))

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function(){
    console.log('Server running at http://localhost:' + port)
})