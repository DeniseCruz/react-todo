import { useState } from 'react'

import './App.css' ;


import   styles   from './App.module.css';
import { Inicio } from './components/Inicio';
import { Contador } from './components/Contador' ;

import { Item } from './components/Item' ;

import './global.css' ;

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}


export function App() {
  ///const [count, setCount] = useState(0)
  
  const [inputValue, setInputValue] = useState('') ;
  const [tasks, setTasks] = useState<ITask[]>([]) ;

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0);

  
  function handleAlternadoTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }
  

  
  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja apagar tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }
  

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  
  return (
    <main> 
     <Inicio />

     <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <input className={styles.container}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button onClick={handleAddTask}>
            Criar Tarefa
         </button>
        </div>

        <div className={styles.tasksList}>
          <Contador
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleAlternadoTask}
                 
                />
              ))}
            
            </div>
          ) : (
            <div className={styles.containerClip}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/018/245/838/small/clipboard-with-check-mark-icon-png.png" alt="" width="50" height="50"/>
            <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            </div>
          )}
        </div>



      </section>
   
  </main>
      
  );
}

