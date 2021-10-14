import React, {useState, useContext} from 'react'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(e){
        e.preventDefault();
        console.log({email, password});
    }
    return (
        <div>
           <form>
            <h2>Login</h2>
            <input type="email" className="form-control" placeholder="email" value={email} onChange={e=> setEmail(e.target.value) }></input>
            <br />
            <input type="password" className="form-control" placeholder="password" value={password} onChange={e=> setPassword(e.target.value) }></input>
            <button className="btn btn-primary" onClick={login} >Login</button>


            
            {/* <input type="email" className="form-control" placeholder="email" value={email} 
                onChange={e => setEmail(e.target.value)} />
            <br />
            <input type="password" className="form-control" placeholder="password" value={password} 
                onChange={e => setPassword(e.target.value)} />
            <br />
            <button className="btn btn-primary" onClick={login}>Login</button> */}
        </form> 
        </div>
    )
}
