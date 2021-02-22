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
  
    if(numbers.length < 1) {
      throw new Error("This function expects at least one argument");
    }
    if(!numbers.every((element) => Number.isInteger(element))) {
      throw new Error("The function expects an integer");
    }
    let lowest = numbers[0];
    numbers.forEach(number => {
        if(number < lowest) {
          lowest = number;
        };
      });
    return lowest;
};


