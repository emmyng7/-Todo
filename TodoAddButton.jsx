
import Button from "./Button";


function TodoAddButton({add}) {
    return(
        <>
        <div>
            <Button 
               onClick={add}
               text='ADD'
            />
        </div>
        </>
    )
}
export default TodoAddButton;