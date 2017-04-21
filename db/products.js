
let everything = [];
let productsId = 0;

const addPro = (pro, callback) => {
  pro.price = parseFloat(pro.price);
  pro.inventory = parseFloat(pro.inventory);
  pro.id = productsId++;
  everything.push(pro);
  callback(null, everything);
};

module.exports  = {
  addPro: addPro,
  everything: everything
};