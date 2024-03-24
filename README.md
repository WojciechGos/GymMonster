# GymMonster app

Welcome to the Gym App! This React Native application allows users to create and manage their training plans, as well as schedule workouts on specific dates. Whether you're a beginner or a fitness enthusiast, this app is designed to help you stay organized and motivated on your fitness journey.

## Features

- **Training Plan Creation:** Users can create personalized training plans tailored to their fitness goals, including exercises, sets, reps, and rest intervals.

- **Workout Scheduling:** Users can schedule workouts on specific dates, ensuring they stay on track with their training regimen.

- **Exercise Library:** Access a comprehensive library of exercises with descriptions and demonstration videos to help users perform exercises correctly.


# Screens

## Login
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/c8080704-f44c-4e6d-bbe3-91fb432c338b){width=100}

## Register
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/67a2d1ea-0281-4ad5-a224-00c41ee66988)

## Home
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/19a1f6cc-28f7-4ebf-ba5b-2112ed0f6d97){width=300}

### Menu 
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/7e3cde02-4c03-46d4-a3d8-ecca001e89c8)

## Plan creator
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/7b7ccb28-9c60-4667-a020-54211d90df84)

## Edit training
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/7ff6e025-880e-4c22-981c-9de3afa19616)

## Pick date
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/534d9ffc-ec0a-4fe7-9f39-e7b11689c3be)

### Calendar
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/cca68459-3148-4044-b768-ce4530c438a8)


## Exercise library
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/63801767-1167-4c24-8404-2e71e08a790d)
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/aa9c5571-d096-4a12-ada7-fc6bea57bef7)

## Exercise description
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/c920cfca-9555-423a-8a9b-c90d5e1c0794)

## User's Trainings
![image](https://github.com/WojciechGos/GymMonster/assets/36795978/a41bc830-38f7-43d5-83fa-2340a99349ab)



## Installation

To run the Gym App locally on your machine, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using:
```bash
git clone https://github.com/yourusername/gym-app.git
```

2. **Navigate to the Directory**: Move into the directory containing the app:
```bash
cd gym-app
```

3. **Install Dependencies**: Install the necessary dependencies using npm or yarn:
```bash
npm i
```

4. **Create config file for firebase**
```javascript
import { initializeApp } from "firebase/app"  
import { getAuth } from "firebase/auth"  
import { getFirestore } from "firebase/firestore"  
import { initializeAuth, getReactNativePersistence } from "firebase/auth"  
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"  

const firebaseConfig = {  
    apiKey: "",  
    authDomain: "",  
    projectId: "",  
    storageBucket: "",  
    messagingSenderId: "",  
    appId: "",  
    measurementId: "",  
}  

// Initialize Firebase  
export const FIREBASE_APP = initializeApp(firebaseConfig)  
  
const auth = initializeAuth(FIREBASE_APP, {  
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),  
})  

export default auth  

export const FIREBASE_AUTH = getAuth(FIREBASE_APP)  
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)  
```
