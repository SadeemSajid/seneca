import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router';

// This allows us to apply TailwindCSS styles
import "../global.css";


const RootLayout = () => {
  return (
    <> 
      <Slot />
    </>
  )
  
}

export default RootLayout