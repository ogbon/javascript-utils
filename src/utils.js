function findHighest(a,b,c) {
    if(a > b && a > c)
      return a;
    if(b > a && b > c)
      return b;
    if(c > a && c > b)
      return c;    
};

console.log(findHighest(4,5,2));
console.log(findHighest(0,-1,-2));
console.log(findHighest(3,1,1000));