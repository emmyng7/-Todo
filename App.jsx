import { useState,useEffect } from 'react'
import TodoInput from './components/TodoInput';
import TodoAddButton from './components/TodoAddButton';
import TodoList from './components/TodoList';
import './components/Toddo.css';

function App() {
  
  const [Text,setText] = useState('')
  
    const [Todos,setTodos]= useState(() => {
    const savedTodos = localStorage.getItem('Todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });


   useEffect(() => {
    localStorage.setItem('Todos',JSON.stringify(Todos ))
  },[Todos])


  function add(){
    if (Text.trim() ==='') return;
    setTodos([...Todos,Text])
    setText('')
  }

  function onDelete(dex){
    const remove = Todos.filter((Text,index) => index !== dex)
    setTodos(remove)
  }

  return(
    <>

      <div className='maindiv'> 
        
        <div>
         <TodoInput Text={Text} setText={setText}/>
         <TodoAddButton add={add}/>
        </div>

        <TodoList
          Todos={Todos} 
           onDelete={onDelete}
        />
        
      </div>
        

    </>
  )
  
}

export default App;
