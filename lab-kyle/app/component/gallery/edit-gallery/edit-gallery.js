'use strict'

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<'
  }
}

function EditGalleryController($log, galleryService) {

  this.editGallery = function() {
    galleryService.editGallery()
  }
}
