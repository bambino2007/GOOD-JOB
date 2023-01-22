import React from 'react';
import './App.css';
import Users from './db.json';
import Phones from './bd.json'

export default function App() {
  return (
   <div className='App'>
    <h1>Вывод содержимого файла db.json:</h1>
    {Users.map(user=>(
      <li key={user.id}>{user.name}</li>
    ))}
    {Phones.map(phone=>(
    <li key={phone.id}>{phone.phone} {phone.manufacturer} {phone.price} </li>
    ))}
   </div>
  );
}


