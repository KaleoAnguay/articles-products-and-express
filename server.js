/*jshint esversion: 6 */
const express = require('express');
const bp = require('body-parser');
const handlebars = require('express-handlebars');
const products = require('./routes/products.js');
const PORT = 3333;

const app = express();

// const hbs = handlebars.create({
//   extname: '.hbs',
//   defaultlayout: 'app'
// });
// app.engine('hbs', hbs.engine);

app.use(bp.urlencoded({extended: false}));
app.set('view engine', 'hbs');

app.use('/products', products);


app.get('/', (req, res) => {
  res.send();
});


app.listen(PORT, () => {
  console.log(`you have been connected to PORT: ${PORT}`);
});
