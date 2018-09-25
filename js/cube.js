    
// Monty Cube
$(function(){
var cube = $('.cube')
var left = $('.button-left')
var right = $('.button-right')
var top = $('.button-top')
var bottom = $('.button-bottom')
var random = $('.button-random')



        random.on('click',function(){

            $('.cube').css('transform' , "rotate3d("+Math.floor((Math.random() * 360) + 1)+","+Math.floor((Math.random() * 360) + 1)+","+Math.floor((Math.random() * 360) + 1)+","+Math.floor((Math.random() * 360) + 1)+"deg)")
        });

        left.on('click',function(){
            $('.cube').css('transform','rotate3d(-20,100,10,-100deg)')
        });

        right.on('click',function(){
            $('.cube').css('transform','rotate3d(0,100,10,100deg)')
        });


        top.on('click',function(){
         
        });


//Arrow controls
var xAngle = 0, yAngle = 0;
document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {

    case 37: // left
      yAngle -= 92;
      break;

    case 38: // up
      xAngle += 92;
      break;

    case 39: // right
      yAngle += 92;
      break;

    case 40: // down
      xAngle -= 92;
      break;
  };

  $('.cube').css('transform' , "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)");
}, false);

});


