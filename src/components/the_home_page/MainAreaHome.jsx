import React from 'react'
 import TopNavHome from './TopNavHome'
 import FriendsDescriptionArea from './FriendsDescriptionArea'
import FriendList from './FriendList'

 export default function MainAreaHome(){
    return(
        <>
            <div className='flex fixed flex-col  left-custom_20.5rem  w-screen  min-h-screen z-20 '>
                <TopNavHome/>
                <div className="flex">
                    <FriendList/>
                    <FriendsDescriptionArea/>

                </div>
            </div>
        </>
    )

 }