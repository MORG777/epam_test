'use strict';
var IndexController = function($scope, Data, $state){
    
    $scope.books = Data.getData();
    
    $scope.DeleteBook = function(id){
        Data.deleteBook(id);
        $state.go($state.current, {}, {reload: true});
    };
};
