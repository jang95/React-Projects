import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { TodoData } from '../types/TodoData';

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

  const removeTodoHandler = (removeId: string) => {
    setTodoList((prevTodoList) => {
      const updateTodoList = prevTodoList.filter((item) => item.id != removeId);
      return updateTodoList;
    });
  };

  const completeTodoHandler = (completeId: string) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) => ({
        ...item,
        done: item.id === completeId ? !item.done : item.done,
      }))
    );
  };

  const editTodoHandler = (editId: string, editText: string) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) => ({
        ...item,
        text: item.id === editId ? editText : item.text,
      }))
    );
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <main className='flex flex-col justify-center items-center w-1/3 min-w-80 rounded-lg border-2 border-gray-400 p-4'>
        <TodoInput addTodo={addTodoHandler} />
        <TodoList
          items={todoList}
          removeTodo={removeTodoHandler}
          completeTodo={completeTodoHandler}
          editTodo={editTodoHandler}
        />
      </main>
    </div>
  );
};

export default TodoBoard;
