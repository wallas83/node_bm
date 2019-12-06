//requierds
const colors = require('colors');
const fs = require('fs');



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el dato de entrada ${base} no es un numero`);
            return;
        }
        data = '';
        for (let i = 1; i <= limite; i++) {
            data += ` ${base} x ${i}  = ${base * i}\n`;
        }

        fs.writeFile(`tablas/multiplicar-${base}-al- ${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`multiplicar-${base}.txt`.green)
        });

    });
}

let listarTabla = (base, limite = 10) => {
        console.log('================================='.green);
        console.log(`========= tabla de ${base}==========`.yellow);
        console.log('================================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(` ${base} x ${i}  = ${base * i}\n`);
        }

    }
    //sirve para exportar el cuial se ejecuta de manera 
module.exports = {
    crearArchivo,
    listarTabla
}