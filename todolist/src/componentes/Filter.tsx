import { SortAscending, SortDescending } from '@phosphor-icons/react';
import styles from './Filter.module.css';

interface FilterProps {
    filter: string;
    setFilter: (filter: string) => void;
    setSort: (sort: string) => void;
}

export function Filter({ filter, setFilter, setSort }:FilterProps) {
    return (
        <section className={styles.filter}>
            <h2>Filtrar:</h2>
            <section className={styles.filterOptions}>
                <section className={styles.filterStatus}>
                    <p>Status:</p>
                    <select className={styles.filterSelect} value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </section>
                <section className={styles.filterOrder}>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort("Asc")}><SortAscending weight='bold'/></button>
                    <button onClick={() => setSort("Desc")}><SortDescending weight='bold'/></button>
                </section>
            </section>
        </section>
    )
}


// -----------------------------------------------
// interface FilterProps {
//     filter: string;
//     setFilter: (filter: string) => void;
//     setSort: (sort: string) => void;
// }

// export function Filter({ filter, setFilter, setSort }:FilterProps)
// Neste exemplo, estamos dizendo ao TypeScript que a propriedade 'filter' é uma string, e 'setFilter' e 'setSort' são funções que aceitam uma string como argumento.
// Se o 'filtro', 'setFilter' ou 'setSort' puder ser de tipos diferentes, você poderá usar o '|' operador para especificar vários tipos. Por exemplo, se 'filtro' puder ser uma string ou nulo, você pode defini-lo assim: filter: string | null;.