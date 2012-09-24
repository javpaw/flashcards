function trainerController($scope){

  $scope.flashCards = [
    {title:'fc1', desc:"flashcard number 1"},
    {title:'fc2', desc:"flashcard number 2"},
    {title:'fc3', desc:"flashcard number 3"}
  ];
  $scope.actualFcIndex = 0
  $scope.actualFc = $scope.flashCards[$scope.actualFcIndex];

  $scope.$watch('key_changed',function(){
    switch($scope.key){
      case 37:
      console.log("left");
      break;

      case 38:
      console.log("up");
      break;

      case 39:
      console.log("right");
      $scope.actualFcIndex++;
      $scope.actualFc = $scope.flashCards[$scope.actualFcIndex];
      break;
      
      case 40:
      break;
      

    }
  });
}
trainerController.$inject=["$scope"]//,"$location","$timeout" ,"fcService"]