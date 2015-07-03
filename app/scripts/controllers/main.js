'use strict';

/**
 * @ngdoc function
 * @name gpsDeployPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gpsDeployPageApp
 */
var phonecatApp = angular.module('phonecatApp', []); //ng-app

phonecatApp.controller('PhoneListCtrl', function ($scope) { //ng-controller
  //Establecemos los datos que vamos a pasar a la vista, el scope es bi-direccional
  $scope.phones = [
    {'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
      'snippet': 'The Next, Next Generation tablet.'}
  ];
});
