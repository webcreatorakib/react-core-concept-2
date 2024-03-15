import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends(){
    const [friends, setFriends] = useState([]);
    useEffect(() =>{
        const getData = async () =>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setFriends(data);
        }
        getData();
    },[])
    return(
        <div>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}