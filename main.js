/* 

-- TO DO -- 

- Add click handler to initialize game

- Implement init to set game up 

- Add click handler for each chamber

- Handle loss state 

- Handle blank shot

- Handle win state

- Touch-ups

*/
$(function(){


  var init = function(){

    // uncenter chambers

    // remove start-game button

    // assign bullet to a random chamber

  }


  // chamber click handler

    // check if this is the bullet. 

    // or else it's a blank

    //check if game is won (5/5 blanks found)
    


  // get random integer between min and max, inclusive
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var getRandomChamber = function(){
    return getRandomIntInclusive(0, $('.chamber').length-1 );
  }

});