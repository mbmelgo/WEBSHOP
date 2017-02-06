import Slingshot from 'meteor/edgee:slingshot';

export default {

  addCategory({Meteor, LocalState, FlowRouter, Collections},
              categoryName, categoryImage){
    if(!categoryName){return LocalState.set('ADD_CATEGORY_ERROR', 'Name is required.');}
    if(Collections.Categories.find({name:categoryName}).fetch().length > 0){return LocalState.set('ADD_CATEGORY_ERROR', 'Name is not unique.');}

    LocalState.set('ADD_CATEGORY_ERROR', null);

    if( categoryImage instanceof window.File && categoryImage instanceof window.Blob){
      var uploader = new Slingshot.Slingshot.Upload( "imageUpload" );

      uploader.send(categoryImage, function (error, downloadUrl) {
        if (error) {alert (error);}
        else {
          let category = {name: categoryName,image: downloadUrl}
          Meteor.call('category.add', category, (err) => {
            if(err){return LocalState.set('ADD_CATEGORY_ERROR', err.message);}
            FlowRouter.go('/admin/list/category');
          });
        }
      });

    } else {
      let category = {name: categoryName,image: ''}
      Meteor.call('category.add', category, (err) => {
        if(err){return LocalState.set('ADD_CATEGORY_ERROR', err.message);}
        FlowRouter.go('/admin/list/category');
      });
    }
  },

  search({LocalState, Collections}, searchName){
    return LocalState.set({
      categoryLimit: 3,
      searchName: searchName
    });
  },

  loadMore( {LocalState}){
    var categoryLimit = LocalState.get('categoryLimit');
    return LocalState.set('categoryLimit', categoryLimit+3);
  },

  removeCategory({Meteor,LocalState, Collections, FlowRouter},categoryId){
    if(!categoryId){return LocalState.set('REMOVING_CATEGORY_ERROR', 'Deletion failed.')}

    Meteor.call('category.delete', categoryId, (err) => {
      if(err){return LocalState.set('REMOVING_CATEGORY_ERROR', err.message);}
      FlowRouter.go('/admin/list/category');
    });
  },

  updateCategory({Meteor, Collections, FlowRouter, LocalState},categoryId,
                  categoryName, categoryImage,removeCategoryImage, image){

    if(!categoryId){return LocalState.set('UPDATING_CATEGORY_ERROR', 'Id is required.');}

    if(!categoryName){return LocalState.set('UPDATING_CATEGORY_ERROR', 'Name is required.');}

    const categoryMatch = Collections.Categories.find({name:categoryName}).fetch();

    if(categoryMatch.length > 0){
      if(categoryMatch.length === 1 && categoryMatch[0]._id != categoryId){
        return LocalState.set('UPDATING_CATEGORY_ERROR', 'Name is not unique.');
      }
    }

    LocalState.set('UPDATING_CATEGORY_ERROR', null);

    if( categoryImage.files[0] instanceof window.File && categoryImage.files[0] instanceof window.Blob){
      var uploader = new Slingshot.Slingshot.Upload('imageUpload');

      uploader.send(categoryImage.files[0], (error, downloadUrl) => {
        if(error){alert(error);}
        Meteor.call('category.update', categoryId, categoryName, downloadUrl, (err) => {
          if(err){return LocalState.set('UPDATING_CATEGORY_ERROR', err.message);}
          FlowRouter.go('/admin/list/category');
        });
      });

    } else if (removeCategoryImage){
      Meteor.call('category.update', categoryId, categoryName, '', (err) => {
        if(err){return LocalState.set('UPDATING_CATEGORY_ERROR', err.message);}
        FlowRouter.go('/admin/list/category');
      });

    } else if( !removeCategoryImage && !(categoryImage.files[0] instanceof window.File) && !(categoryImage.files[0] instanceof window.Blob)) {
      if(!image)image = '';
      Meteor.call('category.update', categoryId, categoryName, image, (err) => {
        if(err){return LocalState.set('UPDATING_CATEGORY_ERROR', err.message);}
        FlowRouter.go('/admin/list/category');
      });
    }
  },

  cancel( {FlowRouter}){
    FlowRouter.go('/admin/list/category');
  },

  clearAddCategoryErrors({LocalState}){
    return LocalState.set("ADD_CATEGORY_ERROR", null);
  },

  clearUpdateCategoryErrors({LocalState}){
    return LocalState.set("UPDATING_CATEGORY_ERROR", null);
  }
}
