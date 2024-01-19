import AsyncStorage from "@react-native-async-storage/async-storage"

// Function to save user information to AsyncStorage
const saveUserToAsyncStorage = async (object) => {
    try {
        // Convert the user object to a JSON string
        // console.log(user['_tokenResponse']['user'])
        // console.log(object.user.uid)
        const userJson = JSON.stringify(object.user)

        // Save the JSON string to AsyncStorage with a key, for example, 'user'
        await AsyncStorage.setItem("user", userJson)

        console.log("User saved to AsyncStorage")
    } catch (error) {
        console.error("Error saving user to AsyncStorage:", error.message)
    }
}

export default saveUserToAsyncStorage
