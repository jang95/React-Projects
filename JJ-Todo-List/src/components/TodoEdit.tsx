import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { editTodo } from '../store';

interface TodoEditProps {
  id: string;
  editHandle: () => void;
}

const TodoEdit = ({ id, editHandle }: TodoEditProps) => {
  const dispatch = useAppDispatch();
  const [inputText, setInputText] = useState('');

  const inputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editTodo({ id, newText: inputText }));
    setInputText('');
    editHandle();
  };

  return (
    <form onSubmit={inputSubmit} className='flex justify-center w-full'>
      <label htmlFor='add-todo' />
      <input
        className='border-2 border-blue-300 focus:outline-green-200 pl-4 mr-4 w-3/4 min-w-48 h-8'
        type='text'
        id='add-todo'
        placeholder='수정 할 내용을 적어주세요'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        type='submit'
        className='rounded-lg bg-red-200 hover:bg-green-500 px-4'
      >
        저장
      </button>
    </form>
  );
};

export default TodoEdit;