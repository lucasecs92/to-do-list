import { useEffect, useState } from 'react';

import { CreateTask } from './components/CreateTask';
import { Search } from './components/Search';
import { Filter } from './components/Filter';
import { TodoList } from './components/TodoList';

import styles from './assets/css/App.module.css';
import './assets/css/global.css'; 

export interface TodoType {
   id: number;
   text: string;
   category: string; 
   isCompleted: boolean;
}

const item = localStorage.getItem('TAREFAS');
const dataLocalStorage = JSON.parse(item !== null ? item : '[]');

function App() {
  const [todos, setTodos] = useState(dataLocalStorage);

// Funcionalidade de pesquisa
  const [search, setSearch] = useState("");

// Funcionalidade de filtragem
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

// Add as tarefas
  const addTodo = (text: string, category: string) => {
    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
  ];

  setTodos(newTodos) // atualiza o estado dos meus Todos com os newTodos
  };
  
// REMOVE as tarefas
  const removeTodo = (id:TodoType['id']) => {
    const filteredTodos = todos.filter((todo:TodoType) => todo.id !== id);

    setTodos(filteredTodos);
  };

// EDITAR as tarefas
  const editTodo = (id: number, newText: string) => {
    const newTodos = todos.map((todo:TodoType) =>
      todo.id === id ? {...todo, text: newText} : todo
    );

    setTodos(newTodos);
  };

// COMPLETE as tarefas
  const completeTodo = (id: number) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    
    setTodos(newTodos);
  };

// Salvando os dados no localStorage
  useEffect(() => {
      localStorage.setItem('TAREFAS', JSON.stringify(todos));
  }, [todos] );

  console.log(todos);
  console.log(filter);
  console.log(search);
  console.log(sort);

  return ( 
    <section className={styles.ContainerApp}>
        <h1>Lista de Tarefas</h1>     
        <Search search={search} setSearch={setSearch} />
        <CreateTask addTodo={addTodo} /> 
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <TodoList 
          todos={todos} 
          filter={filter} 
          search={search} 
          sort={sort} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo} 
          editTodo={editTodo}      
        />
    </section>
  )
}

export default App;