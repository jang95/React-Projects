import { TodoData } from './types/TodoData';

interface TodoItemProps {
  item: TodoData;
  removeTodo: (removeId: string) => void;
  completeTodo: (completeId: string) => void;
  editHandle: () => void;
}

const TodoItem = ({
  item,
  removeTodo,
  completeTodo,
  editHandle,
}: TodoItemProps) => {
  return (
    <>
      <input
        type='checkbox'
        id='myCheckbox'
        className='form-checkbox text-green-500 h-5 w-5 mr-2'
        onClick={() => completeTodo(item.id)}
      />
      <label htmlFor='myCheckbox'></label>
      <span className={item.done ? 'line-through text-gray-400' : ''}>
        {item.text}
      </span>
      <div className='ml-auto'>
        <button
          onClick={editHandle}
          className='rounded-lg bg-red-200 hover:bg-green-500 px-4'
        >
          수정
        </button>
        <button
          className='rounded-lg bg-red-200 hover:bg-red-500 px-4 ml-2'
          onClick={() => removeTodo(item.id)}
        >
          삭제
        </button>
      </div>
    </>
  );
};

export default TodoItem;
