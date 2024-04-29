import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addTodo } from '../store';
import { TodoData } from '../types/TodoData';
import Button from './ui/Button';

const TodoInput = () => {
  const dispatch = useAppDispatch();
  const [inputText, setInputText] = useState('');

  const inputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: TodoData = {
      id: String(new Date()), // 임시 고유 ID 생성;
      text: inputText,
      done: false,
      edit: false,
    };
    dispatch(addTodo(data));
    setInputText('');
  };

  return (
    <form
      onSubmit={inputSubmit}
      className='flex justify-center w-3/4 min-w-[400px]'
    >
      <label htmlFor='add-todo' />
      <input
        className='border-2 border-blue-300 focus:outline-green-200 pl-4 mr-4 w-3/4 min-w-48 h-10'
        type='text'
        id='add-todo'
        placeholder='오늘 할 일을 작성해주세요'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button type='submit' primary>
        추가
      </Button>
    </form>
  );
};

export default TodoInput;
