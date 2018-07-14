// app.controller("MainController", function($scope){ });

// app.controller("MainController", function($scope){
//     $scope.understand = "I now understand how the scope works!";
// });

app.controller("MainController", function($scope){
	$scope.people = [
    { id: 0, name: 'Leon', music: [ 'Rock', 'Metal', 'Dubstep', 'Electro' ], live: true },
    { id: 1, name: 'Chris', music: [ 'Indie', 'Drumstep', 'Dubstep', 'Electro' ], live: true },
    { id: 2, name: 'Harry', music: [ 'Rock', 'Metal', 'Thrash Metal', 'Heavy Metal' ], live: true },
    { id: 3, name: 'Allyce', music: [ 'Pop', 'RnB', 'Hip Hop' ], live: true }
  ];

  $scope.newPerson = null;
  $scope.addNew = function() {
    if ($scope.newPerson != null && $scope.newPerson != "") {
      $scope.people.push({ id: $scope.people.length, name: $scope.newPerson, live: true, music: [] });
    }
  }
});