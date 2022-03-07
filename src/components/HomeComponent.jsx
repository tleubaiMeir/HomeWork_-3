import React from 'react';
import '../styles/HomeComponent.css'

import {NavLink} from 'react-router-dom';

const HomeComponent = ({ lists }) => {
    return (
        <div className='lists'>
            {
                lists.map((list,idx) => {
                    return (
                        <div className='list' key={idx}>
                            <NavLink to={`/stat/${list.id}`}>{list.name}</NavLink>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default HomeComponent;
