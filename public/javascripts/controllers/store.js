(function(){
    var app = angular.module('store', ['book']);

    app.controller('bookController', ['$scope',
        function ($scope){

        }]);

    app.controller('storeController', ['$scope', '$resource',
        function ($scope, $resource) {
            var Store = $resource('/api/store')

            $scope.addBook = function(){
                var store = new Store();

                store.$save();
            }
        }]);
})();