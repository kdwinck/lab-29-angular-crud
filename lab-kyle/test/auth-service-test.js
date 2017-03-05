/* global expect angular*/

'use strict'

describe('Auth Service', function() {

  beforeEach(() => {
    angular.mock.module('cfgram')
    angular.mock.inject(( authService, $rootScope, $window, $httpBackend) => {
      this.authService = authService
      this.$window = $window
      this.$rootScope = $rootScope
      this.$httpBackend = $httpBackend
    })
  })

  describe('authService.logout()', () => {
    it('should clear local storage', () => {
      this.$window.localStorage.setItem('token', 'token')

      this.authService.logout()
      .then(() => {
        let result = this.$window.localStorage.getItem('token')
        expect(result).toEqual(null)
      })

      this.$rootScope.$apply()
    })
  })

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null
      this.$window.localStorage.setItem('token', 'test token')

      this.authService.getToken()
        .then( token => expect(token).toEqual('test token'))
        .catch( err => expect(err).toEqual(null))

      this.$rootScope.$apply()
    })
  })


  // describe('authService.signup()', () =>{
  //   it('should sign up a new user', () => {
  //     let user = {'username': 'testUser', 'password': 'testPass'}
  //
  //     this.authService.signup(user)
  //       .then( token => {
  //         expect(token).toEqual(!null)
  //       })
  //
  //     this.$rootScope.$apply()
  //   })
  // })
})
