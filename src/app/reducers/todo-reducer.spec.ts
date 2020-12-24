import { todoReducer } from './todo-reducer';

describe('TodoReducer', () => {
  it('should create an instance', () => {
    expect(new todoReducer()).toBeTruthy();
  });
});
