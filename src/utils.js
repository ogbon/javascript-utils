exports.findHighest = (...numbers) => {
    let highest = -Infinity;
    numbers.forEach(number => {
      if(number > highest) {
        highest = number;
      }
    });
    return highest;    
};


exports.findLowest = (...numbers) => {
  let lowest = Infinity;
  numbers.forEach(number => {
    if(number < lowest) {
      lowest = number;
    };
  });
  if(lowest === Infinity || lowest === null) {
    return NaN;
  }else {
    return lowest;
  }
};


