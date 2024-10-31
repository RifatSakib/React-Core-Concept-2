import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []) //useEffect ekta callback func ar ekta dependency use kore gothito. ekhane [] holo dependency, zehetu dependency te kono parameter nai tai useEffect ekbar call hobe then ar hobe na but zodi [a,b] emon hoto tobe ekbar call howar por a,b zotobar change hoto totobar call hoto. karon dependency thakle dependency zotobar change hobe totobar again call hobe.

    return (
        <div>
            <h3>Users: {users.length}</h3>
            
        </div>
    )
}


/**
 * 1. declare a state to hold the data 
 * 2. useEffect with call back and dependency array
 * 3. use fetch to load data
*/