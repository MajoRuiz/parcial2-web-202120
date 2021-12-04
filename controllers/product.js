const data = require('../assets/data');

function getProducts(query) {
 if (query!=""){
   return data.filter(producto => producto.name.toLowerCase().includes(query.toLowerCase()))
 }
 else {
   return data
 }
}

module.exports = { getProducts };
