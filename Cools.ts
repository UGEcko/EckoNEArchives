for (let i = 0;  i < 400; i++) {

  let wall = new Wall(44.5+(0.2*i),5.5,1,1,2)
  wall.trackSet = "wallBuck";
  wall.offset = 2.5
  wall.NJS = 65
  wall.position = [20-(0.07*i),-3+(0.1*i),0]
  wall.scale = [0.2,0.2,1.25]
  wall.color = [1+(0.2*i),1+(0.4*i),1+(0.65*i),1]
  wall.animate.dissolve = [[1,0], [0,1, EASE.IN_OUT_CUBIC]]
  wall.rotation = [0-(4*i),0-(4*i),0]
  wall.push();

  let wall2 = new Wall(44.5+(0.2*i),5.5,1,1,2)
  wall2.trackSet = "wallBuck";
  wall2.offset = 2.5
  wall2.NJS = 65
  wall2.position = [-20+(0.07*i),-3+(0.1*i),0]
  wall2.scale = [0.2,0.2,1.25]
  wall2.color = [1+(0.2*i),1+(0.4*i),1+(0.65*i),1]
  wall2.animate.dissolve = [[1,0], [0,1, EASE.IN_OUT_CUBIC]]
  wall2.rotation = [0+(4*i),0+(4*i),0]
  wall2.push();

  let wall3 = new Wall(44.5+(0.2*i),5.5,1,1,2)
  wall3.trackSet = "wallBuck";
  wall3.offset = 2.5
  wall3.NJS = 65
  wall3.position = [20-(0.07*i),-3+(0.1*i),0]
  wall3.scale = [0.2,0.2,1.25]
  wall3.color = [1+(0.2*i),1+(0.4*i),1+(0.65*i),1]
  wall3.animate.dissolve = [[1,0], [0,1, EASE.IN_OUT_CUBIC]]
  wall3.rotation = [0-(2*i),0-(6*i),0]
  wall3.push();

  let wall4 = new Wall(44.5+(0.2*i),5.5,1,1,2)
  wall4.trackSet = "wallBuck";
  wall4.offset = 2.5
  wall4.NJS = 65
  wall4.position = [-20+(0.07*i),-3+(0.1*i),0]
  wall4.scale = [0.2,0.2,1.25]
  wall4.color = [1+(0.2*i),1+(0.4*i),1+(0.65*i),1]
  wall4.animate.dissolve = [[1,0], [0,1, EASE.IN_OUT_CUBIC]]
  wall4.rotation = [0+(2*i),0+(6*i),0]
  wall4.push();
  
}
