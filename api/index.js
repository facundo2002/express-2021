// traer la DB
const db = require('../models');

// SELECT * FROM libro
// Esto es una función anónima de tipo arrow function guardada en una variable llamada getBooks... por lo tanto: es una función llamada getBooks
const getBooks = async () => {
    // Llamo a la DB
    const books = await db.libro.findAll().then(result => {
        return result;
    });

    return books;
}

// Exportamos las funciones
module.exports = {
    getBooks
}

