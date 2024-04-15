import TodoItem from './TodoItem';
import { TodoData } from './types/TodoData';

interface TodoListProps {
  items: TodoData[];
  removeTodo: (removeId: string) => void;
}

const TodoList = ({ items, removeTodo }: TodoListProps) => {
  return (
    <div>
      {items.map((item) => {
        return <TodoItem key={item.id} item={item} removeTodo={removeTodo} />;
      })}
    </div>
  );
};

export default TodoList;
