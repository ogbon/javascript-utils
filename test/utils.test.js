const { findHighest } = require('../src/utils');
const chai = require('chai');
const expect = chai.expect;


describe("Find Highest Number findHighest(a,b,c)", () => {
  
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
})
'\n'