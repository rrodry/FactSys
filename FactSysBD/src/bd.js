const path = require('path');
const User = require('./models/Users.js')
const fs = require('fs');
const port = process.env.port || 3001
const modelDefiners = [];
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(`mysql://root:wellknows@localhost:3306/sysfacturacion`, {
  logging: true, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


const basename = path.basename(__filename);

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

sequelize.models = Object.fromEntries(capsEntries);

module.exports = {
    conn: sequelize,
    ...sequelize.models
}