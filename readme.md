# Fiction Expo Clerk Auth

Fiction Expo Clerk Auth is a social media authentication helper developed by Fiction Developers. For more information, visit [fictiondevelopers.com](https://fictiondevelopers.com).

## Installation

To use Fiction Expo Clerk Auth in your project, follow these steps:

1. Install the package by running the following command:
    ```bash
    npm install fiction-expo-clerk-auth
    ```

2. Import `ExpoFictionClerkAuth` in your code:
    ```javascript
    import ExpoFictionClerkAuth from 'fiction-expo-clerk-auth';
    ```

3. Use `ExpoFictionClerkAuth` component in your code:
    ```javascript
    <ExpoFictionClerkAuth 
      click={clicked} 
      onData={(d) => {
         console.log("WIN WIN WIN")
         console.log(d)
      }}
      token="REPLACE_A_CLERK_AUTH_KEY"
    />
    ```

4. Control the state of `clicked` with the following options:
    - `clear`: clears the ground
    - `google`: initiates login with google
    - `facebook`: initiates login with Facebook
    - `apple`: initiates login with Apple
    - `logout`: logsout

    Make sure to clear the state before setting any other state. For example, if you want to login with Google:
    ```javascript
    setClicked('clear');
    setTimeout(() => {
      setClicked('google');
    }, 200);
    ```

For more information and usage examples, refer to the [documentation](https://fictiondevelopers.com).
