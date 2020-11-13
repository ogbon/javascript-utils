exports.findHighest = (...numbers) => {
    let highest = -Infinity;
    numbers.forEach(number => {
      if(number > highest) {
        highest = number;
      }
    });
    return highest;    
};


exports.findAverage = (...numbers) => {
  let ave = 0;
  let res = numbers.every((element) => {return Number.isInteger(element);});
  
  try {
    if(numbers.length < 1) {
      throw "This function expects at least one argument";
    }
    else if(!res) {
      throw "The function expects an integer";
    }
    else {
      ave = numbers.reduce((a,b) => a + b, 0) / numbers.length;
      if(Number.isInteger(ave)) {
        return ave;
      }else {
        ave = ave.toFixed(2);
        return parseFloat(ave);
      }
    }
    
  }
  catch (err) {
    return err;
  }
}

