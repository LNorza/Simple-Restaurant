var express = require("express");
var mysql = require("mysql");
var app = express(); //Ejecutamos constructor y creamos el objeto
//Habilitar recepcion json
app.use(express.json());

//Configuramos la conexion
var conexion = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "simplerestaurant",
});

const cors = require("cors");
const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//Probar conexion
conexion.connect(function (error) {
	if (error) {
		throw error;
	} else {
		console.log("Conectado a la base de datos");
	}
});

// Encender el servidor
app.listen("3000", function () {
	console.log("Servidor puerto 3000");
});
