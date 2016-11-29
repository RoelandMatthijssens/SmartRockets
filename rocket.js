function Rocket(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.lifespan = 200;
    this.age = 0;
    this.DNA = new DNA(this.lifespan);

    this.applyForce = function applyForce(force){
        this.acc.add(force);
    };

    this.update = function update(){
        this.doNextAction();
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.age++;
    };

    this.show = function(){
        noStroke();
        fill(255, 255-this.age);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 15, 5);
        pop();
    };
    
    this.doNextAction = function doNextAction(){
        if(this.age < this.lifespan){
            var action = this.DNA.genes[this.age];
            var magnitude = action[0];
            var vector = action[1];
            this.acc.add(vector.mult(magnitude));
        }
    }
}
