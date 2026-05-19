

import Button from "./Button";

function TodoList({todos,onDelete}){
    return(
        <>
        {
          todos.map((text,index) =>
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