class SlingShot{
    constructor(bodyA, pointBobj){
        var options = {
            bodyA: bodyA,
            pointB: pointBobj,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointBobj
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA!=null){
            var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
       
    }
    birdfly(){

   this.chain.bodyA=null;
    };
    
}