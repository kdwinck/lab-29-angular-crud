'use strict'

module.exports = {
  template: require('./image-upload.html'),
  controller: ['$log', 'galleryService', ImageUploadController],
  controllerAs: 'imageUploadCtrl',
  bindings: {
    gallery: '<',
    upload: '<'
  }
}

function ImageUploadController($log, galleryService) {
  $log.debug('imageUploadCtrl')

  this.image = {}

  this.uploadImage = function() {
    this.upload = false
    // imageService.uploadImage(this.gallery, this.image)
    //   .then(() => {
    //     this.pic.name = null
    //     this.pic.desc = null
    //     this.pic.file = null
    //     this.upload = false;
    //   })
  }
}
