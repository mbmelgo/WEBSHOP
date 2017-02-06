import {Categories, Products, Orders} from '/lib/collections';
import {commerce, name, internet} from 'faker';

const sampleCategories = ['Electronics', 'Books', 'Clothing and Apparel',
                          'Household Goods', 'Office Supplies', 'Packed Goods',
                          'Sporting Goods', 'Luxury Goods', 'Food', 'Pet Supplies'];



export default function(){
  if(Categories.find().count() < 0){

    for (let i = 0; i < 10 ; i++) {
      let createdBy ="trzGcmWAFj5zFmbeS";
      let createdAt = new Date();
      let name = sampleCategories[i];
      let image = '';

      Categories.insert({name, image, createdBy, createdAt});
    }
  }

  if(Products.find().count() < 0){

    const collections = Categories.find({}).fetch();

    for (let i = 0; i < 50 ; i++) {
      let category_id = collections[Math.floor((Math.random() * 10))]._id;
      let name = commerce.productName();
      let description = commerce.productAdjective();
      let price = Number(commerce.price());
      let image = '';
      let isFeatured = true;
      let viewCount = Math.floor((Math.random() * 100) + 1);
      let createdBy = "trzGcmWAFj5zFmbeS";
      let createdAt = new Date();

      Products.insert({
        category_id,
        name,
        description,
        price,
        image,
        isFeatured,
        viewCount,
        createdBy,
        createdAt,
      });
    }
  }

  if(Orders.find().count() < 0){

    for (let i = 0; i < 5 ; i++) {
      let first = name.firstName();
      let last = name.lastName();
      let email = internet.email();
      let total = commerce.price();
      let isShipped = false;

      Orders.insert({
        first,
        last,
        email,
        total,
        isShipped
      });
    }
  }




}
