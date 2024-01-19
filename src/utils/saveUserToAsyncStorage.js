import AsyncStorage from "@react-native-async-storage/async-storage"

const saveUserToAsyncStorage = async (user) => {
    try {
        // Convert the user object to a JSON string
        const userJson = JSON.stringify(user)

        // Save the JSON string to AsyncStorage with a key, for example, 'user'
        await AsyncStorage.setItem("user", userJson)

        console.log("User saved to AsyncStorage")
    } catch (error) {
        console.error("Error saving user to AsyncStorage:", error.message)
    }
}

export default saveUserToAsyncStorage
