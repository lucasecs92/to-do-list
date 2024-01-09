import { CheckSquare, FloppyDisk, NotePencil, TrashSimple } from '@phosphor-icons/react';
import { TodoType } from '../App' 
import { useState } from 'react';

import styles from '../assets/css/Todo.module.css';

interface TodoProps {
    todo: TodoType;
    onRemoveTodo: (id: TodoType['id']) => void;
    onCompleteTodo: (id: TodoType['id']) => void;
    onEditTodo: (id: TodoType['id'], newText: string) => void;
}

export function Todo({ 
    todo, 
    onRemoveTodo, 
    onCompleteTodo,
    onEditTodo,
}:TodoProps) {

    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing && isSaving) {
            onEditTodo(todo.id, newText);
            setIsEditing(false);
            setIsSaving(false);
        } else {
            setIsEditing(true);
            setIsSaving(true);
        }
    };
    
    return (
        <>
            <section
                className={styles.containerTodo}
                style={{textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
                <section className='content'>
                    {isEditing ? (
                        <input
                            type="text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleEdit();
                                }
                            }}
                        />
                    ) : (
                        <p onDoubleClick={() => setIsEditing(true)}>{todo.text}</p>
                    )}
                    <p className='category'>({todo.category})</p>
                </section>
                <section className={styles.todoBtn}>
                    <button className={styles.complete} onClick={() => onCompleteTodo(todo.id)}><CheckSquare weight='bold'/></button>
                    <button className={styles.edit} onClick={handleEdit}>
                        {isEditing && isSaving ? <FloppyDisk weight="bold"/> : <NotePencil weight="bold"/>}
                    </button>
                    <button className={styles.remove} onClick={() => onRemoveTodo(todo.id)}><TrashSimple weight='bold'/></button>
                </section>
            </section>
        </>
    )
}   

// style={{textDecoration: todo.isCompleted ? "line-through" : "" // vai alterar a propriedade 'textDecoration' baseado no 'todo.isCompleted' se estiver completado 'true' vai dar o valor de 'line-through' p essa propriedade, para deixar riscado a tarefa completada ou ele não deixa nada (valor vazio "").   


// Neste código, o texto da tarefa se torna editável quando o usuário dá um duplo clique nele ou quando o botão de edição é clicado. O texto editado é salvo quando o usuário pressiona o próprio botão de edição ou ENTER.