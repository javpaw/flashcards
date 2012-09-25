function trainerController($scope){
  /*
    Main controller for a training session with a bundle of flashcards.
  */

  var minLevel = 1; //Minimum accepted level
  var maxLevel = 3; //Default numbers of levels to practice starting at 0
  var firstTime = true; //flag to check initialization of the training session
  var state = 'active'; //state of the training session the other option is finished



  $scope.flashCards = [
    {title:'fc1', desc:"flashcard number 1",level:1},
    {title:'fc2', desc:"flashcard number 2",level:1},
    {title:'fc3', desc:"flashcard number 3",level:1}
  ];

  $scope.fcsByLevel = {};//Stores the fsc by level 
  var initNumFcsByLevel = function(){
    _.each(_.range(minLevel,maxLevel+1),function(item){
        $scope.fcsByLevel[item]=[];
    });
    $scope.fcsByLevel[minLevel]= $scope.flashCards;
  }

  initNumFcsByLevel();

  var deleteFromLevel = function(fc){
    $scope.fcsByLevel[fc.level] =_.reject($scope.fcsByLevel[fc.level],function(item){
        return item === fc;
    });
  }

  var addToLevel =function(fc){
    $scope.fcsByLevel[fc.level].push(fc)
  }

  var startFc = {title:'Start', desc:"right arrow to start",level:0};//Special flashcard for initial instructions
  var finishFc = {title:'Finish', desc:"Congratulations!!! You completed your training",level:0};//special flashcard for a finished session  
  
  var nextLevel = function(){
    /*
    At the end of one level check if the training is finished and get the cards for the next level
    */
    minLevel = _.min($scope.flashCards,function(item){return item.level;}).level;
    if (minLevel >= maxLevel){
      state = "finished";
    }
    else{
      $scope.currentFcs = _.filter($scope.flashCards,function(num){return $scope.minLevel===$scope.minLevel;});
      $scope.currentIndex = 0;
    }  
  } //end next_level


  $scope.currentFc = startFc;
  $scope.currentFcs = _.filter($scope.flashCards,function(num){return $scope.minLevel===$scope.minLevel;});
  $scope.currentIndex = 0;

  
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
        deleteFromLevel($scope.currentFc);

        $scope.currentFc.level--;
        if($scope.currentFc.level<minLevel){$scope.currentFc.level=minLevel}
        addToLevel($scope.currentFc);

        $scope.currentFc = $scope.currentFcs[$scope.currentIndex];
        $scope.currentIndex+=1;
        if($scope.currentIndex>=$scope.currentFcs.length){
          nextLevel();        
        }

        break;

      case 38:
      console.log("up");
      break;

      case 39:
        if(firstTime){
          $scope.currentFc = $scope.currentFcs[$scope.currentIndex];
          $scope.currentIndex+=1;
          firstTime=false;
        }
        else{
          deleteFromLevel($scope.currentFc);
          $scope.currentFc.level++;
          if($scope.currentFc.level>maxLevel){$scope.currentFc.level=maxLevel}
          addToLevel($scope.currentFc);
          $scope.currentFc = $scope.currentFcs[$scope.currentIndex];
          $scope.currentIndex+=1;
        }
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