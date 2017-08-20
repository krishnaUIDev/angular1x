/*
'use strict';

// Declare app level module which depends on views, and controllers
angular.module('myApp', [
  'ngRoute'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view2'});
}]);


*/

(function (angular) {
    'use strict';

    function AppConfig($routeProvider) {
        $routeProvider
            .when('/Features',{
                templateUrl: 'template/Feature/Feature.html'
            })
            .when('/home',{
                templateUrl: 'template/home.html'
            })
            .when('/pricing',{
                templateUrl: 'template/pricing.html'
            })
            .when('/Education',{
                templateUrl: 'template/education/education.html'
            })
            .when('/popular',{
                templateUrl: 'template/popular/popular.html'
            })
            .when('/blog',{
                templateUrl: 'template/blog/blog.html'
            })
            .when('/Login',{
                templateUrl: 'template/Credentials/Login.html'
            })
            .when('/Signup',
                {
                templateUrl: 'template/Credentials/Signup.html'
            })

            .otherwise('/home');
    }

    angular.module('myApp',[
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'customApp.controller'])


        .config(AppConfig);
//customcontroller creating
    angular.module('customApp.controller',[]);

})(window.angular || (window.angular = {}));
