function RandomChance(Q){
  while (Q>0){
    if (Math.floor(Math.random()*100)===Math.floor(Math.random()*100)){
      var win = Math.floor(Math.random()*50)+50;
      Q+=win;
      console.log("You won! You now have "+Q+" quarters.");
    }
    Q--;
  }
  console.log("You have no quarters left!")
}
// RandomChance(500);

// RandomChance(10000);
