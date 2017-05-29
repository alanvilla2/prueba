//receta de cocinca
//servidor web
//cargando para cargar serivdores web 
const express = require('express');
//generado un servidor web
var server = express();
//configurando el servicio
//estatico de archivos
server.use(express.static('public'));
//configuando server
const IP = process.env.IP || "0.0.0.0";
const PORT = process.env.PORT || 3000;
//poniendo a trabajar el server
server.listen(PORT,IP,function(err){
    if(err){
        console.log("> Error al iniciar server: " + err);
        throw err;
    }
console.log("> Server escuchando en http://" + IP + ":" + PORT + "/...");
});