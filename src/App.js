import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Member from './components/Member'

import 'typeface-roboto';

function App() {
  const [member, setMember] = useState([]);

  const [memberToEdit, setMemberToEdit] = useState({
    name: "",
    email: "",
    role: ""
  });

  const editMember = props => {
    setMemberToEdit(props);
    console.log(props);
  }

  return (
    <div className="App">
      <Form 
        member={member} 
        setMember={setMember} 
        memberToEdit={memberToEdit} 
      />
      <Member member={member} />
    </div>
  );
}

export default App;
