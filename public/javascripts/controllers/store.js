(function(){
    var store = angular.module('store');

    store.controller('bookController', ['$scope',
        function ($scope){

        }]);

    store.controller('storeController', ['$scope', '$resource',
        function ($scope, $resource) {

            var Book = $resource('/api/book');

            Book.query(function(results){
                $scope.books = results['items'];
            });

            $scope.books = [];

            $scope.addBook = function(){
                var book = new Book();
                book.itemName = $scope.bookName;
                book.ownerName = $scope.bookProvider;
                book.ownerTelephone = $scope.provederCell;
                book.subject = $scope.bookSubject;
                book.price = $scope.bookPrice;
                book.description = $scope.bookDescription;
                book.$save(function(result){
                    $scope.books.push(result);
                });
            },

            $scope.sellBook = function(){
               var book = new Book();

               book.$delete(function(){
                    $scope.selected.destroy();
               });
            },

            $scope.searchBook = function(){

                var val = $scope.searchVal;
                var search = {title: val};
                $http.post('/api/search',search,function(results){
                    $scope.searchRes = results;
                });
            }
        }]);
})();