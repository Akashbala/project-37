class Food {
    constructor(){
    this.image=loadImage("images/Milk.png")
    }
    bedroom(){
        background(bedroom,550,500)
    }

    garden(){
        background(garden,550,500)
    }

    washroom(){
        background(washroom,550,500)
    }
    display(){
        var x=80,y=100;
        if(lastFed>=12){
            text("last Feed : "+ lastFed%12 + " PM",350,30)
          }else if(lastFed==0){
            text("last Feed : 12 AM",350,30)
          }else{
            text("last Feed : "+ lastFed + " AM",350,30)
          }
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}
