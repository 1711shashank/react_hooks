import React, { useState } from 'react'

function UseStateArray() {
    
    const tasks = [
        {
            id: 1, task: 'Todays Grocery Shopping'
        },
        {
            id: 2, task: 'Solve 2 questions LeetCode'
        },
        {
            id: 3, task: 'College Assigment'
        },
        {
            id: 4, task: 'OS & DBMS'
        }
    ]
    const [todoArray, setTodoArray] = useState(tasks);

    const clearArray = () => {
        setTodoArray([]);
    }

    const removeEle = (id) => {    
        const newTodoArray = todoArray.filter((e) => {
            return e.id !== id;
        })

        setTodoArray(newTodoArray);
    }

    return (
        <>
            {
                todoArray.map((valTask) => {
                    return (
                        <h3 key={valTask.id}>
                            {valTask.task}
                            <button onClick={() => removeEle(valTask.id)}> Remove </button>
                        </h3>
                    );
                })
            }
            <button onClick={clearArray} > Clear All </button>

        </>
    )
}

export default UseStateArray