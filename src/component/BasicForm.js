import React, { useState } from 'react'

function BasicForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allData, setAllData] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        setAllData([...allData, { email: email, password: password }]);
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
                {allData.map((e) => {
                    return (
                        <>
                            <p> Email {e.email}, Password:- {e.password}</p>
                        </>
                    );
                })}
            </div>
        </>
    )
}

export default BasicForm