class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png"); 

    //an empty array where we will store the positions where the bird has moved
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    if (this.body.position.x > 220 && this.body.velocity.x > 10){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }

    //this.trajectory = [ [200, 195], [205, 190], [210, 185].......]
    //index (i)               0         1             2
    //sub-index             0     1     0     1     0     1

    //for(initial condition; ending condition; in-between condition)

    for(var i = 0; i < this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }


    super.display();
  }
}
