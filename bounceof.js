function bounceof(object1,object2){
    if(object1.y-object2.y<=object1.height/2+object2.height/2 &&
      object2.y-object1.y<=object1.height/2+object2.height/2){
        object1.velocityY=object1.velocityY*-1
        object2.velocityY=object2.velocityY
        *-1
      }
  }