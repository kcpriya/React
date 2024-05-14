import { memo } from "react";

const Todos = ({ todos, addTodo }) => {   //todo - array 
    console.log("child render")
    return (
        <>
        <h2>My Todos</h2>
        {todos.map((todo) =>{
            return <p>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

//export default Todos
export default memo(Todos)