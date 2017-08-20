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
            .when('/about',{
                templateUrl: 'template/about/about.html'
            })
            .when('/home',{
                templateUrl: 'template/home.html'
            })
            .when('/contact',{
                templateUrl: 'template/contact/contact.html'
            })
            .when('/development',{
                templateUrl: 'template/Development/development.html'
            })
            .when('/portfolio',{
                templateUrl: 'template/portfolio/portfolio.html'
            })
            .when('/SEO',{
                templateUrl: 'template/seo/seo.html'
            })
            .when('/WEBDESIGN',{
                templateUrl: 'template/webdesign/webdesign.html'
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
