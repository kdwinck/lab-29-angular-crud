'use strict'

// require('./_edit-gallery.scss')

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', '$window', 'authService', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '<'
  }
}

function EditGalleryController($log, $window, authService, galleryService) {

  this.updateGallery = function() {
    galleryService.updateGallery(this.gallery._id, this.gallery)
      .then(() => {
        console.log('updated')
        $window.location.reload()
      })
  }
}
