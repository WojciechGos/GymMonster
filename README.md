# GymMonster app

Welcome to the Gym App! This React Native application allows users to create and manage their training plans, as well as schedule workouts on specific dates. Whether you're a beginner or a fitness enthusiast, this app is designed to help you stay organized and motivated on your fitness journey.

## Features

- **Training Plan Creation:** Users can create personalized training plans tailored to their fitness goals, including exercises, sets, reps, and rest intervals.

- **Workout Scheduling:** Users can schedule workouts on specific dates, ensuring they stay on track with their training regimen.

- **Exercise Library:** Access a comprehensive library of exercises with descriptions and demonstration videos to help users perform exercises correctly.

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
