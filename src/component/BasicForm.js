import React, { useState } from 'react'

function BasicForm() {

    const [userData, setUserData] = useState({  username: "", email: "", phone: "", password: ""});
    const [allEntry, setAllEntry] = useState([]);

    // const submitForm = (e) => {
    //     e.preventDefault();

    //     if (userData.email && userData.password) {
    //         const newEntry = { id: new Date().getTime().toString, userData.email, userData.password }

    //         setAllEntry([...allEntry, newEntry]);
    //         setEmail('');
    //         setPassword('');
    //     } else {
    //         alert('Plz fill the data');
    //     }

    // }
    const handleInput = (e) => {
        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;

        setUserData({...userData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry = {...userData, id : new Date().getTime().toString()}

        setAllEntry([...allEntry, newEntry]);
    }

    return (
        <>
            <form action='' onSubmit={handleSubmit}>
                <div>
                    <label> Usere Name </label>
                    <input id="username" type="text" name="username" required
                        value={userData.username}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input id="email" type="text" name="email" required
                        value={userData.email}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label>Phone</label>
                    <input id="phone" type="number" name="phone" required
                        value={userData.phone}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input id="password" type="password" name="password" required
                        value={userData.password}
                        onChange={handleInput}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>

            <div>
                {allEntry.map((e) => {
                    const { id, username, email, phone, password } = e;
                    return (
                        <div key={id}>
                            <p> Username {username}, Email {email}, Phone {phone}, Password:- {password}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default BasicForm