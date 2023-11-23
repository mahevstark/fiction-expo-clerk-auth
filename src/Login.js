import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, Platform } from "react-native";
import { useOAuth, useUser } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./hooks/warmupBrowser";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = (props) => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        console.log("clicked google")
        try {
            const { createdSessionId, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }

        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    const { startOAuthFlow:facebooklogin } = useOAuth({ strategy: "oauth_facebook" });

    const onPressFacebook = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await facebooklogin();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    const { startOAuthFlow:applelogin } = useOAuth({ strategy: "oauth_apple" });

    const onPressapple = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await applelogin();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    useEffect(()=>{
        console.log(props.click)

        if(props.click==="google"){
            onPress()
        }
        if(props.click==="facebook"){
            onPressFacebook()
        }
        if(props.click==="apple"){
            if(Platform.OS === 'ios')
                onPressapple()
            else{
                console.log("apple login not supported on android")
            }
        }
    },[props.click])

    return (
        <>
        {/* <Button
            title="Sign in with Google"
            onPress={onPress}
        />
        <Button
            title="Sign in with Facebook"
            onPress={onPressFacebook}
        />
        {
            Platform.OS === 'ios' &&
            <Button
                title="Sign in with Apple"
                onPress={onPressapple}
            />
        } */}
        </>
    );
}
export default SignInWithOAuth;