import React from 'react'
import { IoAccessibilityOutline } from "react-icons/io5";
import { FaCompass } from "react-icons/fa";
function Server_navbar() {

    return (
        <>
            <div className='flex fixed flex-col  bg-slate-800  h-screen w-20 list-none items-center z-40'>
                
                <SideBarIcon icon={<IoAccessibilityOutline size={30}/>} tip='tip here'  />
                <hr  className="border-t-2  my-2 z-3 w-7  opacity-50" />
                <SideBarIcon icon='B' tip='tip here' />
                <SideBarIcon icon='C' tip='tip here'/>
                <SideBarIcon icon='D' tip='tip here'/>
                <SideBarIcon icon='E' tip='tip here'/>
                <button onClick={handleClick}><SideBarIcon icon='+' tip='tip here' /></button>
                <SideBarIcon icon={<FaCompass size={25}/>} tip='tip here' />
            </div>

        </>
    );
}

const SideBarIcon = ({ icon, tip }) => {
    return (
        <>
            <div className='sidebar-icon group'>
                {icon}
                <div className='tooltip group-hover:scale-100 z-auto'>
                    {tip}

                </div>
            </div>


        </>
    );
}

function handleClick(){
    console.log('button clicked');
    

    return
}


export default Server_navbar;