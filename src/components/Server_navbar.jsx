import React from 'react'

function Server_navbar(){

    return(
        <>
            <div className='flex flex-col  bg-slate-800 h-screen w-16 list-none items-center '>
                {/* <li className=' bg-slate-400 p-2 m-2 rounded-full'>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li> */}
                <SideBarIcon icon ='A'  />
            </div>  
        
        </>     
    );
}

const SideBarIcon = ({icon})=>{
    <div className='sidebar-icon'>
        {icon}
    </div>
}

export default Server_navbar;