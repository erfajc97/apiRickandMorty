import React from 'react';
import banner from "../img/image 3.png";

const Loading = () => {
    return (
 
       

            <main className="loading">

                <img src={banner} alt="" />
                
                 <h1>Loading...</h1>

                 <h4>Welcome to Rick and Morty</h4>

            </main>



    );
};

export default Loading;