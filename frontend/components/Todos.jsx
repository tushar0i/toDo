// { something } object destructuring syntax 
export function Todos({ todos }){ // todos is the input array which contains all tasks 

    return <div>
        {
            todos.map((todo)=>{
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Make as Completed"}</button>
                    </div>
            })
        }
    </div>
}