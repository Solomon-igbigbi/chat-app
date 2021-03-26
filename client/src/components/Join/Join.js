import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [id, setId] = useState('')
  const history = useHistory()

  useEffect(() => {
    setId(uuidv4())
  },[setId]);

  const saveData = (e) => {
    e.preventDefault()
    const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({room: id, name, issue: room})
    }
    fetch('http://localhost:5000/chat', request).then(() => console.log('succeful'))
    history.push(`/chat?name=${name}&room=${id}`)
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">LAY YOU COMPLAINS</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="What's Your Issue" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : saveData(e)} to={`/chat?name=${name}&room=${id}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
