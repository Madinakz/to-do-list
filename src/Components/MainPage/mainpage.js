
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './mainpage.css'
import ModalAdd from '../Modal/Modal';
import SingleTodo from '../SingleTodo/SingleTodo';

export default function MainPage() {
  const [activeStatus, setActiveStatus]= useState("To do");
  const [todolist,setTodolist] = useState([
    {id: uuidv4(), name: "write essay",status: "To do"},
    {id: uuidv4(), name: "go to gym", status: "Done"},
    {id: uuidv4(), name: "learn react",status: "Trash"},
    {id: uuidv4(), name: "go shopping" ,status: "To do"}
  ]);

  const changeStatus=(status)=>{
    setActiveStatus(status);
  };

  const changeStatusSingleTodo = (id,changedStatus)=>{
    const changedItem = todolist.find((item)=>item.id===id);
    changedItem.status=changedStatus;
    const newTodolistWithoutItem = todolist.filter((item)=>item.id!==id);
    setTodolist([...newTodolistWithoutItem, changedItem]);
  };

  const filteredTodos = todolist.filter((item)=>item.status===activeStatus);

      return(
      <div>
        <div className='mainpage'>
          <div className='buttons-of-actions'>
            <button onClick={()=>changeStatus("To do")} className='to-do-buttons'>To do</button>
            <button onClick={()=>changeStatus("Done")}  className='to-do-buttons'>Done</button>
            <button onClick={()=>changeStatus("Trash")}  className='to-do-buttons'>Trash</button>
          </div>
          <div>
          <ModalAdd 
          todolist={todolist}
          setTodolist={setTodolist}/>
          </div> 
        </div>
        <div>
            <p className='heading-mainpage'>{activeStatus}</p>
        </div>
        <div>
          {filteredTodos.map((item,_i)=>(
            <SingleTodo
            key={_i}
            item = {item}
            changeStatusSingleTodo={changeStatusSingleTodo}
            todolist={todolist}
            setTodolist={setTodolist}
            id={item.id}
            />
            ))}
        </div>
      </div>
    )
}

