import Slingshot from 'meteor/edgee:slingshot';

export default {
  addProduct({Meteor, LocalState, FlowRouter},
        productName, productDescription, productPrice,
        productImage, productCategory, isFeatured){

    if(!productName){return LocalState.set('ADD_PRODUCT_ERROR', 'Name is required.');}
    if(!productPrice || !Number(productPrice)){return LocalState.set('ADD_PRODUCT_ERROR', 'Price is required.');}
    if(productCategory === 'selectCategory'){return LocalState.set('ADD_PRODUCT_ERROR', 'Category is required.');}

    LocalState.set('ADD_PRODUCT_ERROR', null);

    if( productImage instanceof window.File && productImage instanceof window.Blob){

      var uploader = new Slingshot.Slingshot.Upload( "imageUpload" );
      uploader.send(productImage, function (error, downloadUrl) {
        if (error) {alert (error);}
        else {
          let product = {
            name: productName,
            description: productDescription,
            price: Number(productPrice),
            image: downloadUrl,
            category_id: productCategory,
            isFeatured: isFeatured,
          }
          Meteor.call('product.add', product, (err) => {
            if(err){return LocalState.set('ADD_PRODUCT_ERROR', err.message);}
            FlowRouter.go('/admin/list/product');
          });
        }
      });

    } else{
      let product = {
        name: productName,
        description: productDescription,
        price: Number(productPrice),
        image: '',
        category_id: productCategory,
        isFeatured: isFeatured,
      }

      Meteor.call('product.add', product, (err) => {
        if(err){return LocalState.set('ADD_PRODUCT_ERROR', err.message);}
        FlowRouter.go('/admin/list/product');
      });
    }
  },

  search({LocalState, Collections}, searchName){
    if(searchName === '')
      searchName = ' ';
    return LocalState.set({
      productLimit: 5,
      searchProductName: searchName
    });
  },

  loadMore({LocalState}){
    var productLimit = LocalState.get('productLimit');
    return LocalState.set('productLimit', productLimit+5);
  },

  removeProduct({Meteor,LocalState, Collections, FlowRouter},productId){
    if(!productId){return LocalState.set('REMOVING_PRODUCT_ERROR', 'Deletion failed.')}

    Meteor.call('product.delete', productId, (err) => {
      if(err){return LocalState.set('REMOVING_PRODUCT_ERROR', err.message);}
      FlowRouter.go('/admin/list/product');
    });
  },

  updateProduct({Meteor, Collections, FlowRouter, LocalState},productId,
                  productName, productDescription, productPrice,
                  productImage, productCategory, isFeatured,
                  removeProductImage, image){

    if(!productId){return LocalState.set('UPDATING_PRODUCT_ERROR', 'Id is required.');}
    if(!productName){return LocalState.set('UPDATING_PRODUCT_ERROR', 'Name is required.');}
    if(!productPrice || !Number(productPrice)){return LocalState.set('UPDATING_PRODUCT_ERROR', 'Price is required.');}

    LocalState.set('UPDATING_PRODUCT_ERROR', null);

    if( productImage.files[0] instanceof window.File && productImage.files[0] instanceof window.Blob){

      var uploader = new Slingshot.Slingshot.Upload('imageUpload');
      uploader.send(productImage.files[0], (error, downloadUrl) => {
        if(error){alert(error);}
        else{
          Meteor.call('product.update', productId, productName, productDescription, Number(productPrice),downloadUrl, productCategory, isFeatured, (err) => {
            if(err){return LocalState.set('UPDATING_PRODUCT_ERROR', err.message);}
            FlowRouter.go('/admin/list/product');
          });
        }
      });

    } else if (removeProductImage){
      Meteor.call('product.update', productId, productName, productDescription, Number(productPrice),'', productCategory, isFeatured, (err) => {
        if(err){return LocalState.set('UPDATING_PRODUCT_ERROR', err.message);}
        FlowRouter.go('/admin/list/product');
      });

    } else if( !removeProductImage && !(productImage.files[0] instanceof window.File) && !(productImage.files[0] instanceof window.Blob)) {

      if(!image)image = '';
      Meteor.call('product.update', productId, productName, productDescription, Number(productPrice),image, productCategory, isFeatured, (err) => {
        if(err){return LocalState.set('UPDATING_PRODUCT_ERROR', err.message);}
        FlowRouter.go('/admin/list/product');
      });
    }
  },

  cancel( {FlowRouter}){
    FlowRouter.go('/admin/list/product');
  },

  clearAddProductErrors({LocalState}){
    return LocalState.set("ADD_PRODUCT_ERROR", null);
  },

  clearUpdateProductErrors({LocalState}){
    return LocalState.set("UPDATING_PRODUCT_ERROR", null);
  }

}
