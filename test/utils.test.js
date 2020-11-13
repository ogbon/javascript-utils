const { findHighest, findLowest } = require('../src/utils');
const { expect } = require('chai');


describe("Find Highest of Numbers findHighest(...numbs)", () => {
  
  it("returns the highest of 4, 5, 2", () => {
      expect(findHighest(4,5,2)).to.equal(5);
  })

  it("returns the highest of 0, -1, -2", () => {
    expect(findHighest(0,-1,-2)).to.equal(0);
})

  it("returns the highest of 3, 1, 1000", () => {
    expect(findHighest(3,1,1000)).to.equal(1000);
  })

  it("returns the highest of 2, 2, 2", () => {
    expect(findHighest(2,2,2)).to.equal(2);
  })

  it("returns the highest of -1, -1, -1", () => {
    expect(findHighest(-1,-1,-1)).to.equal(-1);
  })

  it("returns the highest of 0, 0, 0", () => {
    expect(findHighest(0,0,0)).to.equal(0);
  })

  it("returns the highest of 0, 7, 8, 9", () => {
    expect(findHighest(0,7,8,9)).to.equal(9);
  })

  it("returns the highest of 3, 6, 2, 4, 1", () => {
    expect(findHighest(3,6,2,4,1)).to.equal(6);
  })
})


describe("Find Lowest of Numbers findLowest(...numbers)", () => {
  
  it("returns the lowest of 4, 5, 2", () => {
      expect(findLowest(4,5,2)).to.equal(2);
  })

  it("returns the lowest of 0, -1, -2", () => {
    expect(findLowest(0,-1,-2)).to.equal(-2);
})

  it("returns the lowest of 3, 1, 1000", () => {
    expect(findLowest(3,1,1000)).to.equal(1);
  })

  it("returns the lowest of 2, 2, 2", () => {
    expect(findLowest(2,2,2)).to.equal(2);
  })

  it("returns the lowest of -1, -1, -1", () => {
    expect(findLowest(-1,-1,-1)).to.equal(-1);
  })

  it("returns the lowest of 0, 0, 0", () => {
    expect(findLowest(0,0,0)).to.equal(0);
  })

  it("returns the lowest of 0, 7, 8, 9", () => {
    expect(findLowest(0,7,8,9)).to.equal(0);
  })

  it("returns the lowest of 3, 6, 2, 4, 1", () => {
    expect(findLowest(3,6,2,4,1)).to.equal(1);
  })

  
})

