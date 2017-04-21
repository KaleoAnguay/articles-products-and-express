/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const productsDb  = require('../db/products.js');


router.route('/')
.get((req,res) => {
  res.send(productsDb.everything);
})
.post((req,res) => {
  productsDb.addPro(req.body, (err, pro) => {
    if(err){
      throw new Error(err);
    }
    res.redirect('/products');
  });
})

.put((req,res) => {
  console.log(req);
})




module.exports = router;