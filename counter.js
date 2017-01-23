const expect = require('expect');

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }

  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

expect(
  counter(0, {
    type: 'INCREMENT'
  })
).toEqual(1);

expect(
  counter(2, {
    type: 'INCREMENT'
  })
).toEqual(3);

expect(
  counter(2, {
    type: 'DECREMENT'
  })
).toEqual(1);

expect(
  counter(1, {
    type: 'DECREMENT'
  })
).toEqual(0);

expect(
  counter(1, {
    type: 'SOMETHING_ELSE'
  })
).toEqual(1);
