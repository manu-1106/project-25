class dustbin{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
this.width=20
this.height=40
World.add(world,this.body)
    }
}