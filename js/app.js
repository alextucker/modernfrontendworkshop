var app = angular.module('MyApp', []);

app.controller('TodoController', function($scope){
    $scope.todos = [
        {name: 'Example', status:'open'},
        {name: 'Example Done', status:'closed'}
    ];
});
