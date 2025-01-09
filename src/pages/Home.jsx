import React from 'react';
import Carousel from '../components/carousel';
import TabCategory from '../components/TabCategory';


const Home = () => {
    return (
        <div>

            <h1 className='text-5xl font-bold my-5 text-center'>Welcome to LoneOrbit</h1>
            <Carousel></Carousel>
           <TabCategory></TabCategory>
            
        </div>
    );
};

export default Home;