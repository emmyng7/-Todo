

import Button from "./Button";

function TodoList({Todos,onDelete}){
    return(
        <>
        {
          Todos.map((text,index) =>
          <div key={index}>
            <p>{text}</p>

            <Button 
              onClick={() => onDelete(index)}
              text='delete'
              
            />

          </div>
        
        )
      }
        </>
    )
}
export default TodoList;