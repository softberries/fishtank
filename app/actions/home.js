// @flow

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function increment(dir) {
  return {
    type: INCREMENT_COUNTER,
    value: dir
  };
}
