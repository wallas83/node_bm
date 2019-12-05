let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Fernando',
        id

    }
    if (id === 20) {
        callback(`El usuario con id ${id}, NO existe en la base de datos`);
    } else {
        callback(usuario);
    }

}
getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});