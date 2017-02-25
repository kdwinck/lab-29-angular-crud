'use strict'

require('./_home.scss')

module.exports = ['$log', 'authService', 'galleryService', HomeController]

function HomeController($log, authService, galleryService) {
  $log.debug('HomeController')

  this.fetchGalleries = function() {
    galleryService.fetchGalleries()
      .then( res => {
        this.galleries = res
      })
  }

  this.fetchGalleries()
}
