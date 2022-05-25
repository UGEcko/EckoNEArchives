for (let i = 0;  i < 5000; i++) {

  let wall = new Wall(44.5+(0.2*i),5.5,1,1,2)
  wall.trackSet = "wallBuck";
  wall.offset = 2.5
  wall.NJS = 65
  wall.position = [20-(0.07*i),-3+(0.1*i),0]
  wall.scale = [0.2,0.2,1.25]
  wall.color = [0.803-(0.05*i),0,1,1-(0.05*i)],[0,0,1,0.4]
  wall.animate.dissolve = [[1,0], [0,1]]
  wall.rotation = [0,0+(4*i),0]
  wall.fake = true
  wall.push();

  let wall2 = new Wall(44.5+(0.2*i),5.5,1,1,2)
  wall2.trackSet = "wallBuck";
  wall2.offset = 2.5
  wall2.NJS = 65
  wall2.position = [-20+(0.07*i),-3+(0.1*i),0]
  wall2.scale = [0.2,0.2,1.25]
  wall2.color = [0.803-(0.05*i),0,1,1-(0.05*i)],[0,0,1,0.4]
  wall2.animate.dissolve = [[1,0], [0,1]]
  wall2.rotation = [0,0+(4*i),0]
  wall2.fake = true
  wall2.push();
  
}
