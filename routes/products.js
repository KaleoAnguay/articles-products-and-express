/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const productsDb  = require('../db/products.js');


router.route('/')
.get((req,res) => {
  res.render('./products/index',{
    everything: productsDb.everything
  });
})

.post((req,res) => {
  console.log('is it working');
  productsDb.add(req.body, (err, pro) => {
    if(err){
      throw new Error(err);
    }

    res.redirect('/products');
  });
});

router.route('/new')

.get((req,res) => {
  res.render('./products/new');
});

//put and get by uri
router.route('/:id')

.put((req,res) => {
  let findId = productsDb.find(req.params.id);
  productsDb.edit(findId, (err, pro) => {
    if(err) {
      console.log(err);
      throw new Error(err);
    }
    res.redirect(303,`/products/${req.params.id}`);
  });
})

.get((req,res) => {
  console.log('is it working');
  productsDb.find(req.params, (err, pro) => {
    console.log(pro);
    if(err) {
      throw new Error(err);
    }
    res.render('./products/product', {
      product: pro
    });
  });
});

// router.route('/:id/edit');






module.exports = router;