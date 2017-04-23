/*jshint esversion: 6*/
let everything = [];
let productsId = 1;

const add = (req, callback) => {
  req.price = parseFloat(req.price);
  req.inventory = parseFloat(req.inventory);
  req.id = productsId++;
  everything.push(req);
  callback(null, everything);
};

const find = (req, callback) => {
  for(let i = 0; i < everything.length; i++) {
    if(parseInt(req.id) === everything[i].id) {
      return callback(null, everything[i]);
    }
  }
};

const edit = (req, callback) => {
  if(req.body){
    everything = req.body;
    console.log(everything);
  }
};

module.exports  = {
  edit: edit,
  find: find,
  add: add,
  everything: everything
};