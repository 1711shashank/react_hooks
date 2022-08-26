// https://mui.com/material-ui/getting-started/installation/

import React, { useState, useEffect } from 'react'

import './ProfileCard.css'
import Loading from './Loading';
import ProfileCards from './ProfileCards';

function UseEffectAPI() {

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getApiData = async () => {
        try {
            let response = await fetch('http://localhost:5000/users', {
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                method: 'GET',
                credentials: 'include'
            })

            response = await response.json();
            response = response.userData;
            // console.log(response);
            setApiData(response);
            console.log(apiData);

            setLoading(false);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getApiData();
    }, []);

    if(loading){
        return <Loading/>
    }
    return <ProfileCards usersData={apiData}/>
}

export default UseEffectAPI