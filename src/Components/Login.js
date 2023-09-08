import React, { useState } from 'react';
import Quiz from './Quiz';
import ReactJsQuiz from './ReactJsQuiz';
import NodeJsQuiz from './NodeJsQuiz';
import JavaQuiz from './JavaQuiz';
import Admin from './Admin';

export default function Login() {
    const [login, setLogin] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e){
        e.preventDefault(); // prevent form from refreshing the page

        // check if username and password are correct
        if(username === 'admin' && password === '1234') {
            setLogin("admin");
        }else  if(username === 'jsquiz' && password === '1234') {
            setLogin("jsquiz");
        }
        else  if(username === 'reactjsquiz' && password === '1234') {
            setLogin("reactjsquiz");

        }
        else if(username === 'nodejsquiz' && password === '1234') {
            setLogin("nodejsquiz");
        }
        else if(username === 'javaquiz' && password === '1234') {
            setLogin("javaquiz");
        }
         else {
            alert('Invalid username or password');
        }
    }

    if(login=="admin"){
        return <Admin/>
    }else if(login=="reactjsquiz"){
        return <ReactJsQuiz/>

    }else if(login=="nodejsquiz"){
        return <NodeJsQuiz/>
        
    }else if(login=="javaquiz"){
        return <JavaQuiz/>
    }else if(login=="jsquiz" ){
        return <Quiz/>
    }

    
    return (<>
    
        <div className="container">
            <form onSubmit={handleLogin}>
                <h3 className="heading-txt" style={{color:'black'}}>Login</h3>

                <div class="question">
                    <label class="form-label" for="form2Example1">Username</label>
                    <br></br>
                    <input type="text" id="form2Example1" class="form-control" onChange={e => setUsername(e.target.value)} />
                </div>

                <div class="question">
                    <label class="form-label" for="form2Example2">Password</label>
                    <br></br>
                    <input type="password" id="form2Example2" class="form-control" onChange={e => setPassword(e.target.value)} />
                </div>

                <input type="submit" value="Login" id="btn1" />
            </form>
        </div></>
    )
}