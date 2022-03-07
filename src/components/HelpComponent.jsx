    import React from 'react';
import '../styles/HelpComponent.css';





const HomeComponent = ({helpList}) => {
    return (
        <div className='help'>
            {
                helpList.map((p) => {
                    return (
                        <div className='help-item' >
                          <p>{p.text}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default HomeComponent;