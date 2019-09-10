import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Member from './components/Member'

function App() {
  const [member, setMember] = useState([
    {
      name: "Member Name",
      email: "e-mail",
      role: "Role"
    }
  ]);

  return (
    <div className="App">
      <Form member={member} setMember={setMember} />
      <Member member={member} />
    </div>
  );
}

export default App;
