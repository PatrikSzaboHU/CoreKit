import { describe, it, expect } from 'vitest'
import { test, insertionSort } from '../index.js'

describe('test()', () => {
    it('Returns a message containing the passed a string', () => {
        const s = (Math.random() + 1).toString(36).substring(16);
        expect(test(s)).toContain(s);
    });

    it('Returns a message containing the passed a number', () => {
        const n = Math.round(Math.random() * (65551 - 64) + 64);
        expect(test(n)).toContain(n);
    });
});

describe('insertionSort()', () => {
    it('Sorts a shuffled array with duplicates', () => {
        expect(insertionSort([8, 4, 1, 2, 18, 48, 12, 48, 47])).toStrictEqual([1, 2, 4, 8, 12, 18, 47, 48, 48]);
    });

    it('Handles an empty array', () => {
        expect(insertionSort([])).toStrictEqual([]);
    });

    it('Handles a single-element array', () => {
        expect(insertionSort([42])).toStrictEqual([42]);
    });

    it('Handles an already sorted array', () => {
        expect(insertionSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it('Handles a reverse sorted array', () => {
        expect(insertionSort([9, 8, 7, 6, 5])).toStrictEqual([5, 6, 7, 8, 9]);
    });

    it('Handles negative numbers', () => {
        expect(insertionSort([-3, -1, -7, 2, 0])).toStrictEqual([-7, -3, -1, 0, 2]);
    });

    it('Handles a mix of positive and negative numbers', () => {
        expect(insertionSort([3, -2, 5, -1, 0])).toStrictEqual([-2, -1, 0, 3, 5]);
    });

    it('Handles an array with all equal elements', () => {
        expect(insertionSort([7, 7, 7, 7, 7])).toStrictEqual([7, 7, 7, 7, 7]);
    });

    it('Handles floating point numbers', () => {
        expect(insertionSort([3.1, 2.4, -1.2, 5.9])).toStrictEqual([-1.2, 2.4, 3.1, 5.9]);
    });

    it('Handles a large array', () => {
        const input = Array.from({ length: 100 }, () => Math.floor(Math.random() * 200) - 100);
        const expected = [...input].sort((a, b) => a - b);
        expect(insertionSort(input)).toStrictEqual(expected);
    });
});
