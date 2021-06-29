class cannon{
    constructor(x, y, w, h, a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    show(){
    fill("gray")
    push()
    translate(this.x, this.y)
    rotate(this.a)
    rect(-10, -20, this.w, this.h)
    pop()
    arc(this.x, this.y, 100, 200, PI, TWO_PI)
    }
}