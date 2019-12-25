const express = require('express');
const app = express();
// todo lo que esta en public va a ser de dominio publico si o si
// aca abajo direcciona estaticamente la carpeta public 
app.use(express.static(__dirname + '/public'));

//express hbs
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Wilson',
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});