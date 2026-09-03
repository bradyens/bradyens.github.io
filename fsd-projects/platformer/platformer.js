$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(125, 370, 25, 275, "black")
   createPlatform(150, 635, 10, 10, "black")
   createPlatform(150, 505, 30, 10, "black")
   createPlatform(400, 350, 5, 200, "black")
   createPlatform(400, 0, 5, 230, "black")
   createPlatform(600, 175, 40, 10, "black", 600, 600, 0, 10, 250, 2 )
   createPlatform(600, 0, 5, 100, "black")
   createPlatform(640, 0, 5, 230, "black")
   createPlatform(800, 250, 60, 15, "black")
   createPlatform(800, 250, 10, 150, "black")
   createPlatform(800, 400, 60, 15, "black")
   createBadPlatform(960, 10, 15, 150, "red")
   createBadPlatform(735, 300, 15, 85, "red")
   createPlatform(750, 370, 60, 15, "black")
   createPlatform(1075, 300, 60, 15, "black")
   createBadPlatform(1200, 250, 10, 30, "red")
   createBadPlatform(1200, 75, 10, 30, "red")



    // TODO 3 - Create Collectables
    createCollectable("steve", 350, 100)
    createCollectable("steve", 755, 320)
    createCollectable("steve", 1300, 225)



    
    // TODO 4 - Create Cannons
    createCannon("top", 100, 800);
    createCannon("right", 650, 200, 150, 150, 700, 500, 20);
    createCannon("right", 200, 3789, 12, 12, 100, 350, 15)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT // createCannon("right", 750, 100)
    //////////////////////////////////
  }

  registerSetup(setup);
});
