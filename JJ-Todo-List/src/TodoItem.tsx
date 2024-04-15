import { TodoData } from './types/TodoData';

interface TodoItmeProps {
  item: TodoData;
  removeTodo: (removeId: string) => void;
}

const TodoItem = ({ item, removeTodo }: TodoItmeProps) => {
  return (
    <div className='flex my-4 h-10 items-center'>
      <input
        type='checkbox'
        id='myCheckbox'
        className='form-checkbox text-green-500 h-5 w-5 mr-2'
      />
      <label htmlFor='myCheckbox'></label>
      {item.text}
      <div className='ml-auto'>
        <button className='rounded-lg bg-red-200 hover:bg-green-500 px-4 '>
          수정
        </button>
        <button
          className='rounded-lg bg-red-200 hover:bg-red-500 px-4 ml-2'
          onClick={() => removeTodo(item.id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
