import { TodoData } from './types/TodoData';

interface TodoItmeProps {
  item: TodoData;
  removeTodo: (removeId: string) => void;
}

const TodoItem = ({ item, removeTodo }: TodoItmeProps) => {
  console.log('itme', item);
  return (
    <div>
      <div>{item.text}</div>
      <button onClick={() => removeTodo(item.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
