import TodoItem from './TodoItem';
import { TodoData } from './types/TodoData';

interface TodoListProps {
  items: TodoData[];
  removeTodo: (removeId: string) => void;
  completeTodo: (completeId: string) => void;
}

const TodoList = ({ items, removeTodo, completeTodo }: TodoListProps) => {
  return (
    <div className='bg-white rounded-lg w-4/5 min-w-64 mt-4 px-4'>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
