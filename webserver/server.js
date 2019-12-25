const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')
const port = process.env.PORT || 3000;
// todo lo que esta en public va a ser de dominio publico si o si
// aca abajo direcciona estaticamente la carpeta public 
app.use(express.static(__dirname + '/public'));

//express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'wIlson'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});