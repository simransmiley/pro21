class Frame{
    constructor(x,y,w,h){
        this.body=Bodies.rectangle(x,y,w,h,{isStatic:true})
        World.add(world,this.body)
        this.w=w
        this.h=h

    }
    display(){
        var pos=this.body.position
        push ()
        fill("lightblue")
        rect(pos.x,pos.y,this.w,this.h)
        pop ()
    }
}
