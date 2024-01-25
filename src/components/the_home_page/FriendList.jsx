import React from 'react'


 export default function FriendList(){
    return(
        <>
        <div className=" friendlist flex items-center flex-col relative bg-gray-600 w-full h-screen">
            <SearchBar placeholder={'type here'}/>
            
            <div className="flex">

            </div>
        </div>
        
        </>
    )

 }

 function SearchBar({placeholder}) {
    return (
        <>
            <div className="flex">
                <input type='text' className="dm-search-input   w-full  h-10 m-2 p-2 bg-slate-800 text-slate-400 rounded-md focus:outline-none" placeholder= {placeholder}/>

            </div>
        </>
    );
}

function IndiviFriend({name,description,chat,options}){
    return(
        <>
            <div className="flex"></div>
        </>
    )
}