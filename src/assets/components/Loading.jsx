import React from 'react';
import banner from "../img/image 3.png";

const Loading = () => {
    return (
 
        <div className='Container__Loading' >

            <body className="loading">

                <img src={banner} alt="" />
                
                 <h1>Loading...</h1>

                 <h4>Welcome to Rick and Morty</h4>

            </body>


        </div>

    );
};

export default Loading;