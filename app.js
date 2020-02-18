
var pgp = require("pg-promise")();
var db = pgp("postgres://postgres:51618545@localhost:5432/node_hero");

db.one("SELECT $1 AS value", 123)
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });


    // Ejemplo para mostrar
    db.any('SELECT * FROM users ', [true])
    .then(function(data) {
        // success;
        //console.log('Si muestra: nombre'+data[0].name);
        data.forEach(valor => {
            console.log('Nombre: '+valor.name+', edad: '+valor.age+'.');
        });
    })
    .catch(function(error) {
        // error;
        console.log('Error al mostrar');
    });

    // Ejemplo para incertar

    db.none('INSERT INTO users(name, age) VALUES($1, $2)', ['John', 19])
    .then(() => {
        // success;
        console.log('El dato se guargo con exicto');
    })
    .catch(error => {
        
        // error;
    });