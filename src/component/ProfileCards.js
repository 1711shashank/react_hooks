import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FcApproval } from "react-icons/fc";

function ProfileCards({usersData}) {
    return (
        <div  className='profileCards'>
            {
                usersData.map((curUserData) => {
                    return (
                        <div key={curUserData._id} className='profileCard'>

                            <div><img src={curUserData.avatar_url} /></div>

                            <div><h3> {curUserData.name} <FcApproval/> </h3></div>

                            <div className='profileCard__links'>
                                <a href={curUserData.linkedin_ID} target="_blank">
                                    <LinkedInIcon size="2x" />
                                </a>
                                <a href={curUserData.github_ID} target="_blank">
                                    <GitHubIcon size="2x" />
                                </a>
                                <a href={curUserData.insta_ID} target="_blank">
                                    <InstagramIcon size="2x" />
                                </a>
                            </div>

                        </div>
                    );
                })
            }
        </div>
    )
}

export default ProfileCards;