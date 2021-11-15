const product = require('./controllers/product')
const express = require('express')


const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor

// Esto es el visualizador de template
app.set('view engine', 'pug'); //modifica el motor de vistas y usa pug
app.set('views','./views'); //views lo coge de la ruta carpeta /views.


app.get('/first_template', function(req, res){
    let random = Math.floor(Math.random() * (25 - 1)) + 1;
    res.render('first_view', {name: 'Ruben =)', hora: random});
 });

app.get('/', (req, res) => {
  res.send('Mi home de productos')
})

app.get('/products/:id?', product.getProduct);
app.post('/products', product.createProduct);


app.get('/things/:name/:id', function(req, res) {
    console.log("*******************");
    console.log(req.params);
    res.send('He recibido esto: --> id: ' + req.params.id);re
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});