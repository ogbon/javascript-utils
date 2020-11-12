exports.findHighest = (...numbers) => {
    let highest = -Infinity;
    numbers.forEach(number => {
      if(number > highest) {
        highest = number;
      }
    });
    return highest;    
};

