"use client";

import {useEffect, useState} from "react";

export default function Lab3Page() {

  let [users, setUsers] = useState([]);
  const url = 'https://api.github.com/users';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="section">
      {users.map(user => (
        <ul key={user.id}>
          <li>{user.login}, {user.node_id}, {user.url}</li>
        </ul>
      ))}
    </div>
  );
}