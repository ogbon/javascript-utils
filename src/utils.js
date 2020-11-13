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
  let res = numbers.every((element) => {return Number.isInteger(element);});
  try {
    if(numbers.length < 1) {
      throw "This function expects at least one argument";
    }else if(!res) {
      throw "The function expects an integer";
    }
    else {
      numbers.forEach(number => {
        if(number < lowest) {
          lowest = number;
        };
      });
      return lowest;
    }
  }
  catch (err) {
    return err;
  }
  
};


