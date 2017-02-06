import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({

    'category.add'(category) {
      check(category, {
        name: String,
        image: String,
      });
      category.createdBy = this.userId;
      category.createdAt = new Date();
      Categories.insert(category);
    },

    'category.delete'(categoryId) {
      check(categoryId, String);
      Categories.remove({_id:categoryId});
    },

    'category.update'(categoryId,
      categoryName, categoryImage) {
      check(categoryId, String);
      check(categoryName, String);
      check(categoryImage, String);
      Categories.update(
        {_id:categoryId},
        { $set:{name: categoryName,image: categoryImage}
        }
      );
    },
  });
}
