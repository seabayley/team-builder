import React, { useState } from 'react';
import Form from './Form';
import TeamList from './TeamList'
import logo from './logo.svg';
import './App.css';

function App() {

  const [teamList, setTeamList] = useState([]);

  return (
    <div className="App">
      <div className="team_list">
        <TeamList teamList={teamList} />
      </div>
      <div className="member_add_form">
        <Form addMember={setTeamList} memberList={teamList} />
      </div>
    </div>
  );
}

export default App;
