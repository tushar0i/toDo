import { useState } from "react"


export function CreateTodo() {
    // we will eventualy use react-query for getting the inner html but for now we
    // creating local state variable which is an unoptimal way of doing this
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    // rule of thumb in react is to minimize the number of rerenders 


    return <div>
        <input type="text" placeholder="title" id="title" onChange={(e) => {
            const value = e.target.value
            setTitle(value)
        }} /> <br />
        <input type="text" placeholder="description" id="description" onChange={(e) => {
            const value = e.target.value
            setDescription(value)
        }} /> <br />
        <button id="btnatd" onClick={() => {
            fetch("http://localhost:3000/todo", { // this thing will be easier when we use axios library
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function (response) {
                    const data = await response.json()
                    alert("Task added")
                })
        }}>Add a toDo</button>
    </div>
}

