import React, { useState, useEffect } from 'react'

function UseEffectAPI() {

    const [apiData, setApiData] = useState([]);

    const getApiData = async () => {
        try {
            let response = await fetch('http://localhost:5000/users', {
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                method: 'GET',
                credentials: 'include'
            })

            response = await response.json();
            response = response.userData[0];
            setApiData([response]);
            console.log(apiData);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getApiData();
    }, []);


    return (
        <>
            {
                apiData.map((curData) => {
                    return (
                        <div key={curData._id}>

                            <img src={curData.avatar_url} />
                            <p> {curData.name} </p>
                            <p> {curData.linkedin_ID} </p>
                            <p> {curData.github_ID} </p>
                            <p> {curData.insta_ID} </p>

                        </div>
                    );
                })
            }

        </>
    )
}

export default UseEffectAPI