const exercises = require('../exercises.js');

describe("ARRAY functions", () => {

  let testArr = [];

  beforeEach(() => {
    for (let i=0; i<5; i++) {
      testArr.push(i)
    }
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  })

  afterEach(() => {
    consoleSpy.mockClear();
    testArr = [];
  })

  test("that reduce loop prints every array element", () => {
    exercises.reduceLoop(testArr)
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  })

  test("that filter loop prints every array element", () => {
    exercises.filterLoop(testArr)
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(5);
  })

  test("that map loop prints every array element", () => {
    exercises.mapLoop(testArr)
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(5);
  })

  test("that while loop prints every array element", () => {
    exercises.whileLoop(testArr)
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(5);
  })

  test("that for loop prints every array element", () => {
    exercises.forLoop(testArr)
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(5);
  })

})
