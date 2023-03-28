import React from 'react';
import {
    Link
} from 'react-router-dom'

const Home = () => {
    return (
        <div className="w-screen h-screen text-center bg-[#03052e]">
            <h1 className="py-10  font-semibold text-5xl text-[#0cfca7]">No country - <span className='font-bold text-white' >Go && Stay</span></h1>
            <Link className="text-[white]" to="/BreakdownOfAccommodation">BreakdownOfAccommodation</Link>
        </div>
    );
};

export default Home;