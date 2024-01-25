import React from 'react';
import { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { CiShop } from "react-icons/ci";
import { IoIosRocket } from "react-icons/io";
function Dmlist() {
    return (
        <>
            <div className="  dmlist fixed flex flex-grow flex-col bg-slate-700    w-88 h-full overflow-y-auto  left-20 z-30"  >
                <SearchBar />
                <MenuIcons icon={<VscAccount size={30} />} tag='Friends' />
                <MenuIcons icon={<IoIosRocket size={30} />} tag='Nitro' />
                <MenuIcons icon={<CiShop size={30} />} tag='Shop' />
                <Dms />
            </div>
        </>
    );
}


function SearchBar() {
    return (
        <>
            <div className="flex">
                <input type='text' className='flex bg-slate-800 rounded-md sticky scale-95 focus:outline-none text-slate-400  z-30 my-1' placeholder='Search here' />

            </div>
        </>
    );
}

function MenuIcons({ icon, tag }) {
    return (
        <>
            <div className="flex hover:bg-slate-400 group m-1 p-1 hover:rounded-xl">
                <div className="justify-between my-2 text-slate-400 group-hover:text-slate-700">
                    {icon}
                </div>
                <div className="  ml-4 justify-between my-2 text-slate-400  group-hover:text-slate-700">
                    {tag}
                </div>
            </div>
        </>
    )
}

function Dms() {

    return (
        <>

            <div className='flex text-slate-400 p-2 flex-row justify-between'>
                Direct Messages
                <div className="flex">
                    
                    <a href='#'className=' flex  mr-1 group'>
                        +
                        <div className=" fixed p-1 m-0.5 rounded-md  top-48  left-64 
                        ml-5  min-w-max  scale-0 group-hover:scale-100  group-hover:bg-slate-900 origin-bottom overflow-y-visible">tip here</div>
                        
                    </a>
                    
                </div>
            </div>



        </>
    )
}

export default Dmlist;