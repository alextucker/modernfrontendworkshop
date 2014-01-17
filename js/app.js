var app = angular.module('MyApp', []);

app.controller('TodoController', function($scope){
    $scope.todos = [
        {name: 'Example', isDone:false},
        {name: 'Example Done', isDone:true}
    ];
});
