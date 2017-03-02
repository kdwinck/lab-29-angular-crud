'use strict'

require('./_thumbnail.scss')

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'imageService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    images: '<'
  }
}

function ThumbnailController($log, imageService) {
  $log.debug('ThumbnailController')

  this.showAllPics = function() {
    $log.debug('ThumbnailController.showAllPics')
  }

  this.deletePic = function() {
    $log.debug('ThumbnailController.deletePic')
  }
}
