import * as helpers from '../src/helpers';

test('it should return concatenated string', () => {
  expect(helpers.mergeClasses('button', 'text-center')).toBe(
    'button text-center'
  );
});

test('it should concatenate the conditional class', () => {
  expect(helpers.mergeClasses('button', 'text-center', [true, 'mt-1'])).toBe(
    'button text-center mt-1'
  );
});

test('it should concatenate the conditional classes', () => {
  expect(
    helpers.mergeClasses('button', 'text-center', [true, 'mt-1', 'pt-1'])
  ).toBe('button text-center mt-1 pt-1');
});

test('It should omit conditional class', () => {
  expect(helpers.mergeClasses('button', 'text-center', [false, 'mt-1'])).toBe(
    'button text-center'
  );
});

test('It should omit conditional classes', () => {
  expect(
    helpers.mergeClasses('button', 'text-center', [false, 'mt-1', 'mt-2'])
  ).toBe('button text-center');
});

test('It should skip undefiled, null or empty string classes', () => {
  expect(helpers.mergeClasses('button', null)).toBe('button');
});
