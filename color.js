$(function(){

  function createBox(boxesInRow) {
    var wh = (600/boxesInRow), i , j, divs = [];
        for(i = 0; i < boxesInRow; i++){
            for(j = 0; j < boxesInRow; j++){
              divs.push($('<div/>', {
            "class":'odd',
            height: wh + 'px',
            width: wh + 'px',


          }));
        }
      }

    $('#container').empty().append(divs);
  }

function hoverCallback() {
  stoptheMadness();
$('.odd').hover(function(){
var r = Math.floor(Math.random() * (256 - 0) + 0),
g = Math.floor(Math.random() * (256 - 0) + 0),
b = Math.floor(Math.random() * (256 - 0) + 0);
$(this).css("background-color", "rgb("+r+","+g+","+b+")");
});
}
$('#Randombox').on("click",hoverCallback);

/////////////////////////////////////////////////Play/////////////////
function blackBox(){
 stoptheMadness();
  $('.odd').hover(function () {
    $(this).css("background-color", "black");
  });
}
$('#blackbox').on("click",blackBox);

/////////////////////////Fade In Code/////////////////////////////

var trailAfter = function(){
  stoptheMadness()
  $('.odd').hover(function(){
    $(this).css("background-color", "#164043").fadeTo(0, 1);
  });
  $('.odd').hover(function(){
    $(this).fadeTo('fast', 0);

});
}

$('#trailMe').on("click",trailAfter);

///////////////////////////Stop the Madnesss/////////////////////////

function stoptheMadness(){
  $(".odd").off().css("background-color", "#00a283").css("opacity", 1);
}



///////////////////////
  createBox(16);
  $("#setbutton").click(function(){
   var regExpress = /(?:\d{2}|\d{1})/g;
   var twonums = $('#twonum').val() ;
   if(!twonums.match(regExpress) || twonums.length == 0){
     alert("You can all enter 1 to 99");
     return false;
   }
   else{
     createBox(twonums);

   }
  });

});
