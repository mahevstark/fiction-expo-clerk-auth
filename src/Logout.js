import React, { useEffect } from "react";
import { Button } from "react-native";
import { useClerk } from "@clerk/clerk-expo";

const Logout = (props) => {
    const {signOut} = useClerk()

    useEffect(()=>{
        if(props.click === "logout"){
            signOut()
        }
    },[props.click])

    return (
        <Button
            title="Logout"
            onPress={signOut}
        />
    );
}
export default Logout;