var isValidSudoku = function(board) {
 var column = row = true;   
   for(var i = 0; i<9; i++){
     var col = {}, row = {}
      for(var j=0; j<9; j++){
        var curCol = board[i][j]
          if(!curCol in col && curCol!='.'){
            col[cur] = 1
          } else {
            return false;
          }
        var curRow = board[j][i];
        if(!curRow in row){
            row[cur] = 1
          } else {
            return false;
          }
      }
     var subSquare = {}
     if(i % 3 === 0 ){
      var curCol = board[i][j]
          if(!curCol in col){
            subSquare[cur] = 1;
          } else {
            return false;
          }
        if(j%3===0){
          subSquare = {};
        }
      }   
    
    }
};