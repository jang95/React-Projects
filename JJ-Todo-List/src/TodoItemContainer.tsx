import { useState } from 'react';
import { TodoData } from './types/TodoData';
import TodoEdit from './TodoEdit';
import TodoItem from './TodoItem';

interface TodoItemContainerProps {
  item: TodoData;
  removeTodo: (removeId: string) => void;
  completeTodo: (completeId: string) => void;
  editTodo: (editId: string, editText: string) => void;
}

const TodoItemContainer = ({
  item,
  removeTodo,
  completeTodo,
  editTodo,
}: TodoItemContainerProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const editHandle = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className='flex my-4 h-10 items-center'>
      {isEdit ? (
        <TodoEdit editTodo={editTodo} id={item.id} editHandle={editHandle} />
      ) : (
        <TodoItem
          item={item}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          editHandle={editHandle}
        />
      )}
    </div>
  );
};

export default TodoItemContainer;
