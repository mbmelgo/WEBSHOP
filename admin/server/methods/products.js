import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({

    'product.add'(product) {
      check(product, {
       category_id: String,
       name: String,
       description: String,
       price: Number,
       image: String,
       isFeatured: Boolean
      });

      product.viewCount = 0;
      product.createdBy = this.userId;
      product.createdAt = new Date();

      Products.insert(product);
    },

    'product.delete'(productId) {
      check(productId, String);
      Products.remove({_id:productId});
    },

    'product.update'(productId, productName, productDescription, productPrice,downloadUrl, productCategory, isFeatured){
      check(productId, String);
      check(productName, String);
      check(productDescription, String);
      check(productPrice, Number);
      check(downloadUrl, String);
      check(productCategory, String);
      check(isFeatured, Boolean);
      Products.update(
        {_id:productId},
        { $set:
          {
            category_id: productCategory,
            name: productName,
            description: productDescription,
            price: productPrice,
            image: downloadUrl,
            isFeatured: isFeatured
          }
        }
      );
    },
  });
}
