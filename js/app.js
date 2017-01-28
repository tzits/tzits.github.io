angular
  .module('port', ['ngRoute'])
  .config(config)



config.$inject = ['$routeProvider', '$locationProvider']
function config(   $routeProvider,  $locationProvider   ) {
    $routeProvider
        .when('/', {
          templateUrl: './templates/skills.html',
          controllerAs: 'skillsCtrl',
          controller: 'SkillsController'
        })
 }


SkillsController.$inject = ['$http', '$routeParams'];

function SkillsController($http) {
 	console.log('skills')
 }