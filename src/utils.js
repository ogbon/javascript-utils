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
 return numbers.reduce((a,b) => a + b, 0) / numbers.length;
}

