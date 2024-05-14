import { TodoData } from '../types/TodoData';
import { useAppDispatch } from '../hooks';
import { removeTodo, completeTodo, changeTodo } from '../store';
import Button from './ui/Button';

interface TodoItemProps {
  item: TodoData;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const dispatch = ();

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
        <Button
          type='button'
          onClick={() =>
            dispatch(changeTodo({ id: item.id, isEdit: !item.edit }))
          }
          secondary
        >
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
