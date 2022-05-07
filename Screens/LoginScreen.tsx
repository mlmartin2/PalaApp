import  React, { useContext, useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { styles } from "../styles";
import { AuthContext } from "../context/contextProvider";
import PINInput from "../components/PinInput";
import login from "../functions/authUser";

export default function LoginScreen({navigation}: any)
{
    const [user,setUser]: any = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const auth = () =>
    {
        login(username, password)
        .then((user) => setUser(user))
    }

    return(
        <View style={styles.root}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/vetorpalaonly.png')} />
            </View>
            <View style={styles.body}>
                <TextInput autoCapitalize='words' style={{textAlign:'center'}} placeholder="Nome" onChangeText={setUsername} value={username} />
                <PINInput placeholder="PIN" onChangeText={setPassword} value={password} /> 
                <Button title="Login" onPress={() => auth()} />
                <Button title="Cadastro" onPress={() => navigation.navigate('Sign Up')} />
                <Button title='Debug' onPress={() => alert(Object.values(user))} />
            </View>
        </View>
    )
}

