function DNA(size){
    this.genes = [];
    this.size = size;
    
    this.init = function init(){
        var i = 0;
        while(i < size){
            var magnitude = random();
            var vector = p5.Vector.random2D();
            this.genes[i] = [magnitude, vector];
            i++;
        }
    };
    
    this.init();
}
