import styles from './Search.module.css';

export interface SearchProps {
    search: string;
    setSearch: (search: string) => void;
}

export function Search({ search, setSearch }:SearchProps) {
    return (
        <section className={styles.search}>
            <h2>Pesquisar:</h2>
            <input 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Digite para pesquisar..." 
            />
        </section>
    )
}

// value={search} // valor do state
// onChange={(e) => setSearch(e.target.value)} // quando eu modificar vamos ter tb a alteração do state como 'e.target.value'
// Então a ideia é fazer uma busca em tempo real, baseado no título das tarefas.
