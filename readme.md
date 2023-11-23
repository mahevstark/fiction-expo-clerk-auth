# Fiction Expo Clerk Auth

Fiction Expo Clerk Auth is a social media authentication helper developed by Fiction Developers. For more information, visit [fictiondevelopers.com](https://fictiondevelopers.com).

## Installation

To use Fiction Expo Clerk Auth in your project, import it as follows:
add documentation, introduce package as a social media auth helper developed by Fiction Developers, https://fictiondevelopers.com 

to use: 
import ExpoFictionClerkAuth from 'fiction-expo-clerk-auth';


and then in your code:
<ExpoFictionClerkAuth 
         click={clicked} onData={(d) => {
          console.log("WIN WIN WIN")
          console.log(d)
        }}
        token="REPLACE_A_CLERK_AUTH_KEY"
      />


      now you control the state 'clicked' with these options:
      clear
      google
      facebook
      apple
      logout

      remember to clear before setting any other state

      Example if you want to login with google

      setClicked('clear')

// wait 200 ms
setClicked('google')
