import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import HomeNavigation from '../nav/HomeNavigation';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import AuthContextProvider, { AuthContext } from '../context/contextProvider';
import { Image, Text, View } from 'react-native';


const Stack = createNativeStackNavigator()

const months: any = {
    0:'Janeiro',
    1:'Fevereiro',
    2:'Março',
    3:'Abril',
    4:'Maio',
    5:'Junho',
    6:'Julho',
    7:'Agosto',
    8:'Setembro',
    9:'Outubro',
    10:'Novembro',
    11:'Dezembro'
}

const weekdays: any = {
    0:'Domingo',
    1:'Segunda-Feira',
    2:'Terça-Feira',
    3:'Quarta-Feira',
    4:'Quinta-Feira',
    5:'Sexta-Feira',
    6:'Sábado',
}

function Logo()
{
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const weekday = new Date().getDay()
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 10, paddingTop:10 }}>
            <View style={{ paddingRight: 10 }}>
                <Image style={{ maxWidth: 150, height: 50, resizeMode: 'center' }} source={require('../assets/vetorpalaonly.png')} />
            </View>
            <View style={{ flexDirection: 'column', borderLeftColor: '#ffffff', borderLeftWidth: 1, alignItems:'center' }}>
                <Text style={{ color: '#ffffff', fontSize: 25, paddingLeft: 10 }}> {day + ' de ' + months[month] + ','} </Text>
                <Text style={{ color: '#ffffff', fontSize: 20, paddingLeft: 10 }} > {weekdays[weekday]} </Text>
            </View>
        </View>
    )
}

export default function MainNav({navigation}: any) {

    // const reducerSetUser = (prevUser: any, user: any) => {
    //     alert(prevUser + ' user ' + user)
    //     dispatch(user)
    // }

    const [user, setUser] = useState(null)
    // const [state, dispatch]: any = useReducer(reducerSetUser, user)

    return (
        <AuthContextProvider value={[user, setUser]}>
            <NavigationContainer>
                <Stack.Navigator>
                    {user != undefined ?
                        <>
                            <Stack.Screen name='Home Navigation' component={HomeNavigation} options={{headerStyle:{ backgroundColor:'#000000'}, headerTitle:() => <Logo />}} />
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