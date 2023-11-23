import React, { useEffect } from "react";
import {  useUser } from "@clerk/clerk-expo";


const UserDetails = (props) => {
    const {user} = useUser()
    useEffect(()=>{
        if(user){
            const theData = {
                fullName:user.fullName,
                emailAddress:user.emailAddresses[0].emailAddress,
                id:user.id,
                imageUrl:user.imageUrl
            }
            props.onData(theData)
        }
    },[user])

    return (
        <>
        
        </>
    );
}
export default UserDetails;