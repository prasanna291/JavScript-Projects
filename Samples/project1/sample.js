var app=angular.module("myapp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',
    {
        controller:'myctrl',
        templateUrl:'/sample.html'
    })
    .when('/html',
    {
        controller:'htmlctrl',
        templateUrl:'html.html'
    })
    .when('/css',
    {
        templateUrl:'css.html'
    })
    .when('/javascript',
    {
        templateUrl:'javascript.html'
    })
    .when('/jquery',
    {
        templateUrl:'jquery.html'
    })
    .when('/bootstrap',
    {
        templateUrl:'bootstrap.html'
    })
    .when('/angularjs',
    {
        templateUrl:'angularjs.html'
    })
    .when('/typescript',
    {
        templateUrl:'typescript.html'
    })
    
    .otherwise({redirectTo:'/'});
})
app.controller("myctrl", function($scope){

});