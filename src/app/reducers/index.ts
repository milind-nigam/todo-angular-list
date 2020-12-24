import { MenuReducer } from './menu-reducer';
import { todoReducer } from './todo-reducer';
export const reducers = {
  menuState: MenuReducer,
  todos: todoReducer
};
