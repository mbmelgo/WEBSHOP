import Slingshot from 'meteor/edgee:slingshot';

export default function(){
  Slingshot.Slingshot.createDirective("imageUpload", Slingshot.Slingshot.S3Storage, {
    bucket: "snapzio-blog",
    acl: "public-read",
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
    maxSize: 10 * 1024 * 1024,

    authorize: function () {
      if (!this.userId) {
        var message = "Please login before posting files";
        throw new Meteor.Error("Login Required", message);
      }
      return true;
    },

    key: function (file) {
      var user = Meteor.users.findOne(this.userId);
      return user._id + "/" + file.name;
    }

  });
}
