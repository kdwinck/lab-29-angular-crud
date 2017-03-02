'use strict'

module.exports = {
  template: require('./img-upload.html'),
  controller: ['$log', 'galleryService', 'imageService', ImageUploadController],
  controllerAas: 'imageUploadCtrl',
  bindings: {
    gallery: '<'
  }
}

function ImageUploadController($log, galleryService, imageService) {
  $log.debug('imageUploadCtrl')

  this.image = {}

  this.uploadImage = function() {
    imageService.uploadImage(this.gallery, this.image)
      .then(() => {
        this.pic.name = null
        this.pic.desc = null
        this.pic.file = null
      })
  }
}
