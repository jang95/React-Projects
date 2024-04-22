import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoBoard = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <main className='flex flex-col justify-center items-center w-1/3 min-w-80 rounded-lg border-2 border-gray-400 p-4'>
        <TodoInput />
        <TodoList />
      </main>
    </div>
  );
};

export default TodoBoard;
