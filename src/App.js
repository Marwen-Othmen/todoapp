
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addtask, check, deletetask, update } from './Redux/Action';
import Header from './Header';

function App() {
  const dispatch=useDispatch()
  const {tasks} = useSelector(state=>state)
  const [task, setTask] = useState();
  const [updated, setupdate] = useState("");
  return (
    <div >
      <Header/>
      <h2>ADD TASKS</h2>
       <input onChange={e=>setTask(e.target.value)} />
       <button onClick={()=>dispatch(addtask({text:task,done:false,id:Math.random()}))} > Add</button>
      <h2>TO DO</h2>
          {tasks.filter(el=>!el.done).map(el=>
          <div >
            <div>
              <input type="checkbox" onChange={()=>dispatch(check(el.id))}/>
            {el.text}
            </div>      
            <input type="text"  value={updated} onChange={(e)=>setupdate(e.target.value)} />
            
            <button TASKS  onClick={()=>dispatch(update(el.id,updated))}>UPDATE</button>
            <button onClick={()=>dispatch(deletetask(el.id))}> Annuler</button>
          </div>)}
      <h2>  TASKS COMPLETED</h2>
      {tasks.filter(el=>el.done).map(el=>
          <div>
            <div><input type="checkbox" onChange={()=>dispatch(check(el.id))}/>
            {el.text}</div>
            
            <input type="text"  onChange={(e)=>setupdate(e.target.value)} />
            <button onClick={()=>{dispatch(update(el.id,updated))
            setupdate("")}}>UPDATE</button>
          </div>)}      
    </div>
  );
}


export default App;
