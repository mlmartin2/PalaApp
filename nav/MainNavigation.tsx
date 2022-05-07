import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import HomeNavigation from '../nav/HomeNavigation';
import React, { useContext, useEffect, useReducer } from 'react';
import AuthContextProvider, { AuthContext } from '../context/contextProvider';

const Stack = createNativeStackNavigator()

export const reducerSetUser = (prevUser: any, user: any) =>
{
    prevUser = user
}

export default function MainNav({navigation}: any) {

    const {user, setUser}: any = useContext(AuthContext)
    const [state, dispatch] = useReducer(reducerSetUser, user)
    useEffect(() => alert('user useEffect'),
    [user])

    return (
        <AuthContextProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {user != undefined ?
                        <>
                            <Stack.Screen name='Home Navigation' component={HomeNavigation} />
                        </>
                        :
                        <>
                            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                            <Stack.Screen name='Sign Up' component={SignupScreen} options={{ headerShown: false }} />
                        </>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContextProvider>
    )
}