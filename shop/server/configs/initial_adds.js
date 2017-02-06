import {Productss} from '/lib/collections';
import {commerce, random} from 'faker';

export default function(){
  if(Productss.find().count() < 10){
    for (let i = 0; i < 15 ; i++) {
      var name = commerce.productName();
      var price = parseInt(commerce.price());
      var description = commerce.productAdjective();
      var img = 'http://dummyimage.com/200x200/000/0011ff.png';
      var view_ctr = random.number();
      var featured;
      var categories;
      if (i % 2 == 0 ) {
        featured = true;
        categories = "Unknown 1";
      } else {
        featured = false;
        categories = "Uknown 2";
      }

      Productss.insert({name, price, description, view_ctr, img, featured, categories})
    }
  }
}
