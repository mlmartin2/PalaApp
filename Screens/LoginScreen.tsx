import  React, { useContext, useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { styles } from "../styles";
import authenticate_User from "../functions/authHandler";
import { AuthContext } from "../context/contextProvider";
import PINInput from "../components/PinInput";
import User_Class, { User } from "../models/userModel";

export default function LoginScreen({navigation}: any)
{
    const [user,setUser]: any = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    return(
        <View style={styles.root}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../resources/vetorpalaonly.png')} />
            </View>
            <View style={styles.body}>
                <TextInput autoCapitalize='words' style={{textAlign:'center'}} placeholder="Nome" onChangeText={setUsername} value={username} />
                <PINInput placeholder="PIN" onChangeText={setPassword} value={password} /> 
                <Button title="Login" onPress={() => authenticate_User(username, password)} />
                <Button title="Cadastro" onPress={() => navigation.navigate('Sign Up')} />
                <Button title='Debug' onPress={() => {}} />
            </View>
        </View>
    )
}

