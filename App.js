import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,TextInput,Button, FlatList } from 'react-native';

import { useState } from 'react';
import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import   {createNativeStackNavigator }from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import {Poppins_100Thin,Poppins_100Thin_Italic,Poppins_200ExtraLight,Poppins_200ExtraLight_Italic,Poppins_300Light,Poppins_300Light_Italic,Poppins_400Regular,Poppins_400Regular_Italic,Poppins_500Medium,Poppins_500Medium_Italic,Poppins_600SemiBold,Poppins_600SemiBold_Italic,Poppins_700Bold,Poppins_700Bold_Italic,Poppins_800ExtraBold,Poppins_800ExtraBold_Italic,Poppins_900Black,Poppins_900Black_Italic,} from '@expo-google-fonts/poppins';
import Login from './Screens/Login/Login';
import Signin from './Screens/Signin/Signin';
import SetBudget from './Screens/Setupbudget/Setupbudget'
import Setupdepense from './Screens/Setupdepense/Setupdepense'
import Profile from './Screens/Profile/Profile'
import Setup from './Screens/Setup/Setup'
import Setupbudget from './Screens/Setupbudget/Setupbudget';
import Home from './Screens/Home/Home';

import { AppRegistry } from 'react-native';



import Cameras from './Screens/Ocr.js/Camera';
import OcrResult from './Screens/OcrResult/OcrResult';
import Statistique from './Screens/Statistique/Statistique';
import AddDepense from './Screens/AddDepense/AddDepense';
import { ClerkProvider } from '@clerk/clerk-expo';









console.disableYellowBox = true; 

 

export default function App() {

  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    PoppinsThin: Poppins_100Thin,
  PoppinsExtraLight: Poppins_200ExtraLight,
  PoppinsLight: Poppins_300Light,
  PoppinsRegular: Poppins_400Regular,
  PoppinsMedium: Poppins_500Medium,
  PoppinsSemiBold: Poppins_600SemiBold,
  PoppinsBold: Poppins_700Bold,
  PoppinsExtraBold: Poppins_800ExtraBold,
  PoppinsBlack: Poppins_900Black,
  });
  if (!fontsLoaded) {
    return null; // ou un indicateur de chargement
  }


  return (
    <ClerkProvider publishableKey={'pk_test_c3VyZS1yYWJiaXQtNzcuY2xlcmsuYWNjb3VudHMuZGV2JA'}>
<NavigationContainer>
    <Stack.Navigator >

        <Stack.Screen name="Registre"component={Signin} options={{ title: 'registre',headerShown:false }}/>
        <Stack.Screen name="Login" component={Login} options={{ title: 'login',headerShown:false }} />
        <Stack.Screen name="Setupbudget" component={Setupbudget}  options={{ title: 'Welcome',headerShown:false }} />
        <Stack.Screen name="Setupdepense" component={Setupdepense}  options={{ title: 'Welcome',headerShown:false }} />
        <Stack.Screen name="Profile" component={Profile}  options={{ title: 'Welcome',headerShown:false }} />    
        <Stack.Screen name="Setup" component={Setup}  options={{ title: 'Welcome',headerShown:false }} />
        <Stack.Screen name="Home" component={Home}  options={{ title: 'Welcome',headerShown:false }} />
        <Stack.Screen name="Camera" component={Cameras}  options={{ title: 'Welcome',headerShown:false }} />
        <Stack.Screen name="OcrResult" component={OcrResult}  options={{ title: 'Welcome',headerShown:false }} />
        <Stack.Screen name="Statistique" component={Statistique}  options={{ title: 'Welcome',headerShown:false }} />
        <Stack.Screen name="AddDepense" component={AddDepense}  options={{ title: 'Welcome',headerShown:false }} />
     

  
    </Stack.Navigator>
  </NavigationContainer>
</ClerkProvider>
  );
}

AppRegistry.registerComponent('CashManagement', () => App);





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
