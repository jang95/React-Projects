import TodoItem from './TodoItem';
import { TodoData } from './types/TodoData';

interface TodoListProps {
  items: TodoData[];
}

const TodoList = ({ items }: TodoListProps) => {
  return (
    <div>
      {items.map((item, index) => {
        return <TodoItem key={index} item={item} />;
      })}
    </div>
  );
};

export default TodoList;
