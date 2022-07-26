import React, { useState } from 'react'

function BasicForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        
        if(email && password){
        const newEntry = { id: new Date().getTime().toString, email, password}

        setAllEntry([...allEntry, newEntry]);
        setEmail('');
        setPassword('');
        } else {
            alert('Plz fill the data');
        }

    }

    return (
        <>
            <form action='' onSubmit={submitForm}>
                <div>
                    <label>Email</label>
                    <input id="email" type="text" name="email" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input id="password" type="password" name="password" required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>

            <div>
                {allEntry.map((e) => {
                    const {id, email, password} = e;
                    return (
                        <div key={id}>
                            <p> Email {email}, Password:- {password}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default BasicForm