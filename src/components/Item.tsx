
import { ITask } from '../App';

import styles from './Item.module.css';

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']

  const paragraphCheckedClassname = data.isChecked
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.container}>
      <div>
      <input className={checkboxCheckedClassname} type="checkbox" >
      </input>
      <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
      </div>
     
       <button onClick={handleRemove} >
         <img src="https://img.icons8.com/?size=24&id=FgOBVsURv5ar&format=png" alt="" width="20" height="20" />
      </button>
       
    </div>
  )
}