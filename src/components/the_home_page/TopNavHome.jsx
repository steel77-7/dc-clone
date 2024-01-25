import React from 'react'
import { FaUserFriends } from "react-icons/fa";


export default function TopNavHome() {
    return (
        <>
            <div className='flex relative bg-zinc-700 max-w-screen h-10 items-center text-gray-300  p-3'>
            <TopNavIcons description={'Friends'} icon={<FaUserFriends />}/>
                <TopNavIcons description={'online'}/>
                <TopNavIcons description={'All'}/>
                <TopNavIcons description={'Pending'}/>
                <TopNavIcons description={'Blocked'}/>
            </div>
        </>
    )
}


function SearchBar() {
    return (
        <>
            <div className="flex">
                <input type='text' className=' min-w-max min-h-max  h-5 m-1 p-2 bg-slate-800 text-slate-400 rounded-md focus:outline-none w-10 ' placeholder='Search here' />
            </div>
        </>
    );
}


function TopNavIcons({ description, icon }) {
    return (
        <>
            <div className='flex p-2 m-3 my-3 rounded-md hover:bg-slate-600  min-w-fill min-h-fill '>
                {icon} &nbsp;&nbsp;{description}
            </div>
        </>
    )
}

