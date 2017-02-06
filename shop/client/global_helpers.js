exports.getTotalPrice = function (products) {
  let total = 0;
  products.forEach( function(product){
    total = total + product.price;
  });
  return total;
};

exports.getItemsLeft = function (total) {
  total = total - 4; //change to settings/config
  return total < 1 ? 0 : total;
};

exports.sortEm = function(a,b){
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}
