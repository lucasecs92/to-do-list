import React, { useState } from "react";
import styles from "./CreateTask.module.css";

interface AddProps {
    (text: string, category: string): void;
}

export function CreateTask({ addTodo }: {addTodo: AddProps}) {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if (!value || !category) return
            addTodo(value, category); 
            setValue(""); 
            setCategory("");
    }
    
    return (
        <section className={styles.taskForm}>
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título" value={value} onChange={(e) => setValue(e.target.value)} />
                <select className={styles.taskSelect} value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </section>
    )
}

// if (!value || !category) return;    na criação de tarefas se tiver valor nulo (campo vazio), vai dar problema então essa é uma validação de tarefa criada com dados nulos

            
// const handleSubmit = (e) => {
//     
//     if (!value || !category) return;
//     // ADICIONAR TODO
//     addTodo(value, category);
//     // LIMPAR OS CAMPOS DO FORMULÁRIO
//     setValue("");   
//     setCategory("");
//     // console.log(value, category)
// }