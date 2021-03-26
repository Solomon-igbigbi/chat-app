import React, { useState, useEffect }  from 'react';
import { useHistory } from "react-router-dom"

import './admin.css'


const Admin = () => {
    const [rooms, setRooms] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/chats')
            .then(res => res.json()).then(data => setRooms(data))
    }, []);

    const getRoom = (e) => {
        const newRoom = e.target.parentElement.lastChild.textContent
        console.log(newRoom)
        history.push(`/chat?name=secetary&room=${newRoom}`)
    }

    return(
        <div className='admin'>
            <div className="parent-rooms">
                {
                    !rooms ? 'LOADING' : rooms.map(room => 
                        <div className='details' key={room._id}>
                            <h1 onClick={e => getRoom(e)} >{room.name}</h1>
                            <h2>{room.issue}</h2>
                            <span>{room.room}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Admin