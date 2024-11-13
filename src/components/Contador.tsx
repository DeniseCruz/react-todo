
import styles from './Contador.module.css'

interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function Contador({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}