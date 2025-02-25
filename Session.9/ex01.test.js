import {trackCountWords} from './ex01.js'

test('counting words', () => {
    expect(trackCountWords(["Hello","World"])).toBe(2);
});