class Paper{
    constructor(){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
Matter.Bodies.circle(200,200,10,[options],[10])
    }
}