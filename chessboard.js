//why does chessboard need to be defined here? why doesn't it being defined in the loop work?
var chessboard = "";
var size = 8;

for (let row = 0; row < size; row++) {
  for(let col = 0; col < size; col++) {
    //ask why if(row % 2 == 0 && col % 2 == 0) doesn't work
    if((row + col) % 2 == 0) {
      chessboard += "#";
    }
    else {
      chessboard += " ";
    }
  }
  chessboard += "\n";
  console.log(chessboard);
}
