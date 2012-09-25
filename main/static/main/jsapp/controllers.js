function trainerController($scope){

  $scope.flashCards = [
    {title:'fc1', desc:"flashcard number 1",level:0},
    {title:'fc2', desc:"flashcard number 2",level:0},
    {title:'fc3', desc:"flashcard number 3",level:0}
  ];

  var startFc = {title:'Start', desc:"right arrow to start",level:0};
  var finishFc = {title:'Finish', desc:"Congratulations!!! You completed your training",level:0};  


  // $scope.minLevel = 0;
  // $scope.currentFcs = [];
  // $scope.currentIndex = 0;
  var maxLimit = 3;
  var firstTime = true;
  var state = 'active';
  var minLevel = 0;

  var nextLevel = function(){
    minLevel = _.min($scope.flashCards,function(item){return item.level;}).level;
    console.log(minLevel);
    if ($scope.minLevel >= maxLimit){
      state = "finished";
    }
    else{
      $scope.currentFcs = _.filter($scope.flashCards,function(num){return $scope.minLevel===$scope.minLevel;});
      $scope.currentIndex = 0;
    }  
  } //end next_level


  $scope.currentFc = startFc
  
  $scope.$watch('key_changed',function(){
    if(state==="finished"){
      $scope.currentFc = finishFc
      return;
    }
    switch($scope.key){
      case 37:
      console.log("left");
      break;

      case 38:
      console.log("up");
      break;

      case 39:
        if(firstTime){
          nextLevel();
          firstTime=false;
        }
        console.log("right",$scope.currentFcs);
        $scope.currentFc = $scope.currentFcs[$scope.currentIndex];
        $scope.currentFc.level++;
        $scope.currentIndex+=1;
        if($scope.currentIndex>=$scope.currentFcs.length){
          nextLevel();        
        }
        break;
      
      case 40:
      break;
      

    }
  });



}
trainerController.$inject=["$scope"]//,"$location","$timeout" ,"fcService"]