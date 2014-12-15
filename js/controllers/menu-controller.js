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

  // FIXME: doing too much
  $scope.total = function() {
    var total = this.menuItem.modifiers.reduce(function(total, num) {
      return total + (num.price * num.quantity);
    }, 0.00);

    total = total - $scope.menuItem.credit;

    if (total < 0) {
      total = 0;
    }

    return total.toFixed(2)

  };

  $scope.calculateModifiers = function() {
    var total = this.menuItem.modifiers.reduce(function(total, num) {
      return total + (num.price * num.quantity);
    }, 0.00);
  };
}]);
