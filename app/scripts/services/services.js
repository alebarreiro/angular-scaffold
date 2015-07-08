/**
 * Created by alejandrobarreiro on 8/7/15.
 */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

/*
  Registramos el servicio usando la funcion factory
  El nombre del servicio es 'Phone' que utiliza la dependencia $resource
  $resource sirve para crear servicios REST

 */
phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
