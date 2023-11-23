import { ClerkProvider } from '@clerk/clerk-expo';
import {  StyleSheet,  View } from 'react-native';
import SignInWithOAuth from './Login';
import Logout from './Logout';
import UserDetails from './UserDetails';
import { useEffect, useState } from 'react';


export default function ExpoFictionClerkAuth(props) {
    const [clicked, setClicked] = useState("start")


    useEffect(()=>{
        setClicked(props.click)
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


                    
                    <SignInWithOAuth click={clicked}/>

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
