exports.findHighest = (...numbs) => {
    let highest = -Infinity;
    for(let i = 0; i < numbs.length; i++) {
      if(numbs[i] > highest) {
        highest = numbs[i];
      };
    };
    return highest;    
};

