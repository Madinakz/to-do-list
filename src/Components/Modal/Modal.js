
import { useState } from "react";
import "./modal.css";
import { v4 as uuidv4 } from 'uuid';


export default function ModalAdd({todolist,setTodolist}) {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [value, setValue] = useState('');
  function saveTodo(){
    setTodolist(
      [...todolist,{
        id: uuidv4(),
        name: value,
        status: "To do"
      }]
    )
    setValue('')
  }


  return (
    <div className="ModalAdd">
      <div className="container-button">
        <button
          className="button"
          onClick={() => setIsAddModalVisible(!isAddModalVisible)}>
          <p className="button-text">+</p>
        </button>
      </div>

      {isAddModalVisible && (
        <div className="modal">
          <p className="header-of-modal">Add New To Do</p>
          <textarea placeholder='Your text' value={value}
          onChange={(e)=>setValue(e.target.value)}
          className="modal-textarea"></textarea>
          <button onClick={saveTodo} className="modal-addbutton">Add</button>
        </div>
      )}
    </div>
  );
}


