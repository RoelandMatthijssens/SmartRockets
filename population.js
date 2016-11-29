function Population(populationSize){
    this.population = [];
    this.populationSize = populationSize;
    
    this.populate = function populate(constructor){
        var i = 0;
        while(i < populationSize){
            var e = constructor();
            this.population.push(e);
            i++;
        }
    }
}
