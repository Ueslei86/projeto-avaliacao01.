import { PositiveArray } from "./PositiveArray";

let numbers: PositiveArray;

describe("Tests over the positive array", () => {
  beforeEach(() => {
    numbers = new PositiveArray();
  });

  it("should add a new value in to the array if it is positive", () => {
    const newValue = 1;
    numbers.add(newValue);
    const expectedArray = [newValue];
    const array = numbers.values;
    // console.log(array)
    expect(array).toStrictEqual(expectedArray);
  });
  it("should remove a value from the array if the index is defined", () => {
    const n1 = 1;
    numbers.add(n1);
    const n2 = 2;
    numbers.add(n2);
    const index = 0;
    // numbers.remove(index);
    const expectedArray = [n2];
    const result = numbers.remove(index);
    expect(result).toBe(n1);
  });
  it("should return undefined if the index inserted is not present in the array", () => {
    const n1 = 1;
    numbers.add(n1);
    const n2 = 2;
    numbers.add(n2);
    const index = 3;
    // numbers.remove(index);
    const expectedArray = undefined;
    const result = numbers.remove(index);
    expect(result).toStrictEqual(expectedArray);
  });
  it("should get the array of values when it is used", () => {
    const n1 = 1;
    numbers.add(n1);
    const expectedArray = [n1];
    const array = numbers.values;
    expect(array).toStrictEqual(expectedArray);
  });
});
