findHighest = (a,b,c) => {
    let highest = 0;
    if(a > b) {
      highest = a;
    }else {
      highest = b;  
     }
    if(c > highest)
      highest = c;
    
    return highest;    
};
exports.findHighest = findHighest;

'\n'