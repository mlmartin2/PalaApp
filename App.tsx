import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import HomeNavigation from './nav/HomeNavigation';
import React, { createContext, useContext, useState } from 'react';
import AuthContextProvider, { AuthContext } from './context/contextProvider';
import MainNav from './nav/MainNavigation';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <MainNav />
  );
}
