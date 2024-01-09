import { TodoType } from "../App";
import { Todo } from "./Todo";
import styles from "../assets/css/TodoList.module.css";

interface TodoListProps {
    todos: TodoType[];
    filter: string;
    search: string;
    sort: string;
    removeTodo: (id: TodoType['id']) => void;
    completeTodo: (id: TodoType['id']) => void;
    editTodo: (id: TodoType['id'], newText: string) => void;
  }

  export function TodoList({ 
    todos, 
    filter, 
    search, 
    sort, 
    removeTodo, 
    completeTodo, 
    editTodo
  }: TodoListProps) {

    console.log('Todos:', todos);
    console.log('Filtered todos:', todos.filter((todo:TodoType) => 
    filter === "All" 
      ? true 
      : filter === "Completed" 
      ? todo.isCompleted 
      : !todo.isCompleted
    ));

    return (
      <section className={styles.todoList}>
        {todos
          .filter((todo:TodoType) => 
            filter === "All" 
              ? true 
              : filter === "Completed" 
              ? todo.isCompleted 
              : !todo.isCompleted
          )
          .filter((todo:TodoType) => 
            todo.text.toLowerCase().includes(search.toLowerCase())
          ) 
          .sort((a:TodoType, b:TodoType) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          ) 
          .map((todo:TodoType) => ( 
            <Todo
              key={todo.id} 
              todo={todo} 
              onRemoveTodo={removeTodo}
              onCompleteTodo={completeTodo}
              onEditTodo={editTodo}
            />
          ))      
        }
      </section>
    );
  }