function trainerController($scope){

  $scope.flashCards = [
    {title:'fc1', desc:"flashcard number 1"},
    {title:'fc2', desc:"flashcard number 2"},
    {title:'fc3', desc:"flashcard number 3"}
  ];
  $scope.actualFc = $scope.flashCards[0];
  
}