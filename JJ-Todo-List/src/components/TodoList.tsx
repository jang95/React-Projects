import TodoItemContainer from './TodoItemContainer';
import { useAppSelector } from '../hooks';

const TodoList = () => {
  const todoDatas = useAppSelector((state) => state.todoData);
  return (
    <div className='bg-white rounded-lg w-4/5 min-w-64 mt-4 px-4'>
      {todoDatas.map((item) => {
        return <TodoItemContainer key={item.id} item={item} />;
      })}
    </div>
  );
};

export default TodoList;
