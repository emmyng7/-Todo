

function TodoInput({text,setText}){
    return(
      <>
        <input
          type="text" 
          placeholder='Enter Text...'
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
    </>
    )
}
export default TodoInput;