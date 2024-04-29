import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { changeTodo, editTodo } from '../store';
import Button from './ui/Button';
import { TodoData } from '../types/TodoData';

interface TodoEditProps {
  item: TodoData;
}

const TodoEdit = ({ item }: TodoEditProps) => {
  const dispatch = useAppDispatch();
  const [inputText, setInputText] = useState('');

  const inputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editTodo({ id: item.id, newText: inputText }));
    setInputText('');
    dispatch(changeTodo({ id: item.id, isEdit: !item.edit }));
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
      <Button type='submit' primary>
        저장
      </Button>
    </form>
  );
};

export default TodoEdit;
