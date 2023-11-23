import { ClerkProvider } from '@clerk/clerk-expo';
import {  StyleSheet,  View } from 'react-native';
import SignInWithOAuth from './Login';
import Logout from './Logout';
import UserDetails from './UserDetails';
import React, { useCallback, useEffect, useState } from 'react';

const useForceUpdate = () => {
    const [, updateState] = React.useState();
    return useCallback(() => updateState({}), []);
}
export default function ExpoFictionClerkAuth(props) {
    const [clicked, setClicked] = useState("start")
    const forceUpdate = useForceUpdate();

    useEffect(()=>{
        setClicked(props.click)
        setTimeout(()=>{
            forceUpdate()
        },300)
    },[props.click])

    
    return (
        <View style={styles.container}>
            <ClerkProvider publishableKey={props.token}>

                    <UserDetails onData={(d) => {
                        props.onData({
                            type:clicked,
                            data:d
                        })
                    }} />

                    <Logout click={clicked} />


                    
                    {clicked!='clear' &&<SignInWithOAuth click={clicked}/>}
                    {clicked=='clear' &&<></>}

            </ClerkProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:0,
        width:0,
        opacity:0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
