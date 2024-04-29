import { TodoData } from '../types/TodoData';
import TodoEdit from './TodoEdit';
import TodoItem from './TodoItem';

interface TodoItemContainerProps {
  item: TodoData;
}

const TodoItemContainer = ({ item }: TodoItemContainerProps) => {
  return (
    <div className='flex my-4 h-10 items-center border-b-2'>
      {item.edit ? <TodoEdit item={item} /> : <TodoItem item={item} />}
    </div>
  );
};

export default TodoItemContainer;
