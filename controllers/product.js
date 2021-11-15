const data = require('../models/product') 
console.log(data) //lee el array de datos

const product = {
    getProduct: (req,res)=>{
        console.log("*******************");
        console.log(req.params);
        
        
        if(req.params.id){
            res.render('product', {products:[data[req.params.id]]})
        } else{
            res.render('product', {products:data}) //Envio un array con N datos
        }
    },
    createProduct: (req,res)=>{
        console.log("***************");
        console.log(req.body);
        res.status(201).send('Nuevo producto creado');
    }
}

module.exports = product;