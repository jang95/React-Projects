import { useState } from 'react';
import { TodoData } from '../types/TodoData';
import TodoEdit from './TodoEdit';
import TodoItem from './TodoItem';

interface TodoItemContainerProps {
  item: TodoData;
}

const TodoItemContainer = ({ item }: TodoItemContainerProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const editHandle = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className='flex my-4 h-10 items-center border-b-2'>
      {isEdit ? (
        <TodoEdit id={item.id} editHandle={editHandle} />
      ) : (
        <TodoItem item={item} editHandle={editHandle} />
      )}
    </div>
  );
};

export default TodoItemContainer;
