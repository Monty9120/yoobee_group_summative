    
// Monty Cube
$(function(){
var cube = $('.cube')
var left = $('.button-left')
var right = $('.button-right')
var top = $('.button-top')
var bottom = $('.button-bottom')
var random = $('.button-random')



        random.on('click',function(){
            // cube.removeClass('rotate-left rotate-top')
            // cube.addClass('random')
            $('.cube').css('transform' , "rotate3d("+Math.floor((Math.random() * 360) + 1)+","+Math.floor((Math.random() * 360) + 1)+","+Math.floor((Math.random() * 360) + 1)+","+Math.floor((Math.random() * 360) + 1)+"deg)")
        });

        left.on('click',function(){
            $('.cube').css('transform','rotate3d(-20,100,10,-100deg)')
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






// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;


// create an engine
var engine = Engine.create(),
        world = engine.world;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});


 // add bodies
    var offset = 10,
        options = { 
            isStatic: true,
            render: {
                fillStyle: 'red',
                strokeStyle: 'blue',
                lineWidth: 3
            }
        };
console.log('ji')
// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var boxC = Bodies.rectangle(500, 50, 100, 100);
var boxD = Bodies.rectangle(500, 50, 40, 300);
    world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    World.add(world, [
        Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
        Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
        Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
        Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
    ]);


 

 // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;




// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, boxC, boxD]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
