var myApp = angular.module('myApp', []);

myApp.controller('MenuController', ['$scope', function($scope) {
  $scope.menuItem = {
    id: 1,
    name: "Bacon Burrito",
    credit: 2.50,
    modifiers: [
      {
        id: 1,
        name: "Avocado",
        price: 1.50,
        quantity: 0
      },
      {
        id: 2,
        name: "Eggs",
        price: 2.50,
        quantity: 0
      },
      {
        id: 3,
        name: "Hashbrowns",
        price: 3.75,
        quantity: 0
      }
    ]
  };

  $scope.removeModifier = function() {
    if (this.modifier.quantity > 0) {
      this.modifier.quantity -=1;
    }
  };

  $scope.addModifier = function() {
    this.modifier.quantity += 1;
  };

  $scope.total = function() {
    var total = this.menuItem.modifiers.reduce(function(total, num) {
      return total + (num.price * num.quantity);
    }, 0.00);

    return this.nonNegative(this.totalMinusCredit(total));

  };

  $scope.totalMinusCredit = function(total) {
    return total - $scope.menuItem.credit
  };

  $scope.nonNegative = function(total) {
    if (total < 0) {
      return 0;
    } else {
      return total;
    }
  };
}]);
