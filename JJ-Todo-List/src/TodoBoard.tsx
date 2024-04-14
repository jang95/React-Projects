import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { TodoData } from './types/TodoData';

const TodoBoard = () => {
  const [todoList, setTodoList] = useState<TodoData[]>([]);

  const addTodoHandler = (text: string) => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        {
          id: String(new Date()), // 임시 고유 ID 생성
          text,
          done: false,
        },
      ];
    });
  };

  return (
    <>
      <TodoInput addTodo={addTodoHandler} />
      <TodoList items={todoList} />
    </>
  );
};

export default TodoBoard;
