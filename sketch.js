var width, height;
var population;
var target;
function setup() {
    width = 500;
    height = 500;
    target = createVector(width/2, 150);
    createCanvas(width, height);
    population = new Population(100);
    population.populate(function(){
        var rocket = new Rocket(width/2, height-10);
        rocket.vel = p5.Vector.random2D();
        return rocket;
    });
    
}

function draw() {
    background(0);
    fill(255);
    ellipse(target.x, target.y, 25, 25);
    population.population.map(function(i, index){
        i.update();
        i.show();
    });
}
