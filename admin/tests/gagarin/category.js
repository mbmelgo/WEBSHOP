describe('Category Module', function () {
  var param = {flavor:"fiber"};
  var settings = require('../../settings.json');
  var server = meteor({
    flavor: 'fiber',
    settings: settings
  });
  var client = ddp(server, {flavor: 'fiber'});

  it('should be able to add categories', function(){
    client.call('category.add', [{
      name: 'Sample Test Category',
      image: '',
    }]);

    client.subscribe('categoryList');

    var categories = client.collection('categories');
    expect(Object.keys(categories).length).to.equal(1);
  });

  it('should be able to subscribe to the Categories collection and return an object', function(){
    client.subscribe('categoryList');
    var categories = client.collection('categories');
    expect(categories).to.be.a('Object');
  });

  it('should NOT equal to NULL or UNDEFINED', function () {
    client.subscribe("categoryList");
    var category = client.collection("categories");
    expect(category).to.not.be.a("undefined");
  });

  it('should have the correct data inserted', function(){
    client.subscribe("categoryList");
    var category = client.collection("categories");
    for(var i in category){
      expect(category[i].name).to.equal('Sample Test Category');
      expect(category[i].createdAt).to.be.a('Date');
    }
  });

  it('should update the data', function(){
    client.subscribe("categoryList");
    var category = client.collection("categories");
    var id = Object.keys(category)[0];
    var name = 'Sample Test Category Updated';
    var image = 'sample-image';
    client.call("category.update", [id, name,image]);
  });

  it('should reflect the updated data', function(){
    client.subscribe("categoryList");
    var category = client.collection("categories");
    for(var i in category){
      expect(category[i].name).to.be.equal('Sample Test Category Updated');
      expect(category[i].image).to.be.equal('sample-image');
    }
  });

  it('should delete the category', function(){
    client.subscribe("categoryList");
    var category = client.collection("categories");
    var id = Object.keys(category)[10];
    expect(category).to.have.property(id);
    client.call("category.delete", [id]);
    expect(category).to.be.empty;
  });


});
