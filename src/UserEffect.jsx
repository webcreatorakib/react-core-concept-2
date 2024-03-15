import { useEffect, useState } from "react"

export default function Users(){
    const [user, setUsers] = useState([]);
    useEffect(() =>{
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then(data => setUsers(data))
        const getUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data)
        }
        getUsers();
        },[])
    return(
        <div className="card">
            <h4>Users : {user.length}</h4>
        </div>
    )
}

// 1. Declare a state to hold the data
// 2. useEffect with callback and dependency
// 3. use fetch for load data