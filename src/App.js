import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

function App() {
  const [member, newMember] = useState([
    {
      name: "name",
      email: "email",
      role: "role"
    }
  ]);

  return (
    <div className="App">
      <Form />
      <Member member={member} />
    </div>
  );
}

export default App;
