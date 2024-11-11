import React from 'react';
import {Slot, Stack} from 'expo-router'
import { useFonts} from 'expo-font'//add this import
import { useEffect } from 'react'//add this import
import { SplashScreen } from 'expo-router'//add this import

SplashScreen.preventAutoHideAsync();// add this code after import
const MainLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Sansita-BoldItalic": require("../assets/fonts/Sansita-BoldItalic.ttf"),
        "QwitcherGrypen-Bold": require("../assets/fonts/QwitcherGrypen-Bold.ttf"),
        "QwitcherGrypen-Regular": require("../assets/fonts/QwitcherGrypen-Regular.ttf"),
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      
  return (
    <>
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
    </>
  );
}

export default MainLayout
