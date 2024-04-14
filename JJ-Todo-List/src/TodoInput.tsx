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
    <form onSubmit={inputSubmit}>
      <label htmlFor='add-todo'></label>
      <input
        type='text'
        id='add-todo'
        placeholder='오늘 할 일을 작성해주세요'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type='submit'>등록</button>
    </form>
  );
};

export default TodoInput;
