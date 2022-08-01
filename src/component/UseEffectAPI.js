// https://mui.com/material-ui/getting-started/installation/

import React, { useState, useEffect } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './ProfileCard.css'

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
            response = response.userData;
            // console.log(response);
            setApiData(response);
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
                        <div key={curData._id} className='profileCard'>

                            <div><img src={curData.avatar_url} /></div>

                            <div><h3> {curData.name} </h3></div>

                            <div className='profileCard__links'>
                                <a href={curData.linkedin_ID} target="_blank">
                                    <LinkedInIcon size="2x" />
                                </a>
                                <a href={curData.github_ID} target="_blank">
                                    <GitHubIcon size="2x" />
                                </a>
                                <a href={curData.insta_ID} target="_blank">
                                    <InstagramIcon size="2x" />
                                </a>
                            </div>

                        </div>
                    );
                })
            }

        </>
    )
}

export default UseEffectAPI