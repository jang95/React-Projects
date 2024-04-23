import { TodoData } from '../types/TodoData';
import { useAppDispatch } from '../hooks';
import { removeTodo, completeTodo } from '../store';
import Button from './ui/Button';

interface TodoItemProps {
  item: TodoData;
  editHandle: () => void;
}

const TodoItem = ({ item, editHandle }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <input
        type='checkbox'
        id='myCheckbox'
        className='form-checkbox text-green-500 h-5 w-5 mr-2'
        onClick={() => dispatch(completeTodo(item.id))}
      />
      <label htmlFor='myCheckbox'></label>
      <span className={item.done ? 'line-through text-gray-400' : ''}>
        {item.text}
      </span>
      <div className='ml-auto'>
        <Button type='button' onClick={editHandle} secondary>
          수정
        </Button>
        <Button
          type='button'
          onClick={() => dispatch(removeTodo(item.id))}
          danger
        >
          삭제
        </Button>
      </div>
    </>
  );
};

export default TodoItem;
