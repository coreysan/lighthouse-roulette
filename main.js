/* 

-- TO DO -- 

- Add click handler to initialize game

- Implement init to set game up 

- Add click handler for each chamber

- Handle loss state 

- Handle blank shot

- Handle win state

- 

*/
$(function(){

  var score = 0;
  const BLANKS_IN_CHAMBER = 3;
  const FADE_OUT_TIME = 1000;

  var init = function(){

    // uncenter chambers
    $('.chamber').removeClass('centered');

    // remove start-game button
    $('button.start-game').fadeOut(FADE_OUT_TIME);

    // assign bullet to a random chamber
    $('.chamber').eq(getRandomChamber()).addClass('bullet');

  }

  $('button.start-game').on('click', init);

  $('.chamber').on('click', function(){

    // check if this is the bullet. 
    if($(this).hasClass('bullet')){
      // if so, start death screen
      $('body').addClass('dead');
      $('.chamber').attr('src', 'images/bullet.png');
    }else{//fewf, hit a blank!
      $(this).addClass('blank');
      $(this).attr('src', 'images/blank.png');
      $('<div>').addClass('col-xs-2').appendTo('.progress');
    }

    if($('.blank').length === BLANKS_IN_CHAMBER)
    {
      $('.bullet').attr('src', 'images/bullet.png');
      $('.bullet').fadeOut(4000);
      $('.blank').addClass('centered');
      $('<span>')
        .addClass('success')
        .text(' You Win!!')
        .appendTo('h1');
    }
    // debugger;

    // if not, celebrate somehow

    // WIN if 5/5 blanks have been found. 

  });


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