import { useState } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [inputText, setInputText] = useState('');

  const inputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(inputText);
    setInputText('');
  };
  return (
    <form onSubmit={inputSubmit} className='flex justify-center w-3/4'>
      <label htmlFor='add-todo' />
      <input
        className='border-2 border-blue-300 focus:outline-green-200 pl-4 mr-4 w-3/4 min-w-48 h-10'
        type='text'
        id='add-todo'
        placeholder='오늘 할 일을 작성해주세요'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        type='submit'
        className='rounded-lg bg-orange-500 hover:bg-green-200 px-4'
      >
        등록
      </button>
    </form>
  );
};

export default TodoInput;
