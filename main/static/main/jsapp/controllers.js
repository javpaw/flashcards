function trainerController($scope){
  /*
    Main controller for a training session with a bundle of flashcards.
  */
 
  $scope.flashCards = [
    {title:'fc1', desc:"flashcard number 1",level:0},
    {title:'fc2', desc:"flashcard number 2",level:0},
    {title:'fc3', desc:"flashcard number 3",level:0}
  ];

  var startFc = {title:'Start', desc:"right arrow to start",level:0};//Special flashcard for initial instructions
  var finishFc = {title:'Finish', desc:"Congratulations!!! You completed your training",level:0};//special flashcard for a finished session  

  var maxLimit = 3; //Default numbers of levels to practice starting at 0
  var firstTime = true; //flag to check initialization of the training session
  var state = 'active'; //state of the training session the other option is finished
  var minLevel = 0;//initial level for all the fc cards

  var nextLevel = function(){
    /*
    At the end of one level check if the training is finished and get the cards for the next level
    */
    minLevel = _.min($scope.flashCards,function(item){return item.level;}).level;
    if (minLevel >= maxLimit){
      state = "finished";
    }
    else{
      $scope.currentFcs = _.filter($scope.flashCards,function(num){return $scope.minLevel===$scope.minLevel;});
      $scope.currentIndex = 0;
    }  
  } //end next_level


  $scope.currentFc = startFc;
  
  $scope.$watch('key_changed',function(){
    /*
    When a key arrow is pressed take action.
    The listener for the keys is defined fcApp.directives
    */

    if(state==="finished"){
      //This session ended.
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