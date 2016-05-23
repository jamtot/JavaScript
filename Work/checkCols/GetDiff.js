function GetDiff(range1, range2) {
  var newRange = [];  
  for(i=0; i<range1.length; i++) {
    var inCol = true;
    for(j=0; j<range2.length; j++) {
      if(range1[i][0] == range2[j][0])
        inCol = false;   
    }
    if(inCol == true) 
      newRange.push([range1[i][0]]);
  }
  return newRange;
}
