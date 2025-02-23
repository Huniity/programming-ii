import { sum, average, median } from "./maths.js";

test('adds 1 + 2 to equal 3', () => {
    expect(sum([4, 5, 7, 1, 33])).toBe(50);
});

test('adds 1 + 2 to equal 3', () => {
    expect(average([4, 5, 7, 1, 33])).toBe(10);
});

test('adds 1 + 2 to equal 3', () => {
    expect(median([4, 5, 7, 1, 33])).toBe(5);
});