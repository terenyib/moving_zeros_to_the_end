const moveZeros = require('./moving_zeros_to_the_end');

describe('US-1', () => {
  it('Given the array "[0]" When I move zeros Then the result is "[0]"', () => {
    expect(moveZeros([0])).toStrictEqual([0]);
  });
  it('Given the array "[1]" When I move zeros Then the result is "[1]"', () => {
    expect(moveZeros([1])).toStrictEqual([1]);
  });
  it('Given the array "[false]" When I move zeros Then the result is "[false]"', () => {
    expect(moveZeros([false])).toStrictEqual([false]);
  });
});
describe('US-2', () => {
  it('Given the array "[0, 1]" When I move zeros Then the result is "[1, 0]"', () => {
    expect(moveZeros([0, 1])).toStrictEqual([1, 0]);
  });
  it('Given the array "[1, 2]" When I move zeros Then the result is "[1, 2]"', () => {
    expect(moveZeros([1, 2])).toStrictEqual([1, 2]);
  });
});