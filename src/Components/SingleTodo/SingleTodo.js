import { useState } from "react";
import { BIN, THREEE_POINTS, MOVETOBACK } from "../images/images";
import './SingleTodo.css'

export default function SingleTodo({item,changeStatusSingleTodo}){
    const [isClicked, setIsClicked]= useState(false);
   
    const changeStatus=()=>{
        if (item.status !== "Trash"){
            if (item.status === "Done"){
            changeStatusSingleTodo(item.id, "To do");
            } else{
                changeStatusSingleTodo(item.id, "Done");
            }
        }    
    };

    const moveToTodo=()=>{
        changeStatusSingleTodo(item.id, "To do")
    }

    const deleteForever=()=>{
        changeStatusSingleTodo(item.id)
    }

    
    return(
        <div>
            <div className="items-list"
                style={{
                backgroundColor: (isClicked && (item.status === "To do" || item.status === "Trash")) ? "#E4E6E7" : "transparent"
                }}>
                <div>
                    <button className="three-points-button" onClick={() => setIsClicked(!isClicked)}>
                        <img src={THREEE_POINTS} alt="THREE_POINTS" className="three-points" ></img>
                    </button>
                </div> 
               
                <div>
                    <input className="checkbox"
                        type="checkbox" 
                        checked={item.status=== "Done" || (isClicked && (item.status === "To do" || item.status === "Trash"))}
                        onChange={changeStatus}
                    /> 
                </div>
                <div className="items-list-text"
                        style={{
                            textDecoration: (item.status === "Done") ? "line-through" : (isClicked && (item.status === "To do" || item.status === "Trash")) ? "line-through" : "none",
                            color: (item.status === "Done" || (isClicked && (item.status === "To do" || item.status === "Trash"))) ? "grey" : "black"
                          }}
                        >
                        {item.name} 
                </div>
            </div>
             
            {isClicked&&(
                <div className="modal-windows">
                    {item.status!=="Trash"? 
                        (<button className="movetotrash" 
                            onClick={()=> changeStatusSingleTodo(item.id,"Trash",setIsClicked(false))} >
                            <img src={BIN} alt="BIN" className="bin"></img>
                            <p className="text-on-buttons">Move to Trash</p>
                        </button>):
                        (<div>
                        <button className="movefromtrash-button-delete" 
                            onClick={()=> deleteForever(item.id,setIsClicked(false))} >
                            <img src={BIN} alt="BIN" className="bin"></img>
                            <p>Delete Forever</p>
                        </button>
                        <button className="movefromtrash-button-movetoback" 
                            onClick={()=> moveToTodo(item.id,"To do",setIsClicked(false))} >
                            <img src={MOVETOBACK} alt="MOVETOBACK" className="movetoback-image"></img>
                            <p>Move Back To To Do</p>
                        </button>
                        </div>
                    )}
                </div>  
            )}
        </div>
    );
}