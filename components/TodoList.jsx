



function TodoList({Todos,onDelete}){
    return(
        <>
        {
          Todos.map((text,index) =>
          <div key={index}>
            <p>{text}</p>
            <button onClick={() => onDelete(index)}>delete</button>
          </div>
        
        )
      }
        </>
    )
}
export default TodoList;