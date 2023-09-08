import React, { useState } from 'react';
import '../App.css'; // import your css file

export default function Admin() {
  const [credentials, setCredentials] = useState({username: '', password: ''});

  function handleClick(event){
    if(event.target.value === "js"){
        // Set your credentials here
        setCredentials({username: 'jsquiz', password: '1234'});
    }
    else if(event.target.value === "reactjs"){
        // Set your credentials here
        setCredentials({username: 'reactjsquiz', password: '1234'});
    }
    else if(event.target.value === "nodejs"){
        // Set your credentials here
        setCredentials({username: 'nodejsquiz', password: '1234'});
    }
    else if(event.target.value === "java"){
        // Set your credentials here
        setCredentials({username: 'javaquiz', password: '1234'});
    }

  }

  return (
    <div className="bb">
        <h2>Select Quiz & Get Credentials</h2>
      <div className="quizzes">
        <div className="b1 top-left">
          <h3>Javascript Quiz</h3>
          <br></br>
          <button className='a1' value='js' onClick={handleClick}>Get Credentials</button>
        </div>

        <div className="b1 top-right"> <h3>ReactJs Quiz</h3>
          <br></br>
          <button className='a1' value='reactjs' onClick={handleClick}>Get Credentials</button></div>
        <div className="b1 bottom-left"> <h3>NodeJs Quiz</h3>
          <br></br>
          <button className='a1' value='nodejs' onClick={handleClick}>Get Credentials</button></div>
        <div className="b1 bottom-right"> <h3>Java Quiz</h3>
          <br></br>
          <button className='a1' value='java' onClick={handleClick}>Get Credentials</button></div>
      </div>

      <br></br>
      <div className="cred">
        <p>Username: {credentials.username}</p>
        <p>Password: {credentials.password}</p>
      </div>
    </div>
  );
}