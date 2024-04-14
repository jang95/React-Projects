import { TodoData } from './types/TodoData';

interface TodoItmeProps {
  item: TodoData;
}

const TodoItem = ({ item }: TodoItmeProps) => {
  return (
    <div>
      <div>{item.text}</div>
    </div>
  );
};

export default TodoItem;
