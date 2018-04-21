'use strict';
var EditController = function($scope, Data, $state){
    $scope.title = 'Добавление' ;
    $scope.item = {
        'id': '',
        'title': '',
        'author': '',
        'year': '',
        'image': ''
    };
    // for edditing data
    if($state.params.id){
        $scope.item = Data.findById($state.params.id);
        $scope.item.year = parseInt($scope.item.year);
        $scope.title = 'Редактирование';
    }
    
    // save book
    $scope.SendBook = function(){
        Data.saveBook($scope.item);
        $state.go('index', {}, {reload: true});
        return false;
    };
};

