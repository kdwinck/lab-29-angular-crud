'use strict'

module.exports = {
  template: require('./image-gallery.html'),
  controller: ['$log', 'imageService', ImageGalleryController],
  controllerAs: 'imageGalleryCtrl',
  bindings: {
    images: '<'
  }
}

function ImageGalleryController($log, imageService) {
  $log.debug('ImageGalleryController')
}
