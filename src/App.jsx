import { useState } from 'react'

function App() {
    const [todos , settoDos] = useState([{
        title : "running",
        description : "moring from 6 to 7 am",
        completed : true
    },{
        title : "maths assignment",
        description : "from 8 - 10 am",
        completed : false
    },{
        title : "python",
        description : "complete two topics/chapter from freecodecamp video",
        completed : false
    }])

    function addtoDo(){
        
        settoDos([...todos,{//this helps us add thing in the end of orignal array
            title : "task title",
            description : "task description"
        }])
    }

  return (
        <div>
            <button onClick={addtoDo}>add task templet</button>
            {todos.map(function(todo){
                return <Todo title={todo.title} description={todo.description} completed={todo.completed} />
            })}
        </div>
        
  )

  function Todo(state){
    return <div>
        <h2>{state.title}</h2>
        <h3>{state.description}</h3>
        {/* <button>somethign</button> */}
    </div>
  }
}

export default App
