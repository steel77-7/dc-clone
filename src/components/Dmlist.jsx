import React from 'react';
import { useState } from 'react';

function Dmlist() {
    return (
        <>
            <div className="flex bg-slate-700">
                <SearchBar />
            </div>
        </>
    );
}


function SearchBar() {
    return (
        <>
            <div className="flex">
                <input type='text' className='dm-search-input min-w-max min-h-max h-6 m-2 p-2 bg-slate-800 text-slate-400 rounded-md focus:outline-none ' placeholder='  Search here  ' />

            </div>
        </>
    );
}

export default Dmlist;